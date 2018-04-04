import { Component, Input } from '@angular/core';
import { OperacaoFluxoParcela } from '../../../../models/operacao/operacao-fluxo-parcela';

@Component({
    selector: 'operacao-fluxo-parcelas',
    templateUrl: './operacao-fluxo-parcelas.component.html',
    styleUrls: []
})

export class OperacaoFluxoParcelasComponent {
    @Input() fluxoParcelas: OperacaoFluxoParcela;
}