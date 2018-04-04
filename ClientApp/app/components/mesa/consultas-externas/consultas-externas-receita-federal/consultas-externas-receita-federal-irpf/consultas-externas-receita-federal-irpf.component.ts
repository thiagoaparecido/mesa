import { Component, Input } from '@angular/core';
import { Irpf } from '../../../../../models/consultas-externas/receita-federal/irpf';

@Component({
    selector: 'consultas-externas-receita-federal-irpf',
    templateUrl: './consultas-externas-receita-federal-irpf.component.html'
})

export class ConsultasExternasReceitaFederalIrpfComponent {
    @Input() irpf: Irpf[];    

    public getExibirData(data: Date): boolean {
        if (data.toString() != '0001-01-01T00:00:00'){
            return true;
        }
        return false;
    }
}