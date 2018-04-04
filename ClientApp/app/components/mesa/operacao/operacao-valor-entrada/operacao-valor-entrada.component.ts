import { Component, Input, OnInit } from '@angular/core';

import { OperacaoService } from './../../../../services/proposta/operacao.service';
import { OperacaoValores } from '../../../../models/operacao/operacao-valores';

@Component({
    selector: 'operacao-valor-entrada',
    templateUrl: './operacao-valor-entrada.component.html',
    providers: [ OperacaoService ]
})

export class OperacaoValorEntradaComponent {
    @Input() idProposta: string;
    exibirModal: boolean = false;
    mensagem: string = "";
    valores: OperacaoValores;

    constructor(private operacaoService: OperacaoService) { }

    ngOnInit(): void {
        this.getValores();
    }

    getValores() {
        this.operacaoService.getValores(this.idProposta).subscribe(
            data => {
                this.valores = data
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Falha ao obter valores';
            }
        )
    }

    fecharModal(fecharModal: boolean) {
        this.exibirModal = fecharModal;
    }
}
