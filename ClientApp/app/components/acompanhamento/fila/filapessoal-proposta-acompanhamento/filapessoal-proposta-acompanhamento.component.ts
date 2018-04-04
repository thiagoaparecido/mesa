import { Component, Input, OnInit } from '@angular/core';
import { FilaCreditoService } from './../../../../services/fila-credito/fila-credito.service';
import { PropostaAcompanhamento } from './../../../../models/proposta-acompanhamento';

@Component({
    selector: 'filapessoal-proposta-acompanhamento',
    templateUrl: './filapessoal-proposta-acompanhamento.component.html',
    providers: [ FilaCreditoService ]
})
export class FilaPessoalPropostaAcompanhamentoComponent implements OnInit {
    @Input() idProposta:string;
    @Input() tpMesa:string = '';
    acompanhamentos: PropostaAcompanhamento[] = [];
    isHide: boolean = true;
    loading: boolean = false;

    constructor(private filaCreditoService: FilaCreditoService){}

    ngOnInit(): void {
        this.isHide = this.tpMesa === '0:00:00'
    }

    listar(){
        this.getAcompanhamentos();
    }

    private getAcompanhamentos() {
        this.loading = true;
        this.filaCreditoService.getFilaPropostaAcompanhamento(this.idProposta).subscribe(
            data => this.acompanhamentos = data,
            error => this.loading = false,
            () => this.loading = false
        )
    };    
}