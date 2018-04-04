import { Component, Input, OnInit } from '@angular/core';
import { BureauService } from '../../../../../services/consultas-externas/bureau.service';
import { BureauParentesco } from '../../../../../models/consultas-externas/bureau/bureau-parentesco/bureau-parentesco';

@Component({
    selector: 'consultas-externas-bureau-parentesco',
    templateUrl: './consultas-externas-bureau-parentesco.component.html',
    providers: [ BureauService ]
})

export class ConsultasExternasBureauParentescoComponent implements OnInit {
    @Input() idProposta: string;
    parentescos: BureauParentesco[];
    mensagem: string;
    exibirModal: boolean;
    loading: boolean = false;

    constructor(private bureauService: BureauService) {}

    ngOnInit(): void {
        this.getParentescos();
    }

    getParentescos(): void {
        this.bureauService.getBureauParentescos(this.idProposta).subscribe(
            data => {
                if (data != null){
                    this.parentescos = data;
                }
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }
}