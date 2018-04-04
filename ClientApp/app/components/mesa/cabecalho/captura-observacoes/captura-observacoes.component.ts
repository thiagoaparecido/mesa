import { Component, Input, OnInit } from '@angular/core';
import { PropostaService } from '../../../../services/proposta/proposta.service';
import { CapturaObservacao } from '../../../../models/proposta/captura-observacao';

@Component({
    selector: 'captura-observacoes',
    templateUrl: './captura-observacoes.component.html',
    providers: [ PropostaService ]
})

export class CapturaObservacoesComponent implements OnInit {

    @Input() idProposta: string;
    capturaObservacao: CapturaObservacao;
    exibirModal: boolean;
    mensagem: string;

    constructor(private propostaService: PropostaService) {}

    ngOnInit(): void {
        this.getObservacoesCapturaProposta();
    }

    getObservacoesCapturaProposta(): void {
        this.propostaService.getCapturaObservacao(this.idProposta).subscribe(
            data => {
                this.capturaObservacao = data;
            },
            error => {
                this.exibirModal = true;
                this.mensagem = "Erro ao obter observações da captura da proposta";
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }
}