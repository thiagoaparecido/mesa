import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Operacao } from '../../../../models/operacao/operacao';

@Component({
    selector: 'barra-fixa-dados-operacao',
    templateUrl: './barra-fixa-dados-operacao.component.html'
})

export class BarraFixaDadosOperacaoComponent {
    @Input() operacao: Operacao;
}