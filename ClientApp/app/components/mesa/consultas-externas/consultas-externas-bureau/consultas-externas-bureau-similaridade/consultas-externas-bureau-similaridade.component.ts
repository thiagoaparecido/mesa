import { Component, Input, OnInit } from '@angular/core';
import { BureauService } from '../../../../../services/consultas-externas/bureau.service';
import { BureauSimilaridade } from '../../../../../models/consultas-externas/bureau/bureau-similaridade/bureau-similaridade';

enum TipoPessoa {
    VisaoGeral = 0,
    Proponente = 1,
    Avalista = 2,
    Conjuge = 3,
    Cnpj = 4
}

@Component({
    selector: 'consultas-externas-bureau-similaridade',
    templateUrl: './consultas-externas-bureau-similaridade.component.html',
    providers: [ BureauService ]
})

export class ConsultasExternasBureauSimilaridadeComponent implements OnInit {
    @Input() idProposta: string;
    similaridades: BureauSimilaridade[];
    mensagem: string;
    exibirModal: boolean;
    loading: boolean = false;

    constructor(private bureauService: BureauService) {}

    ngOnInit(): void {
        this.getSimilaridades(TipoPessoa.Proponente);
    }

    getSimilaridades(tipoPessoa: TipoPessoa): void {
        this.loading = true;
        this.bureauService.getBureauSimilaridades(this.idProposta, tipoPessoa).subscribe(
            data => {
                this.loading = false;
                if (data != null){
                    this.similaridades = data;
                } else {
                    this.exibirModal = true;
                    this.mensagem = "Não foi possível realizar a consulta";
                }
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = 'Erro ao obter Similaridade';
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }

    exibir(tipo: number): void {
        this.getSimilaridades(<TipoPessoa>tipo);
    }
}