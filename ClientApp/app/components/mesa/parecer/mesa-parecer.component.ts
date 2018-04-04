import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PropostaService } from '../../../services/proposta/proposta.service';
import { ParecerAcao } from '../../../models/proposta/parecer/parecer-acao';

declare var $:any;
@Component({
    selector: 'mesa-parecer',
    templateUrl: './mesa-parecer.component.html'
})

export class MesaParecerComponent implements OnInit {
    idProposta: string;
    acao: ParecerAcao;
    acoes: ParecerAcao[];
    mensagem: string;
    exibirModal: boolean;

    constructor(private propostaService: PropostaService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.getIdProposta();
        $('[data-toggle="toggle"]').bootstrapToggle({
            on: 'SIM',
            off: 'NÃO',
            offstyle: 'danger',
            onstyle: 'primary',
            style: 'toggle-configuration'
        });
    }

    private getAcoes(){
        this.propostaService.getParecerAcoes(this.idProposta).subscribe(
            data => {
                this.acoes = data
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Erro ao listar ações';
            }
        )
    }

    getIdProposta():void{
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idProposta = params['idProposta'];
            this.getAcoes();
          });                 
    }

    public exibirAcao(acao: ParecerAcao){
        this.acao = acao;
    }

    getColor(parecer:string){
        
        let classe: string;

        switch(parecer.trim()){
            case "APROVAR": {
                classe = "btn-success";
                break;
            }
            case "AGENDAR": {
                classe = "btn-info";
                break;
            }
            case "ENCAMINHAR": {
                classe = "btn-primary";
                break;
            }
            case "PENDENCIAR": {
                classe = "btn-warning";
                break;
            }
            case "RECUSAR": {
                classe = "btn-danger";
                break;
            }
            default: {
                classe = "btn-secondary";
                break;
            }
        }

        return classe;
    }

    fecharModal(fecharModal: boolean) {
        this.exibirModal = fecharModal;
    }
}