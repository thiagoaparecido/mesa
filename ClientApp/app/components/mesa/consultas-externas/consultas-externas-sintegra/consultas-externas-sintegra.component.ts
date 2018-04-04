import { Component, Input, OnInit } from '@angular/core';
import { SintegraService } from '../../../../services/consultas-externas/sintegra.service';
import { Sintegra } from '../../../../models/consultas-externas/sintegra/sintegra';
enum TipoPessoa {
    VisaoGeral = 0,
    Proponente = 1,
    Avalista = 2,
    Conjuge = 3,
    Cnpj = 4
}
@Component({
    selector: 'consultas-externas-sintegra',
    templateUrl: './consultas-externas-sintegra.component.html',
    providers: [ SintegraService ]
})

export class ConsultasExternasSintegraComponent implements OnInit {
    @Input() idProposta: string;
    sintegras: Sintegra[];
    mensagem: string;
    exibirModal: boolean;
    loading: boolean = false;
    consultaSemDados: boolean = false;

    constructor(private sintegraService: SintegraService) {}

    ngOnInit(): void {
        this.getSintegra(TipoPessoa.Proponente);
    }

    getSintegra(tipoPessoa: TipoPessoa): void {
        this.loading = true;
        this.sintegraService.getSintegra(this.idProposta, tipoPessoa).subscribe(
            data => {
                this.loading = false;
                this.sintegras = data;   
                if (data != null){
                    if (data.length == 0){
                        this.consultaSemDados = true
                    } else {
                        this.consultaSemDados = false;
                    }
                } else {
                    this.consultaSemDados = false;
                    this.exibirModal = true;
                    this.mensagem = "Não foi possível realizar a consulta";
                }
            },
            error => {
                this.consultaSemDados = false;
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = "Erro ao listar SINTEGRA";
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }

    exibir(tipo: number): void {
        this.getSintegra(<TipoPessoa>tipo);
    }
}