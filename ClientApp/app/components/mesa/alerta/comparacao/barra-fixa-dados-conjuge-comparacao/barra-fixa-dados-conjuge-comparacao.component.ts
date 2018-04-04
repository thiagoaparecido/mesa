import { Component, Input } from '@angular/core';
import { Conjuge } from './../../../../../models/conjuge';

@Component({
    selector: 'barra-fixa-dados-conjuge-comparacao',
    templateUrl: './barra-fixa-dados-conjuge-comparacao.component.html'
})

export class BarraFixaDadosConjugeComparacaoComponent {    
    @Input() conjuge?: Conjuge;            
}