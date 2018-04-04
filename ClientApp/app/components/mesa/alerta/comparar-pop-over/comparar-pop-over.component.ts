import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AlertaHistorico } from '../../../../models/alerta-historico';
import { AlertaService } from '../../../../services/proposta/alerta.service';

@Component({
    selector: 'comparar-pop-over',
    templateUrl: './comparar-pop-over.component.html',
    providers: [ AlertaService ]
})

export class CompararPopOverComponent implements OnInit {

    @Input() idProposta: string;
    @Input() propostasAComparar: string[];
    @Input() exibirPopUpComparacao: boolean;
    @Output() changeProposta = new EventEmitter<string[]>();
    @Output() changeExibirComparacao = new EventEmitter<boolean>();    

    historicos: AlertaHistorico[];
    propostas: string[] = [];
    loading:boolean;
    compararDisabled: boolean = true;
    exibirPopUp: boolean = false;

    constructor(private alertaService: AlertaService){}
    
    ngOnInit(): void {
        this.getHistoricos();        
    }

    private getHistoricos() {
        this.alertaService.getAlertaHistorico(this.idProposta).subscribe(
            data => {                
                this.historicos = data;
                this.exibirPopUp = this.historicos.length > 0;
            },
            error => this.loading = false,
            () => this.loading = false
        )        
    }
    
    selecionar(event:any) {        
        let propostaSelecionada = event.target.attributes["data-target"].value;
        if (event.target.checked == true){
            if (this.propostas.length > 2){
                alert("Máximo de 3 propostas a serem comparadas ao mesmo tempo.");
                event.target.checked = false;
            } else {
                this.propostas.push(propostaSelecionada);    
                this.compararDisabled = false;
            }
        } else {
            var index = this.propostas.indexOf(propostaSelecionada, 0);
            if (index > -1) {
                this.propostas.splice(index, 1);
            }
            if (this.propostas.length == 0)            {
                this.compararDisabled = true;
            }
        }
    }

    closeModal($event:any){
        this.exibirPopUpComparacao = false;
        this.changeExibirComparacao.emit(this.exibirPopUpComparacao);
    }

    compararPropostasSelecionadas($event:any) {
        this.exibirPopUpComparacao = false;
        this.changeExibirComparacao.emit(this.exibirPopUpComparacao);
        this.propostasAComparar = this.propostas;
        this.changeProposta.emit(this.propostasAComparar);
    }
}