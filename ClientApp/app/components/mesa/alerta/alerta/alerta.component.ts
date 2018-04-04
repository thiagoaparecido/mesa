import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'alerta',
    templateUrl: './alerta.component.html'
})

export class AlertaComponent implements OnInit {
   
    idProposta:string;
    propostas: string[];
    compararPropostas: boolean = false;
    exibirComparacao: boolean = false;
    exibirPopUpComparacao: boolean = false;
    
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
          this.getIdProposta();    
    }

    getIdProposta():void{
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idProposta = params['idProposta'];
          });        
    }

    compararChange($event:any){
        if ($event.toString().indexOf("[") == -1) {
            this.propostas = $event;
            this.exibirComparacao = true;
        }
    }

    changePopUpComparacao(exibicao:boolean){
        this.exibirPopUpComparacao = exibicao;
    }

    telefoneAlertaChange(exibicao:boolean){
        this.exibirPopUpComparacao = exibicao;
    }

    fecharComparacao(fechar: boolean): void {
        this.exibirComparacao = !fechar;
    }
}