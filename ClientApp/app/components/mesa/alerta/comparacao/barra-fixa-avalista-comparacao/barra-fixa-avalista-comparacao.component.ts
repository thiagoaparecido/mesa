import { Component, Input  } from '@angular/core';
import { Avalista } from '../../../../../models/avalista';

@Component({
    selector: 'barra-fixa-avalista-comparacao',
    templateUrl: './barra-fixa-avalista-comparacao.component.html'
})

export class BarraFixaAvalistaComparacaoComponent {
    @Input() avalistas: Avalista[];
}