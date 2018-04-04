import { Component, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PropostaService } from '../../../../services/proposta/proposta.service';
import { ParecerMotivo } from '../../../../models/proposta/parecer/parecer-motivo';
import { ParecerRecusar } from '../../../../models/proposta/parecer/parecer-recusar';

@Component({
    selector: 'mesa-parecer-recusar',
    templateUrl: './mesa-parecer-recusar.component.html'
})

export class MesaParecerRecusarComponent implements OnInit {

    @Input() idAcao: number;
    @Input() idProposta: string;
    motivos: ParecerMotivo[];
    mensagem: string;
    exibirModal: boolean;
    motivosSelecionadas: number[] = [];
    myForm: FormGroup;
    motivo: FormControl;
    observacao: FormControl;

    constructor(private propostaService: PropostaService, private router: Router) {}

    ngOnInit(): void {
        this.createFormControls();
        this.createForm();          
        this.getMotivos();
    }

    private createFormControls(): void {        
        this.observacao = new FormControl('', Validators.required);
    }

    private createForm(): void {
        this.myForm = new FormGroup({            
            observacao: this.observacao
        })
    }
    
    private getMotivos(): void {
        this.propostaService.getParecerMotivos(this.idAcao).subscribe(
            data => {
                if (data != null) {
                    this.motivos = data;          
                } else {
                    this.exibirModal = true;
                    this.mensagem = 'Erro ao listar motivos';
                }
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Erro ao listar motivos';
            }
        )
    }

    recusar(): void {

        let motivos: ParecerMotivo[] = [];

        this.motivosSelecionadas.forEach(element => {
            var elePendencia = this.motivos.find(x => x.idMotivo == element);
            if (elePendencia != null){
                let motivo: ParecerMotivo = {                    
                    idMotivo: element,
                    dsMotivo: ''
                }
                motivos.push(motivo);
            }
        });

        var parecerRecusar: ParecerRecusar = new ParecerRecusar();
        parecerRecusar.idProposta = this.idProposta;
        parecerRecusar.idAcao =  this.idAcao;        
        parecerRecusar.motivos = motivos;
        parecerRecusar.parecerObservacao = this.observacao.value;
        parecerRecusar.observacao = "" + window.sessionStorage.getItem("parecer");

        this.propostaService.postRecusar(parecerRecusar).subscribe(
            data => {
                if (data.length == 0) {
                    this.propostaService.verificarNavegacaoProximaProposta();
                } else {
                    this.exibirModal = true;
                    this.mensagem = data.join('<br />');
                }
            }, error => {
                this.exibirModal = true;
                this.mensagem = "Erro ao aprovar";
            }
        )     
    }

    adicionalChange(idMotivo: number, isChecked: boolean) {
        if (isChecked) {
            this.motivosSelecionadas.push(idMotivo);
        } else {
            var index = this.motivosSelecionadas.indexOf(idMotivo, 0);
            if (index > -1) {
                this.motivosSelecionadas.splice(index, 1);
            }
        }
    }

    fecharModal(fecharModal: boolean) {
        this.exibirModal = fecharModal;
    }
}