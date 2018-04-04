import { Component, Input, OnInit } from '@angular/core';
import { ComprotService } from '../../../../services/consultas-externas/comprot.service';
import { Comprot } from '../../../../models/consultas-externas/comprot/comprot';
enum TipoPessoa {
    VisaoGeral = 0,
    Proponente = 1,
    Avalista = 2,
    Conjuge = 3,
    Cnpj = 4
}
@Component({
    selector: 'consultas-externas-comprot',
    templateUrl: './consultas-externas-comprot.component.html',
    providers: [ ComprotService ]
})

export class ConsultasExternasComprotComponent implements OnInit {
    @Input() idProposta: string;
    comprot: Comprot[];
    mensagem: string;
    exibirModal: boolean;
    loading: boolean = false;

    constructor(private comprotService: ComprotService) {}

    ngOnInit(): void {
        this.getComprot(TipoPessoa.Proponente);
    }

    getComprot(tipoPessoa: TipoPessoa): void {
        this.loading = true;
        this.comprotService.getComprot(this.idProposta, tipoPessoa).subscribe(            
            data => {
                this.loading = false;
                if (data != null){
                    this.comprot = data;
                } else {
                    this.exibirModal = true;
                    this.mensagem = "Não foi possível realizar a consulta";
                }
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = "Erro ao listar COMPROT";
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }

    exibir(tipo: number): void {
        this.getComprot(<TipoPessoa>tipo);
    }
}