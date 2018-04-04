import { Component, Input, OnInit } from '@angular/core';
import { MesaPropostaConceito } from './../../../../models/mesa-proposta-conceito';
import { PropostaService } from './../../../../services/proposta/proposta.service';

@Component({
    selector: 'barra-fixa-conceito',
    templateUrl: './barra-fixa-conceito.component.html'
})

export class BarraFixaConceitoComponent implements OnInit {
    @Input() idProposta: string;
    conceito: MesaPropostaConceito;
    loading: boolean = false;

    constructor(private propostaService: PropostaService) {}

    private getConceitoProposta(){
        this.loading = true;
        this.propostaService.getConceitoProposta(this.idProposta).subscribe(
            data => this.conceito = data,
            error => this.loading = false,
            () => this.loading = false
        )
    }

    ngOnInit() {
        this.getConceitoProposta();
    }
}