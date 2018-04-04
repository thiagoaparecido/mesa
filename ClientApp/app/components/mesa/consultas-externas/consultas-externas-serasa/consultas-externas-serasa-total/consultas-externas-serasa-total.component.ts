import { Component, Input } from '@angular/core';
import { SerasaTotal } from '../../../../../models/consultas-externas/serasa/serasa-total';

@Component({
    selector: 'consultas-externas-serasa-total',
    templateUrl: './consultas-externas-serasa-total.component.html'
})

export class ConsultasExternasSerasaTotalComponent {
    @Input() total: SerasaTotal;
}