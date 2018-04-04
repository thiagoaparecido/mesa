import { Component, Input, OnInit } from '@angular/core';
import { Portal } from '../../../../models/consultas-externas/portal/portal';
import { PortalService } from '../../../../services/consultas-externas/portal.services';
enum TipoPessoa {
    VisaoGeral = 0,
    Proponente = 1,
    Avalista = 2,
    Conjuge = 3,
    Cnpj = 4
}
@Component({
    selector: 'consultas-externas-portal',
    templateUrl: './consultas-externas-portal.component.html',
    providers: [ PortalService ]
})

export class ConsultasExternasPortalComponent implements OnInit {
    @Input() idProposta: string;
    portal: Portal[];
    mensagem: string;
    exibirModal: boolean;
    loading: boolean;

    constructor(private portalService: PortalService) {}

    ngOnInit(): void {
        this.getPortal(TipoPessoa.Proponente);
    }

    getPortal(tipoPessoa: TipoPessoa): void {
        this.loading = true;
        this.portalService.getPortal(this.idProposta, tipoPessoa).subscribe(
            data => {
                this.loading = false;
                if (data != null){
                    this.portal = data;
                } else {
                    this.exibirModal = true;
                    this.mensagem = "Não foi possível realizar a consulta";
                }
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = "Erro ao listar PORTAL";
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }

    exibir(tipo: number): void {
        this.getPortal(<TipoPessoa>tipo);
    }
}