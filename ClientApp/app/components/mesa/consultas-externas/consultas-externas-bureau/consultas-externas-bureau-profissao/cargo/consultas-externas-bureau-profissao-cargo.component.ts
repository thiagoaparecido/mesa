import { Component, Input } from '@angular/core';
import { BureauCargo } from '../../../../../../models/consultas-externas/bureau/bureau-profissao/bureau-cargo';

@Component({
    selector: 'consultas-externas-bureau-profissao-cargo',
    templateUrl: './consultas-externas-bureau-profissao-cargo.component.html'
})

export class ConsultasExternasBureauProfissaoCargoComponent {
    @Input() cargos: BureauCargo[];
}