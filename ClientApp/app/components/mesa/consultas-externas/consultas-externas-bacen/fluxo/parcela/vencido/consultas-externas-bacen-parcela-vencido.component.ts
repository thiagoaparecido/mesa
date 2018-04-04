import { Component, Input } from '@angular/core';
import { BacenFluxo } from '../../../../../../../models/consultas-externas/bacen/bacen-fluxo/bacen-fluxo';

@Component({
    selector: 'consultas-externas-bacen-parcela-vencido',
    templateUrl: 'consultas-externas-bacen-parcela-vencido.component.html'
})

export class ConsultasExternasBacenParcelaVencidoComponent {
    @Input() fluxo: BacenFluxo;
}