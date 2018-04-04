import { Component, Input } from '@angular/core';
import { Receita } from '../../../../../models/consultas-externas/receita-federal/receita';

@Component({
    selector: 'consultas-externas-receita-federal-receita',
    templateUrl: './consultas-externas-receita-federal-receita.component.html'
})

export class ConsultasExternasReceitaFederalReceitaComponent {
    @Input() receita: Receita[];    

    public getExibirData(data: Date): boolean {
        if (data.toString() != '0001-01-01T00:00:00'){
            return true;
        }
        return false;
    }
}