import { Component, Input, OnInit } from '@angular/core';
import { BureauService } from '../../../../../services/consultas-externas/bureau.service';
import { BureauRenda } from '../../../../../models/consultas-externas/bureau/bureau-renda/bureau-renda';

@Component({
    selector: 'consultas-externas-bureau-renda',
    templateUrl: './consultas-externas-bureau-renda.component.html',
    providers: [ BureauService ]
})

export class ConsultasExternasBureauRendaComponent implements OnInit {
    @Input() idProposta: string;
    renda: BureauRenda;
    mensagem: string;
    exibirModal: boolean;
    loading: boolean = false;

    constructor(private bureauService: BureauService) {}

    ngOnInit(): void {
        this.getRenda();
    }

    getRenda(): void {
        this.bureauService.getBureauRenda(this.idProposta).subscribe(
            data => {
                if (data != null){
                    this.renda = data;
                }
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }
}