import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { AlertaService } from './../../../../../services/proposta/alerta.service';
import { Perfil } from './../../../../../models/perfil';
import { FormatacaoService } from '../../../../../services/util/formatacao.service';

@Component({
    selector: 'barra-fixa-comparacao',
    templateUrl: './barra-fixa-comparacao.component.html',
    providers: [ AlertaService, FormatacaoService ]
})
export class BarraFixaComparacaoComponent implements OnInit {
    
    @Input() idProposta: string;
    @Input() propostas: string[];
    @Output() fecharComparacao = new EventEmitter<boolean>();

    perfis: Perfil[];
    loading:boolean = false;

    constructor(private alertaService: AlertaService, private formatacaoService: FormatacaoService) {}

    ngOnInit(): void {
        this.getComparacao();
    }

    private getComparacao(){
        this.alertaService.getComparacaoPropostas(this.idProposta, this.propostas).subscribe(            
            data => {
                this.perfis = data;
                for(var i = 0; i < this.perfis.length; i++){
                    this.perfis[i].perfilCliente.cep = this.formatacaoService.formataCep(this.perfis[i].perfilCliente.cep);
                }
            },
            error => {
                this.loading = false;
            },
            () =>this.loading = false
        )       
    }

    closeComparacao(): void {
        this.fecharComparacao.emit(true);
    }
}