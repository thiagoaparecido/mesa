import { Component, Input } from '@angular/core';
import { ConsultasInternasService } from '../../../../services/proposta/consultas-internas.service';
import { CadastroCCL } from '../../../../models/consultas-internas/ccl/cadastro-ccl';
import { ResumoCCL } from '../../../../models/consultas-internas/ccl/resumo-ccl';

@Component({
    selector: 'consultas-internas-ccl',
    templateUrl: './consultas-internas-ccl.component.html',
    styleUrls: [],
    providers: [ ConsultasInternasService ]
})

export class ConsultasInternasCCLComponent {
    @Input() idProposta: string;
}