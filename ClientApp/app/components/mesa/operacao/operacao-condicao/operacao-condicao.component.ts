import { Component, Input } from '@angular/core';
import { OperacaoDados } from '../../../../models/operacao/operacao-dados';

@Component({
    selector: 'operacao-condicao',
    templateUrl: './operacao-condicao.component.html',
    styleUrls: []
})

export class OperacaoCondicaoComponent {
    @Input() dados: OperacaoDados;
}