import { Component, Input } from '@angular/core';
import { BureauEscolaridade } from '../../../../../../models/consultas-externas/bureau/bureau-profissao/bureau-escolaridade';

@Component({
    selector: 'consultas-externas-bureau-profissao-escolaridade',
    templateUrl: './consultas-externas-bureau-profissao-escolaridade.component.html'
})

export class ConsultasExternasBureauProfissaoEscolaridadeComponent {
    @Input() escolaridades: BureauEscolaridade[];
}