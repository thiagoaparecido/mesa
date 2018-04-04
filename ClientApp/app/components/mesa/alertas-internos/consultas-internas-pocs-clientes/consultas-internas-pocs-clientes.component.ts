import { Component, Input, OnInit } from '@angular/core';
import { Poc } from './../../../../models/poc';
import { ConsultasInternasService } from './../../../../services/proposta/consultas-internas.service';

@Component({
    selector: 'consultas-internas-pocs-clientes',
    templateUrl: './consultas-internas-pocs-clientes.component.html',
    providers: [ ConsultasInternasService]
})

export class ConsultasInternasPocsClientesComponent implements OnInit{
    @Input() idProposta:string;
    poc = {} as Poc;
    loading: boolean = false;

    constructor(private consultasInternasService: ConsultasInternasService){}

    ngOnInit(): void {
        this.getPoc();
    }

    private getPoc() {
        this.loading = true;
        this.consultasInternasService.getPoc(this.idProposta).subscribe(
            data => this.poc = data,
            error => this.loading = false
        )        
    }

}