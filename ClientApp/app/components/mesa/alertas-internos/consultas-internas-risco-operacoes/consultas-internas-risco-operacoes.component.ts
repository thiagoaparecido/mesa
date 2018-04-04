import { Component, Input, OnInit } from '@angular/core';
import { RiscosOperacoes } from './../../../../models/riscos-operacoes';
import { ConsultasInternasService } from './../../../../services/proposta/consultas-internas.service';

@Component({
    selector: 'consultas-internas-riscos-operacoes',
    templateUrl: './consultas-internas-risco-operacoes.component.html',
    styleUrls: [ ],
    providers: [ ConsultasInternasService]
})

export class ConsultasInternasRiscoOperacoesComponent implements OnInit{
    @Input() idProposta:string;
    riscosOperacoes: RiscosOperacoes[];
    loading: boolean = false;    
    
    constructor(private consultasInternasService: ConsultasInternasService){}

    ngOnInit(): void {
        this.getRiscosOperacoes();
    }
    
    private getRiscosOperacoes() {
        this.loading = true;
        this.consultasInternasService.getRiscosOperacoes(this.idProposta).subscribe(
            data => this.riscosOperacoes = data,
            error => this.loading = false,
            () => this.loading = false
        )        
    }

}