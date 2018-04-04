import { Component, Input } from '@angular/core';
import { Conjuge } from './../../../../models/conjuge';

@Component({
    selector: 'barra-fixa-dados-conjuge',
    templateUrl: './barra-fixa-dados-conjuge.component.html'
})

export class BarraFixaDadosConjugeComponent {
    @Input() conjuge: Conjuge;
}