import { Component, Input } from '@angular/core';
import { BacenModalidade } from '../../../../../../models/consultas-externas/bacen/bacen-modalidade/bacen-modalidade';

@Component({
    selector: 'consultas-externas-bacen-modalidade-outros-creditos',
    templateUrl: './consultas-externas-bacen-modalidade-outros-creditos.component.html'
})

export class ConsultasExternasBacenModalidadeOutrosCreditos {
    @Input() bacenModalidade: BacenModalidade;
}