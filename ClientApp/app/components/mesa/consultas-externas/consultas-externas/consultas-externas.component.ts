import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'consultas-externas',
    templateUrl: './consultas-externas.component.html'
})

export class ConsultasExternasComponent implements OnInit {

    idProposta: string;
    bacen: boolean = false;
    serasa: boolean = false;
    conselhoRegional: boolean = false;
    rais: boolean = false;
    comprot: boolean = false;
    sintegra: boolean = false;
    cetip: boolean = false;
    receitaFederal: boolean = true;
    portal: boolean = false;
    bureaus: boolean = false;

    constructor(private activatedRoute: ActivatedRoute) { }

    getIdProposta(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idProposta = params['idProposta'];
        });
    }

    ngOnInit(): void {
        this.getIdProposta();
    }

    exibir(opcao: string): void {
        this.bacen = false;
        this.serasa = false;
        this.conselhoRegional = false;
        this.rais = false;
        this.comprot = false;
        this.sintegra = false;
        this.cetip = false;
        this.receitaFederal = false;
        this.portal = false;
        this.bureaus = false;

        switch (opcao) {
            case "BACEN":
                this.bacen = true;
                break;
            case "SERASA":
                this.serasa = true;
                break;
            case "CONSELHO REGIONAL":
                this.conselhoRegional = true;
                break;
            case "RAIS":
                this.rais = true;
                break;
            case "COMPROT":
                this.comprot = true;
                break;
            case "SINTEGRA":
                this.sintegra = true;
                break;
            case "CETIP":
                this.cetip = true;
                break;
            case "RECEITA FEDERAL":
                this.receitaFederal = true;
                break;
            case "PORTAL":
                this.portal = true;
                break;
            case "BUREAUS":
                this.bureaus = true;
                break;
        }
    }
}