import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AlertaHistorico } from './../../../../models/alerta-historico';
import { AlertaService } from './../../../../services/proposta/alerta.service';

@Component({
    selector: 'historico-alerta',
    templateUrl: './historico-alerta.component.html',
    styleUrls: [],
    providers: [AlertaService]
})

export class HistoricoAlertaComponent implements OnInit {

    @Input() idProposta: string;
    @Input() propostasAComparar: string[];

    @Output()
    change: EventEmitter<string[]> = new EventEmitter<string[]>();

    historicos: AlertaHistorico[] = [];
    propostas: string[] = [];
    loading: boolean = true;
    compararDisabled: boolean = true;
    modalExtrato: boolean = false;
    processado: boolean = false;
    propostaExtrato: string;

    constructor(private alertaService: AlertaService) { }

    ngOnInit(): void {
        this.getHistoricos();
    }

    private getHistoricos() {
        this.loading = true;
        this.alertaService.getAlertaHistorico(this.idProposta).subscribe(
            data => {
                this.historicos = data;
                this.processado = true;
            },
            error => this.loading = false,
            () => this.loading = false
        )
    }

    selecionar(event: any) {
        let propostaSelecionada = event.target.attributes["data-target"].value;
        if (event.target.checked == true) {
            if (this.propostas.length > 2) {
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
            if (this.propostas.length == 0) {
                this.compararDisabled = true;
            }
        }
    }

    compararPropostasSelecionadas($event: any) {
        this.propostasAComparar = this.propostas;
        this.change.emit(this.propostasAComparar);
    }

    exibirExtrato(idProposta: string): void {
        this.propostaExtrato = idProposta;
        this.modalExtrato = !this.modalExtrato;
    }

    fecharExtrato(exibir: boolean): void {
        this.modalExtrato = !exibir;
    }

    visualizarProposta(proposta: string): void {
        if (proposta.length == 5) {
            var h = screen.height;
            var w = screen.width;
            let readonly: string = window.sessionStorage.getItem('readonly') == "true" ? "true" : "false";
            window.sessionStorage.setItem('readonly', "true");
            window.sessionStorage.setItem('popup', "true");
            var janela = window.open('mesa/' + proposta.toUpperCase() + '/alerta/' + proposta.toUpperCase(), '_blank', 'menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=no,resizable=no,dependent,width=' + w + ',height=' + h + ',left=0,top=0');
            window.sessionStorage.setItem('readonly', readonly);
            window.sessionStorage.setItem('popup', "false");
        }
    }
}