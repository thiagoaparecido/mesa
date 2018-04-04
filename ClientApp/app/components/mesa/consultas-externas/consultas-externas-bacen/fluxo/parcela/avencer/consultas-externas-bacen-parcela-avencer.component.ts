import { Component, Input } from '@angular/core';
import { BacenFluxo } from '../../../../../../../models/consultas-externas/bacen/bacen-fluxo/bacen-fluxo';

@Component({
    selector: 'consultas-externas-bacen-parcela-avencer',
    templateUrl: 'consultas-externas-bacen-parcela-avencer.component.html'
})

export class ConsultasExternasBacenParcelaAVencerComponent {
    @Input() fluxo: BacenFluxo;
}