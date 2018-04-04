import { Component, Input } from '@angular/core';
import { OperacaoDados } from '../../../../models/operacao/operacao-dados';

@Component({
    selector: 'operacao-revenda',
    templateUrl: './operacao-revenda.component.html',
    styleUrls: []
})

export class OperacaoRevendaComponent {
    @Input() dados: OperacaoDados;
}