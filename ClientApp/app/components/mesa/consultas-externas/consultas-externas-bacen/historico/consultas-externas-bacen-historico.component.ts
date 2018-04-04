import { Component, Input } from '@angular/core';
import { BacenHistorico } from '../../../../../models/consultas-externas/bacen/bacen-historico/bacen-historico';

@Component({
    selector: 'consultas-externas-bacen-historico',
    templateUrl: './consultas-externas-bacen-historico.component.html'
})

export class ConsultasExternasBacenHistoricoComponent {
    @Input() historicos: BacenHistorico;
}