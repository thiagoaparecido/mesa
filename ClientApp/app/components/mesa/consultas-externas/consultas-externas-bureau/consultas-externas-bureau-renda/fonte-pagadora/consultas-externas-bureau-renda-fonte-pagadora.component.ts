import { Component, Input } from '@angular/core';
import { BureauFontePagadora } from '../../../../../../models/consultas-externas/bureau/bureau-renda/bureau-fonte-pagadora';

@Component({
    selector: 'consultas-externas-bureau-renda-fonte-pagadora',
    templateUrl: './consultas-externas-bureau-renda-fonte-pagadora.component.html'
})

export class ConsultasExternasBureauRendaFontePagadoraComponent {
    @Input() fontesPagadoras: BureauFontePagadora[];
}