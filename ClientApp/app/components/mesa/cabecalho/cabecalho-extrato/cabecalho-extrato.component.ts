import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { LowerCasePipe } from '@angular/common';
import { LogService } from '../../../../services/proposta/log.service';
import { LogHistorico } from '../../../../models/log-historico';
import { GuidService } from '../../../../services/util/guid.service';
import { PropostaService } from '../../../../services/proposta/proposta.service';
import { Router } from '@angular/router';
import { Recalcular } from '../../../../models/recalcular';
import { InfoAnaliseComponent } from '../../header-mesa/info-analise/info-analise.component';

@Component({
    selector: 'cabecalho-extrato',
    templateUrl: './cabecalho-extrato.component.html',
    providers: [LogService, GuidService]
})

export class CabecalhoExtratoComponent implements OnInit {
    @Input() idProposta: string;
    @Input() exibirAcoes: boolean;
    @Output() fecharExtrato = new EventEmitter<boolean>();
    historicos: LogHistorico[];
    mensagem: string = "";
    guid: string = GuidService.getStoredGuid();
    exibirModal: boolean;
    observacao: string;
    recalcular: boolean = false;
    readonly: boolean = window.sessionStorage.getItem('readonly') == "true" ? true : false;
    loading: boolean = false;

    constructor(private logService: LogService, private propostaService: PropostaService, private router: Router) { }

    ngOnInit(): void {
        this.getHistorico();
        var parecer = window.sessionStorage.getItem('parecer');
        if (parecer != null) {
            this.observacao = parecer;
        }
    }

    getHistorico() {
        this.loading = true;
        this.logService.getHistorico(this.idProposta, this.guid).subscribe(
            data => {
                this.historicos = data;
                if (data != null) {
                    if (data.length > 0) {
                        var atuais = this.historicos.find(x => x.edicaoAtual == true);
                        this.recalcular = (window.sessionStorage.getItem('recalcular') == "true" ? true : false);
                    } else {
                        this.recalcular = false;
                    }
                } else {
                    this.recalcular = false;
                }
                this.loading = false;
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = 'Erro ao listar histórico';
            }
        )
    }

    fecharModal(fecharModal: boolean) {
        this.exibirModal = false;
        window.sessionStorage.setItem("parecer", this.observacao);
        this.fecharExtrato.emit(true);
    }

    recalcularProposta() {
        let resultado: boolean;
        let recalcular: Recalcular = { idProposta: this.idProposta, observacao: this.observacao };
        this.propostaService.postRecalcular(recalcular).subscribe(
            data => {
                resultado = data;
                if (resultado == true) {
                    this.exibirModal = false;
                    this.fecharExtrato.emit(true);
                    this.propostaService.verificarNavegacaoProximaProposta();
                } else {
                    this.exibirModal = true;
                    this.mensagem = 'Erro ao recalcular';
                }
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Erro ao recalcular';
            }
        )
    }

    parecerProposta() {
        this.exibirModal = false;
        window.sessionStorage.setItem("parecer", this.observacao);
        this.fecharExtrato.emit(true);
        this.router.navigateByUrl(`/mesa/${this.idProposta}/parecer/${this.idProposta}`);
    }

    getClassCard(logHistorico: LogHistorico) {

        if (logHistorico.campo != null) {
            if (logHistorico.campo.indexOf('Aprovada') > -1) {
                return 'extrato-green';
            }

            if (logHistorico.campo.indexOf('Recusada') > -1) {
                return 'extrato-red';
            }

            if (logHistorico.campo.indexOf('Encaminhada') > -1) {
                return 'extrato-orange';
            }

            if (logHistorico.campo.indexOf('Pendenciada') > -1) {
                return 'extrato-orange';
            }

            if (logHistorico.campo.indexOf('Agendada') > -1) {
                return 'extrato-orange';
            }

            if (logHistorico.campo.indexOf('RECALCULAR') > -1) {
                return 'extrato-orange';
            }
        }

        return 'extrato-blue';
    }

    getPosition() {
        if (this.exibirAcoes) {
            return 'modal-common-right';
        } else {
            return 'margin-left-50';
        }
    }
}