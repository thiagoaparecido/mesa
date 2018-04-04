import { Component, Input } from '@angular/core';
import { BacenModalidade } from '../../../../../../models/consultas-externas/bacen/bacen-modalidade/bacen-modalidade';

@Component({
    selector: 'consultas-externas-bacen-modalidade-data-base',
    templateUrl: './consultas-externas-bacen-modalidade-data-base.component.html'
})

export class ConsultasExternasBacenModalidadeDataBaseComponent {
    @Input() bacenModalidade: BacenModalidade;
}