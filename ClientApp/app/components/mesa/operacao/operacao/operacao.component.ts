import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { OperacaoService } from './../../../../services/proposta/operacao.service';
import { OperacaoDados } from '../../../../models/operacao/operacao-dados';
import { OperacaoFluxoParcela } from '../../../../models/operacao/operacao-fluxo-parcela';

@Component({
    selector: 'operacao',
    templateUrl: './operacao.component.html',
    styleUrls: [],
    providers: [ OperacaoService ]
})
export class OperacaoComponent implements OnInit {

    idProposta:string;
    dados: OperacaoDados;
    loading: boolean = false;
    fluxoParcelas: OperacaoFluxoParcela[];

    constructor(private operacaoService: OperacaoService, private activatedRoute: ActivatedRoute) {}

    private getDados() {
        this.loading = true;
        this.operacaoService.getDados(this.idProposta).subscribe(
            data => this.dados = data,
            error => this.loading = false,
            () => this.loading = false
        )
    }

    private getFluxoParcelas() {
        this.loading = true;
        this.operacaoService.getFluxoParcela(this.idProposta).subscribe(
            data => this.fluxoParcelas = data,
            error => this.loading = false,
            () => this.loading = false
        )
    }


    getIdProposta():void{
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idProposta = params['idProposta'];
          });        
    }

    ngOnInit(): void {
        this.getIdProposta();
        this.getDados();
        this.getFluxoParcelas();
    }
}