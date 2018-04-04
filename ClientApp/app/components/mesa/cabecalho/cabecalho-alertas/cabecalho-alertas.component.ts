import { Component, Input, OnInit } from '@angular/core';
import { MesaPropostaAlerta } from './../../../../models/mesa-proposta-alertas';
import { PropostaService } from './../../../../services/proposta/proposta.service';

@Component({
    selector: 'proposta-cabecalho-alertas',
    templateUrl: './cabecalho-alertas.component.html'
})

export class CabecalhoAlertasComponent implements OnInit {
    @Input() idProposta:string;
    alertas: MesaPropostaAlerta;
    loading: boolean = false;
    imageHeight: number = 400;
    imageWidth: number = 800; 


    constructor(private propostaService: PropostaService) {}

    private getPropostaAlertas(){
        this.loading = true;
        this.propostaService.getAlertasProposta(this.idProposta).subscribe(
            data => this.alertas = data,
            error => this.loading = false,
            () => this.loading = false
        )
    }

    ngOnInit() {
        this.getPropostaAlertas();
    }
}