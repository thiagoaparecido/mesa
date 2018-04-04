import { Component, Input, OnInit } from '@angular/core';

import { ConsultasInternasService } from '../../../../services/proposta/consultas-internas.service';
import { ContratoCdcLeasingDetalhe } from '../../../../models/consultas-internas/contrato-cdc-leasing-detalhe';

@Component({
    selector: 'consultas-internas-consultas-contrato-detalhe',
    templateUrl: './consultas-internas-consultas-contrato-detalhe.component.html',
    providers: [ ConsultasInternasService ]
})

export class ConsultasInternasConsultasContratoDetalheComponent implements OnInit {

    @Input() idContrato: string;
    loading: boolean = false;
    detalhes: ContratoCdcLeasingDetalhe[];

    constructor(private consultasInternasService: ConsultasInternasService) {}

    ngOnInit(): void {
        this.getDetalhes();
    }

    private getDetalhes(){
        this.consultasInternasService.getDetalhesContratosCdcLeasing(this.idContrato).subscribe(
            data => this.detalhes = data,
            error => {
                this.loading = false;
                console.log(error);
            },
            () => this.loading = false
        )
    }
}