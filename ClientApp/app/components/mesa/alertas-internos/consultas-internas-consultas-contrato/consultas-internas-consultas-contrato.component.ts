import { Component, Input, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { ContratoCdcLeasing } from '../../../../models/consultas-internas/contrato-cdc-leasing';
import { ConsultasInternasService } from './../../../../services/proposta/consultas-internas.service';

@Component({
    selector: 'consultas-internas-consultas-contrato',
    templateUrl: './consultas-internas-consultas-contrato.component.html',
    styleUrls: [],
    providers: [ ConsultasInternasService ]
})

export class ConsultasInternasConsultasContratoComponent implements OnInit{

    @Input() idProposta:string;    
    loading: boolean = false;
    contratos: ContratoCdcLeasing[] = [];
    
    expandedIndex:number = -1;

    constructor(private consultasInternasService: ConsultasInternasService){}

    ngOnInit(): void {
        this.getContratosCdcLeasing();
    }
    
    private getContratosCdcLeasing(){
        this.loading = true;
        this.consultasInternasService.getContratosCdcLeasing(this.idProposta).subscribe(
            data => this.contratos = data,
            error => {
                this.loading = false;
                console.log(error);
            },
            () => this.loading = false
        )
    }

    expandRow(index: number) {
        this.expandedIndex = index === this.expandedIndex ? -1 : index;
    }    
    
}