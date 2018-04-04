import { Component, OnInit, Input } from '@angular/core';
import { PropostaService } from '../../../../services/proposta/proposta.service';
import { MesaPropostaStatus } from '../../../../models/mesa-proposta-status';

@Component({
    selector: 'barra-fixa-status',
    templateUrl: './barra-fixa-status.component.html'
})

export class BarraFixaStatusComponent implements OnInit {

    @Input() idProposta:string;
    status: MesaPropostaStatus;
    
    ngOnInit(): void {
        this.getStatusProposta();
    }

    constructor(private propostaService: PropostaService){}

    private getStatusProposta(){
        this.propostaService.getStatusProposta(this.idProposta).subscribe(
            data => this.status = data,
            error => console.log(error)
        )
    }
    
}