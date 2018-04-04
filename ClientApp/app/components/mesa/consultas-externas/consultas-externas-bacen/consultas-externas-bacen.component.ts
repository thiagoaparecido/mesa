import { Component, Input, OnInit } from '@angular/core';
import { BacenService } from '../../../../services/consultas-externas/bacen.service';
import { Bacen } from '../../../../models/consultas-externas/bacen/bacen';
enum TipoPessoa {
    VisaoGeral = 0,
    Proponente = 1,
    Avalista = 2,
    Conjuge = 3,
    Cnpj = 4
}
enum SituacaoPagamento {
    VisaoGeral = 1,
    AVencer = 2,
    Vencido = 3,
    Prejuizo = 4
}
@Component({
    selector: 'consultas-externas-bacen',
    templateUrl: './consultas-externas-bacen.component.html',
    providers: [ BacenService ]
})

export class ConsultasExternasBacenComponent implements OnInit {
   
    @Input() idProposta:string;      
    mensagem: string;
    exibirModal: boolean;
    loading: boolean = false;
    bacen: Bacen;
    situacaoPagamento: SituacaoPagamento;
    tipo: number = 1;

    constructor(private bacenService: BacenService) {}

    ngOnInit(): void {
        this.getBacen(TipoPessoa.Proponente, SituacaoPagamento.AVencer);
    }

    getBacen(tipoPessoa: TipoPessoa, situacaoPagamento: SituacaoPagamento): void {
        this.loading = true;
        this.situacaoPagamento = situacaoPagamento;
        this.bacenService.getBacen(this.idProposta, tipoPessoa, situacaoPagamento).subscribe(
            data => {
                this.loading = false;
                if (data != null) {
                    this.bacen = data;
                } else {
                    this.exibirModal = true;
                    this.mensagem = "Não foi possível obter o Bacen";
                }
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = "Erro ao obter BACEN";
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }

    exibir(tipo: number): void {
        this.tipo = tipo;
        this.getBacen(<TipoPessoa>tipo, this.situacaoPagamento);
    }
}