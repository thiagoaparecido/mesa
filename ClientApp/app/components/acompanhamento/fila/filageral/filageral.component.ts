import { Component, Input } from '@angular/core';
import { FilaGeral } from '../../../../models/acompanhamento/fila/filageral';

@Component({
    selector: 'fila-geral',
    templateUrl: './filageral.component.html'
})
export class FilaGeralComponent {
    @Input() filaGeral: FilaGeral;
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
        this.expandedIndex = row === this.expandedIndex ? -1 : row;
    }
}