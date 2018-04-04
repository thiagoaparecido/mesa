import { Component, Input } from '@angular/core';
import { FilaGeral } from '../../../../models/acompanhamento/fila/filageral';

@Component({
    selector: 'fila-total-geral',
    templateUrl: './fila-total-geral.component.html'
})

export class FilaTotalGeralComponent {
    
    @Input() filaGeral: FilaGeral;  
}
