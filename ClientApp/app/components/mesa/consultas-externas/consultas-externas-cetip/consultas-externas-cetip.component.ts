import { Component, Input, OnInit } from '@angular/core';
import { Cetip } from '../../../../models/consultas-externas/cetip/cetip';
import { CetipService } from '../../../../services/consultas-externas/cetip.services';

enum TipoPessoa {
    VisaoGeral = 0,
    Proponente = 1,
    Avalista = 2,
    Conjuge = 3,
    Cnpj = 4
}
@Component({
    selector: 'consultas-externas-cetip',
    templateUrl: './consultas-externas-cetip.component.html',
    providers: [ CetipService ]
})

export class ConsultasExternasCetipComponent implements OnInit {
   
    @Input() idProposta:string;
    cetip: Cetip;
    mensagem: string;
    exibirModal: boolean;
    financiamento: boolean = false;
    loading: boolean = false;

    constructor(private cetipService: CetipService) {}    

    ngOnInit(): void {
        this.getCetip(TipoPessoa.Proponente);
    }

    getCetip(tipoPessoa: TipoPessoa): void {
        this.loading = true;
        this.cetipService.getCetip(this.idProposta, tipoPessoa).subscribe(
            data => {
                this.cetip = data;
                if (data != null){
                    this.financiamento = true;
                } else {
                    this.loading = false;
                    this.exibirModal = true;
                    this.mensagem = "Não foi possível realizar a consulta";
                }            
                this.loading = false;
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = 'Erro ao obter Cetip';
            }
        )
    }    

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }

    exibir(tipo: number): void {
        this.getCetip(<TipoPessoa>tipo);
    }
}