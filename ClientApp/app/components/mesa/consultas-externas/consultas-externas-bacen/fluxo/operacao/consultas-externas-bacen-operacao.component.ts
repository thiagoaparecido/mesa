import { Component, Input } from '@angular/core';
import { BacenFluxo } from '../../../../../../models/consultas-externas/bacen/bacen-fluxo/bacen-fluxo';

@Component({
    selector: 'consultas-externas-bacen-operacao',
    templateUrl: './consultas-externas-bacen-operacao.component.html'
})

export class ConsultasExternasBacenOperacaoComponent {
    
    @Input() fluxo: BacenFluxo;

}