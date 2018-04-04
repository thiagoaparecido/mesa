import { Component, Input } from '@angular/core';
import { PropostaDecidida} from '../../../../models/acompanhamento/fila/proposta-decidida';

@Component({
    selector: 'fila-proposta-decidida',
    templateUrl: './fila-proposta-decidida.component.html'
})

export class FilaPropostaDecididaComponent {
    @Input() propostaDecidida: PropostaDecidida;
    @Input() idCliente: string;
    expandedIndex:number = -1;
    expandedIndexChecado: number[] = [];

    expandRow(row: number) {
        var index = this.expandedIndexChecado.indexOf(row, 0);
        if (index > -1)
        {
            this.expandedIndexChecado.splice(index, 1)
        } else {
            this.expandedIndexChecado.push(row);
        }
        this.expandedIndex = row = this.expandedIndex ? -1 : row;
    }   
   
}