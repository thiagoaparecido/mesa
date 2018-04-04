import { Component, Input } from '@angular/core';
import { BacenFluxo } from '../../../../../../models/consultas-externas/bacen/bacen-fluxo/bacen-fluxo';

@Component({
    selector: 'consultas-externas-bacen-parcela',
    templateUrl: './consultas-externas-bacen-parcela.component.html'
})

export class ConsultasExternasBacenParcelaComponent {
    @Input() fluxo: BacenFluxo;
    selecao: number = 2;
    
    exibir(selecao: number): void {
        this.selecao = selecao;
    }
}