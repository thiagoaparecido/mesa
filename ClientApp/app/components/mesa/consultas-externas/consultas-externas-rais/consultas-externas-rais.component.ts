import { Component, Input, OnInit } from '@angular/core';
import { RaisService } from '../../../../services/consultas-externas/rais.service';
import { Rais } from '../../../../models/consultas-externas/rais/rais';
enum TipoPessoa {
    VisaoGeral = 0,
    Proponente = 1,
    Avalista = 2,
    Conjuge = 3,
    Cnpj = 4
}
@Component({
    selector: 'consultas-externas-rais',
    templateUrl: './consultas-externas-rais.component.html',
    providers: [ RaisService ]
})

export class ConsultasExternasRaisComponent implements OnInit {
    @Input() idProposta: string;
    rais: Rais[];
    mensagem: string;
    exibirModal: boolean;
    loading: boolean = false;

    constructor(private raisService: RaisService) {}

    ngOnInit(): void {
        this.getRais(TipoPessoa.Proponente);
    }

    getRais(tipoPessoa: TipoPessoa): void {
        this.loading = true;
        this.raisService.getRais(this.idProposta, tipoPessoa).subscribe(
            data => {
                this.loading = false;
                if (data != null){
                    this.rais = data;
                } else {
                    this.exibirModal = true;
                    this.mensagem = "Não foi possível realizar a consulta";
                }
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = "Erro ao obter RAIS";
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }

    exibir(tipo: number): void {
        this.getRais(<TipoPessoa>tipo);
    }
}