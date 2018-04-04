import { Component, Input } from '@angular/core';
import { CetipInstituicao } from '../../../../../models/consultas-externas/cetip/cetip-instituicao';

@Component({
    selector: 'consultas-externas-cetip-instituicao',
    templateUrl: './consultas-externas-cetip-instituicao.component.html'
})

export class ConsultasExternasCetipInstituicaoComponent {
    @Input() instituicao: CetipInstituicao;    

    public getExibirData(data: Date): boolean {
        if (data.toString() != '0001-01-01T00:00:00'){
            return true;
        }
        return false;
    }
}