import { Component, Input } from '@angular/core';
import { MesaPropostaStatus } from '../../../../../models/mesa-proposta-status';

@Component({
    selector: 'barra-fixa-status-comparacao',
    templateUrl: './barra-fixa-status-comparacao.component.html'
})

export class BarraFixaStatusComparacaoComponent {
    @Input() propostaStatus: MesaPropostaStatus;
    modalExtrato: boolean = false;
    exibirAcoesExtrato: false;

    exibirExtrato(): void {
        this.modalExtrato = true;
    }

    fecharExtrato(exibir: boolean): void {
        this.modalExtrato = !exibir;
    }
}