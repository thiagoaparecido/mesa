import { Component, Input } from '@angular/core';
import { BacenFluxo } from '../../../../../../../models/consultas-externas/bacen/bacen-fluxo/bacen-fluxo';

@Component({
    selector: 'consultas-externas-bacen-parcela-prejuizo',
    templateUrl: 'consultas-externas-bacen-parcela-prejuizo.component.html'
})

export class ConsultasExternasBacenParcelaPrejuizoComponent {
    @Input() fluxo: BacenFluxo;
}