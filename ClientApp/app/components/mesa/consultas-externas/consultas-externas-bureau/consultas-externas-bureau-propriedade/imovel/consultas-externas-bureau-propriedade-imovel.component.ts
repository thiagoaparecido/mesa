import { Component, Input } from '@angular/core';
import { BureauImovel } from '../../../../../../models/consultas-externas/bureau/bureau-propriedade/bureau-imovel';

@Component({
    selector: 'consultas-externas-bureau-propriedade-imovel',
    templateUrl: './consultas-externas-bureau-propriedade-imovel.component.html'
})

export class ConsultasExternasBureauPropriedadeImovelComponent {
    @Input() imoveis: BureauImovel[];
}