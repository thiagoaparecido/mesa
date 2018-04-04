import { Component, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PropostaService } from '../../../../services/proposta/proposta.service';
import { UtilService } from '../../../../services/proposta/util.service';
import { ParecerMotivo } from '../../../../models/proposta/parecer/parecer-motivo';
import { ParecerAgendar } from '../../../../models/proposta/parecer/parecer-agendar';

@Component({
    selector: 'mesa-parecer-agendar',
    templateUrl: './mesa-parecer-agendar.component.html',
    providers: [UtilService]
})

export class MesaParecerAgendarComponent implements OnInit {

    @Input() idAcao: number;
    @Input() idProposta: string;
    motivos: ParecerMotivo[];
    mensagem: string;
    exibirModal: boolean;
    horarioAtual: Date;
    tempoAdicionado: Date;
    horarioAgendado: Date;
    exibirResumo: boolean = false;
    tempo: number;

    myForm: FormGroup;
    motivo: FormControl;
    parecer: FormControl;

    constructor(private propostaService: PropostaService, private utilService: UtilService, private router: Router) { }

    ngOnInit(): void {
        this.createFormControls();
        this.createForm();
        this.getMotivos();
    }

    private createFormControls(): void {
        this.motivo = new FormControl('', Validators.required);
        this.parecer = new FormControl('', null);
    }

    private createForm(): void {
        this.myForm = new FormGroup({
            motivo: this.motivo,
            parecer: this.parecer
        });
    }

    private getMotivos(): void {
        this.propostaService.getParecerMotivos(this.idAcao).subscribe(
            data => {
                this.motivos = data;
                this.myForm.controls['motivo'].setValue(null);     
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Erro ao listar motivos';
            }
        );
    }

    resumoAgendamento(tempo: number) {
        this.exibirResumo = true;
        this.horarioAtual = new Date();
        this.tempoAdicionado = new Date(this.horarioAtual.getFullYear(), this.horarioAtual.getMonth(), this.horarioAtual.getDate(), 0, tempo, 0);
        this.tempo = tempo;
        this.utilService.getHoraAgendamento(tempo).subscribe(
            data => {
                this.horarioAgendado = data;
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Erro ao obter data de agendamento';
            });
    }

    agendar(): void {
        let agendamento: ParecerAgendar = {
            idProposta: this.idProposta,
            idAcao: this.idAcao,
            idMotivo: this.motivo.value,
            dtAgendamento: this.horarioAgendado,
            parecerObservacao: this.parecer.value,
            observacao: "" + window.sessionStorage.getItem("parecer"),
            tempoAdicionado: this.tempo
        };
        
        let resultado: string[];
        this.propostaService.postAgendar(agendamento).subscribe(
            data => {
                resultado = data;
                if (resultado.length > 0) {
                    this.exibirModal = true;
                    this.mensagem = resultado.join('<br />');
                } else {
                    this.propostaService.verificarNavegacaoProximaProposta();
                }
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Erro ao agendar';
            }
        )
    }

    fecharModal(event: any) {
        this.exibirModal = false;
    }
}