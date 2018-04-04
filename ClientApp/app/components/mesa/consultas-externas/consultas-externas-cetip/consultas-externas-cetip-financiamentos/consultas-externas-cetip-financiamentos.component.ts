import { Component, Input } from '@angular/core';
import { CetipFinanciamento } from '../../../../../models/consultas-externas/cetip/cetip-financiamento';

@Component({
    selector: 'consultas-externas-cetip-financiamentos',
    templateUrl: './consultas-externas-cetip-financiamentos.component.html'
})

export class ConsultasExternasCetipFinanciamentosComponent {
    @Input() financiamentos: CetipFinanciamento[];        
}