import { Component, Input, OnInit } from '@angular/core';
import { BureauService } from '../../../../../services/consultas-externas/bureau.service';
import { BureauPropriedade } from '../../../../../models/consultas-externas/bureau/bureau-propriedade/bureau-propriedade';

@Component({
    selector: 'consultas-externas-bureau-propriedade',
    templateUrl: './consultas-externas-bureau-propriedade.component.html',
    providers: [ BureauService ]
})

export class ConsultasExternasBureauPropriedadeComponent implements OnInit {
    @Input() idProposta: string;
    propriedade: BureauPropriedade;
    mensagem: string;
    exibirModal: boolean;
    loading: boolean = false;

    constructor(private bureauService: BureauService) {}

    ngOnInit(): void {
        this.getPropriedade();
    }

    getPropriedade(): void {
        this.bureauService.getBureauPropriedade(this.idProposta).subscribe(
            data => {
                if (data != null){
                    this.propriedade = data;
                }
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }
}