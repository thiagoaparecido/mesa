import { Component, Input } from '@angular/core';
import { BureauVeiculo } from '../../../../../../models/consultas-externas/bureau/bureau-propriedade/bureau-veiculo';

@Component({
    selector: 'consultas-externas-bureau-propriedade-veiculo',
    templateUrl: './consultas-externas-bureau-propriedade-veiculo.component.html'
})

export class ConsultasExternasBureauPropriedadeVeiculoComponent {
    @Input() veiculos: BureauVeiculo[];
}