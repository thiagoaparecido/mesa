import { Component, Input } from '@angular/core';
import { BacenModalidade } from '../../../../../models/consultas-externas/bacen/bacen-modalidade/bacen-modalidade';

@Component({
    selector: 'consultas-externas-bacen-modalidade',
    templateUrl: './consultas-externas-bacen-modalidade.component.html'
})

export class ConsultasExternasBacenModalidadeComponent {
    @Input() bacenModalidade: BacenModalidade;
}