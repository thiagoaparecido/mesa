import { Component, Input } from '@angular/core';
import { BacenFluxo } from '../../../../../models/consultas-externas/bacen/bacen-fluxo/bacen-fluxo';
@Component({
    selector: 'consultas-externas-bacen-fluxo',
    templateUrl: './consultas-externas-bacen-fluxo.component.html'
})

export class ConsultasExternasBacenFluxoComponent {
    @Input() fluxo: BacenFluxo
}