import { Component, Input, OnInit} from '@angular/core';
import { ResumoCCL } from '../../../../../models/consultas-internas/ccl/resumo-ccl';
import { ConsultasInternasService } from '../../../../../services/proposta/consultas-internas.service';

@Component({
    selector: 'consultas-internas-resumo-cadastro-ccl',
    templateUrl: './consultas-internas-resumo-cadastro-ccl.component.html',
    providers: [ ConsultasInternasService ]
})

export class ConsultasInternasResumoCadastroCCLComponent implements OnInit{

    @Input() idProposta: string;
    resumoCCL = {} as ResumoCCL;
    mensagem: string;
    exibirModal: boolean = false;

    constructor(private consultasInternasService: ConsultasInternasService) {}

    ngOnInit(): void {
        this.getResumoCCL();
    }

    private getResumoCCL(): any {
        this.consultasInternasService.getResumoCcl(this.idProposta).subscribe(
            data => {
                if (data != null){
                    this.resumoCCL = data;
                }
            },
            error => {
                this.exibirModal = true;
                this.mensagem = "Falha ao obter informações do CCL";
            }
        )
    }
}

