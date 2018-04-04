import { Component, Input, OnInit } from '@angular/core';
import { CadastroCCL } from '../../../../../models/consultas-internas/ccl/cadastro-ccl';
import { ConsultasInternasService } from '../../../../../services/proposta/consultas-internas.service';

@Component({
    selector: 'consultas-internas-cadastro-ccl',
    templateUrl: './consultas-internas-cadastro-ccl.component.html',
    providers: [ ConsultasInternasService ]
})

export class ConsultasInternasCadastroCCLComponent implements OnInit{

    @Input() idProposta: string;
    // @Input() cadastroCCL: CadastroCCL;
    cadastroCCL = {} as CadastroCCL;
    mensagem: string;
    exibirModal: boolean = false;

    constructor(private consultasInternasService: ConsultasInternasService) {}

    ngOnInit(): void {
        this.getInformacoesCCL();
    }

    private getInformacoesCCL(): any {
        this.consultasInternasService.getInformacoesCcl(this.idProposta).subscribe(
            data => {
                if (data != null){
                    this.cadastroCCL = data;
                }
            },
            error => {
                this.exibirModal = true;
                this.mensagem = "Falha ao obter informações do CCL";
            }
        )
    }

}