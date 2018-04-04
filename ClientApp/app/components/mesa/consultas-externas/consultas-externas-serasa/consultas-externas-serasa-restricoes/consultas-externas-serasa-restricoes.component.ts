import { Component, Input } from '@angular/core';
import { SerasaRestricao } from '../../../../../models/consultas-externas/serasa/serasa-restricao';

@Component({
    selector: 'consultas-externas-serasa-restricoes',
    templateUrl: './consultas-externas-serasa-restricoes.component.html'
})

export class ConsultasExternasSerasaRestricoesComponent {
    @Input() restricoes: SerasaRestricao[];    
}