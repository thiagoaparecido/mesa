import { Component, Input } from '@angular/core';
import { BacenModalidade } from '../../../../../../models/consultas-externas/bacen/bacen-modalidade/bacen-modalidade';

@Component({
    selector: 'consultas-externas-bacen-modalidade-emprestimos',
    templateUrl: './consultas-externas-bacen-modalidade-emprestimos.component.html'
})

export class ConsultasExternasBacenModalidadeEmprestimosComponent {
    @Input() bacenModalidade: BacenModalidade;
}