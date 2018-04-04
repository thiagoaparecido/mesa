import { Component, Input, OnInit } from '@angular/core';
import { Serasa } from '../../../../models/consultas-externas/serasa/serasa';
import { SerasaService } from '../../../../services/consultas-externas/serasa.service';
enum TipoPessoa {
    VisaoGeral = 0,
    Proponente = 1,
    Avalista = 2,
    Conjuge = 3,
    Cnpj = 4
}
@Component({
    selector: 'consultas-externas-serasa',
    templateUrl: './consultas-externas-serasa.component.html',
    providers: [ SerasaService ]
})

export class ConsultasExternasSerasaComponent implements OnInit {
   
    @Input() idProposta:string;
    serasa: Serasa;
    mensagem: string;
    exibirModal: boolean;
    loading: boolean = false;

    constructor(private serasaService: SerasaService) {}

    ngOnInit(): void {
        this.getSerasa(TipoPessoa.Proponente);
    }

    getSerasa(tipoPessoa: TipoPessoa): void {
        this.loading = true;
        this.serasaService.getSerasa(this.idProposta, tipoPessoa).subscribe(
            data => {
                this.loading = false;
                if (data != null){
                    this.serasa = data;
                } else {
                    this.exibirModal = true;
                    this.mensagem = "Não foi possível realizar a consulta";
                }
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = 'Erro ao obter Serasa';
            }
        )
    }    

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }

    exibir(tipo: number): void {
        this.getSerasa(<TipoPessoa>tipo);
    }
}