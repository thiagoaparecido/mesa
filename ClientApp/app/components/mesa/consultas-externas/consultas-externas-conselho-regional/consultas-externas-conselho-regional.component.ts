import { Component, Input, OnInit } from '@angular/core';
import { ConselhoRegionalService } from '../../../../services/consultas-externas/conselho-regional.service';
import { ConselhoRegional } from '../../../../models/consultas-externas/conselho-regional/conselho-regional';
enum TipoPessoa {
    VisaoGeral = 0,
    Proponente = 1,
    Avalista = 2,
    Conjuge = 3,
    Cnpj = 4
}
@Component({
    selector: 'consultas-externas-conselho-regional',
    templateUrl: './consultas-externas-conselho-regional.component.html',
    providers: [ ConselhoRegionalService ]
})

export class ConsultasExternasConselhoRegionalComponent implements OnInit {
    @Input() idProposta: string;
    conselhos: ConselhoRegional[];
    mensagem: string;
    exibirModal: boolean;
    loading: boolean = false;

    constructor(private conselhoRegionalService: ConselhoRegionalService) {}

    ngOnInit(): void {
        this.getConselhoRegional(TipoPessoa.Proponente);
    }

    getConselhoRegional(tipoPessoa: TipoPessoa): void {
        this.loading = true;
        this.conselhoRegionalService.getConselhoRegional(this.idProposta, tipoPessoa).subscribe(
            data => {
                if (data != null){
                    this.conselhos = data;
                }
                this.loading = false;
            },
            error => {
                this.loading = false;
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }

    exibir(tipo: number): void {
        this.getConselhoRegional(<TipoPessoa>tipo);
    }
}