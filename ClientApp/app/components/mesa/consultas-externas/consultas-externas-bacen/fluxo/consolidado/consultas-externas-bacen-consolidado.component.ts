import { Component, Input } from '@angular/core';
import { BacenFluxo } from '../../../../../../models/consultas-externas/bacen/bacen-fluxo/bacen-fluxo';

@Component({
    selector: 'consultas-externas-bacen-consolidado',
    templateUrl: './consultas-externas-bacen-consolidado.component.html'
})

export class ConsultasExternasBacenConsolidadoComponent {
    @Input() fluxo: BacenFluxo;
}