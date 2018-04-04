import { Component, Input } from '@angular/core';
import { BacenModalidade } from '../../../../../../models/consultas-externas/bacen/bacen-modalidade/bacen-modalidade';

@Component({
    selector: 'consultas-externas-bacen-modalidade-financiamentos',
    templateUrl: './consultas-externas-bacen-modalidade-financiamentos.component.html'
})

export class ConsultasExternasBacenModalidadeFinanciamentos {
    @Input() bacenModalidade: BacenModalidade;
}