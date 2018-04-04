import { Component, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PropostaService } from '../../../../services/proposta/proposta.service';
import { ParecerMotivo } from '../../../../models/proposta/parecer/parecer-motivo';
import { ParecerPendenciar } from '../../../../models/proposta/parecer/parecer-pendenciar';

declare var $ : any;
@Component({
    selector: 'mesa-parecer-pendenciar',
    templateUrl: './mesa-parecer-pendenciar.component.html',
})

export class MesaParecerPendenciarComponent implements OnInit {

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
        $('[data-toggle="toggle"]').bootstrapToggle({
            on: 'SIM',
            off: 'NÃO',
            offstyle: 'danger',
            onstyle: 'primary',
            style: 'toggle-configuration'
        });
    }
    

    private createFormControls(): void {        
        // Solicitado pelo Thiago Nunes a retirada da obrigatóriedade do campo Observação.
        this.observacao = new FormControl('', null);
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

    pendenciar(): void {
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

        var parecerPendenciar: ParecerPendenciar = new ParecerPendenciar();
        parecerPendenciar.idProposta = this.idProposta;
        parecerPendenciar.idAcao =  this.idAcao;        
        parecerPendenciar.motivos = motivos;
        parecerPendenciar.parecerObservacao = this.observacao.value;
        parecerPendenciar.observacao = "" + window.sessionStorage.getItem("parecer");
        this.propostaService.postPendenciar(parecerPendenciar).subscribe(
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