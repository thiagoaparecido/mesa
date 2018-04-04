import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Operacao } from '../../../../../models/operacao/operacao';

@Component({
    selector: 'barra-fixa-dados-operacao-comparacao',
    templateUrl: './barra-fixa-dados-operacao-comparacao.component.html'
})

export class BarraFixaDadosOperacaoComparacaoComponent {
    @Input() operacao: Operacao;
}