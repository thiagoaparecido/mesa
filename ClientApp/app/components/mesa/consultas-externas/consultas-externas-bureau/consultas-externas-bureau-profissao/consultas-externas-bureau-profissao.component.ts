import { Component, Input, OnInit } from '@angular/core';
import { BureauService } from '../../../../../services/consultas-externas/bureau.service';
import { BureauProfissao } from '../../../../../models/consultas-externas/bureau/bureau-profissao/bureau-profissao';

@Component({
    selector: 'consultas-externas-bureau-profissao',
    templateUrl: './consultas-externas-bureau-profissao.component.html',
    providers: [ BureauService ]
})

export class ConsultasExternasBureauProfissaoComponent implements OnInit {
    @Input() idProposta: string;
    profissao: BureauProfissao;
    mensagem: string;
    exibirModal: boolean;
    loading: boolean = false;

    constructor(private bureauService: BureauService) {}

    ngOnInit(): void {
        this.getProfissao();
    }

    getProfissao(): void {
        this.bureauService.getBureauProfissao(this.idProposta).subscribe(
            data => {
                if (data != null){
                    this.profissao = data;
                }
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }
}