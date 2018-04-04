import { Component, Input, OnInit } from '@angular/core';
import { MesaPropostaStatus } from './../../../../models/mesa-proposta-status';
import { PropostaService } from './../../../../services/proposta/proposta.service';

@Component({
    selector: 'proposta-cabecalho-status',
    templateUrl: './cabecalho-status.component.html'
})

export class CabecalhoStatusComponent implements OnInit {
    @Input() idProposta:string;
    status: MesaPropostaStatus;
    loading: boolean = false;

    constructor(private propostaService: PropostaService){}

    private getStatusProposta(){
        this.loading = true;
        this.propostaService.getStatusProposta(this.idProposta).subscribe(
            data => this.status = data,
            error => this.loading = false,
            () => this.loading = false
        )
    }

    ngOnInit(): void {
        this.getStatusProposta();
    }
}