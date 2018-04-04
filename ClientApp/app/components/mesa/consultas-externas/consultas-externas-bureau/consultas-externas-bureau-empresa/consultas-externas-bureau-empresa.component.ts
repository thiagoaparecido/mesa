import { Component, Input, OnInit } from '@angular/core';
import { BureauService } from '../../../../../services/consultas-externas/bureau.service';
import { BureauEmpresa } from '../../../../../models/consultas-externas/bureau/bureau-empresa/bureau-empresa';

@Component({
    selector: 'consultas-externas-bureau-empresa',
    templateUrl: './consultas-externas-bureau-empresa.component.html',
    providers: [ BureauService ]
})

export class ConsultasExternasBureauEmpresaComponent implements OnInit {
    @Input() idProposta: string;
    empresas: BureauEmpresa[];
    mensagem: string;
    exibirModal: boolean;
    loading: boolean = false;

    constructor(private bureauService: BureauService) {}

    ngOnInit(): void {
        this.getEmpresas();
    }

    getEmpresas(): void {
        this.bureauService.getBureauEmpresas(this.idProposta).subscribe(
            data => {
                if (data != null){
                    this.empresas = data;
                }
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }
}