import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'proposta-cabecalho',
    templateUrl: './cabecalho.component.html'
})

export class CabecalhoComponent {
    @Input() idProposta:string;
    modalExtrato: boolean = false;
    readonly: boolean = window.sessionStorage.getItem('readonly') == "true" ? true : false;
    popup: boolean = window.sessionStorage.getItem('popup') == "true" ? true: false;

    exibirAcoesExtrato: boolean = true;

    constructor(private router: Router) { }

    exibirExtrato(): void {
        this.modalExtrato = !this.modalExtrato;
    }

    fecharExtrato(exibir: boolean): void {
        this.modalExtrato = !exibir;
    }

    voltarParaFila(): void {
        this.router.navigateByUrl(`/mesa`);
    }

    fecharJanela(): void {
        self.close();
    }
}