import { Component, Input } from '@angular/core';
import { Credd } from '../../../../../models/consultas-externas/receita-federal/credd';

@Component({
    selector: 'consultas-externas-receita-federal-credd',
    templateUrl: './consultas-externas-receita-federal-credd.component.html'
})

export class ConsultasExternasReceitaFederalCreddComponent {
    @Input() credd: Credd[];    
}