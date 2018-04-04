import { Component, Input } from '@angular/core';
import { CetipBem } from '../../../../../models/consultas-externas/cetip/cetip-bem';

@Component({
    selector: 'consultas-externas-cetip-bem',
    templateUrl: './consultas-externas-cetip-bem.component.html'
})

export class ConsultasExternasCetipBemComponent {
    @Input() bem: CetipBem;    
}