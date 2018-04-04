import { Component, Input } from '@angular/core';
import { BureauFonteRenda } from '../../../../../../models/consultas-externas/bureau/bureau-renda/bureau-fonte-renda';

@Component({
    selector: 'consultas-externas-bureau-renda-fonte-renda',
    templateUrl: './consultas-externas-bureau-renda-fonte-renda.component.html'
})

export class ConsultasExternasBureauRendaFonteRendaComponent {
    @Input() fontesRendas: BureauFonteRenda[];
}