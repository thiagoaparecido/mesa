import { Component, Input, OnInit } from '@angular/core';
import { ReceitaFederalService } from '../../../../services/consultas-externas/receita-federal.service';
import { ReceitaFederal } from '../../../../models/consultas-externas/receita-federal/receita-federal';
enum TipoPessoa {
    VisaoGeral = 0,
    Proponente = 1,
    Avalista = 2,
    Conjuge = 3,
    Cnpj = 4
}
@Component({
    selector: 'consultas-externas-receita-federal',
    templateUrl: './consultas-externas-receita-federal.component.html',
    providers: [ ReceitaFederalService ]
})

export class ConsultasExternasReceitaFederalComponent implements OnInit {
    
    @Input() idProposta: string;
    receitaFederal: ReceitaFederal;
    mensagem: string;
    exibirModal: boolean;
    loading: boolean = false;

    constructor(private receitaFederalService: ReceitaFederalService) {}

    ngOnInit(): void {
        this.getReceitaFederal(TipoPessoa.Proponente);
    }

    getReceitaFederal(tipoPessoa: TipoPessoa): void {
        this.loading = true;
        this.receitaFederalService.getReceitaFederal(this.idProposta, tipoPessoa).subscribe(
            data => {
                this.loading = false;
                if (data != null){
                    this.receitaFederal = data;
                } else {
                    this.exibirModal = true;
                    this.mensagem = "Não foi possível realizar a consulta";
                }        
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = "Erro ao listar Receita Federal";
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }

    exibir(tipo: number): void {
        this.getReceitaFederal(<TipoPessoa>tipo);
    }
}