import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { AlertaService } from '../../../../services/proposta/alerta.service';
import { AlertaHistorico } from '../../../../models/alerta-historico';

@Component({
    selector: 'telefone-alerta',
    templateUrl: './telefone-alerta.component.html',
    providers: [ AlertaService ]
})

export class TelefoneAlertaComponent implements OnInit {

    @Input() idProposta:string;  
    @Input() exibirPopUpComparacao: boolean;
    @Output() changeExibicao = new EventEmitter<boolean>();
    exibirBtnComparar: boolean = false;

    constructor(private alertaService: AlertaService) {}
    
    ngOnInit(): void {
        this.getHistoricos();
    }
    
    exibirComparar($event:any){
        this.exibirPopUpComparacao = true;
        this.changeExibicao.emit(this.exibirPopUpComparacao);
    }

    private getHistoricos() {
        var historicos: AlertaHistorico[];
        this.alertaService.getAlertaHistorico(this.idProposta).subscribe(
            data => {
                historicos = data;
                this.exibirBtnComparar = historicos.length > 0;
            },
            error => this.exibirBtnComparar = false
        )        
    }
}