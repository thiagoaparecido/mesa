import { Component, Input, OnInit } from '@angular/core';
import { ConsultasInternasService } from '../../../../services/proposta/consultas-internas.service';
import { ContratoCdcLeasingTotal } from '../../../../models/consultas-internas/contrato-cdc-leasing-total';

@Component({
    selector: 'consultas-internas-consultas-contrato-total',
    templateUrl: './consultas-internas-consultas-contrato-total.component.html',
    providers: [ ConsultasInternasService ]
})

export class ConsultasInternasConsultasContratoTotalComponent implements OnInit {

    @Input() idProposta: string;
    loading: boolean = false;
    total: ContratoCdcLeasingTotal;

    constructor(private consultasInternasService: ConsultasInternasService) {}
    
    ngOnInit(): void {
        this.getTotais();
    }
    
    private getTotais() {
        this.consultasInternasService.getTotalContratosCdcLeasing(this.idProposta).subscribe(
            data => this.total = data,
            error => {
                this.loading = false;
                console.log(error);
            },
            () => this.loading = false
        )
    }
}