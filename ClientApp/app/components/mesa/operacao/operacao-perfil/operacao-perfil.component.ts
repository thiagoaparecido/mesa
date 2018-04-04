import { Component, Input } from '@angular/core';
import { OperacaoDados } from '../../../../models/operacao/operacao-dados';

@Component({
    selector: 'operacao-perfil',
    templateUrl: './operacao-perfil.component.html',
    styleUrls: []
})

export class OperacaoPerfilComponent {
    @Input() dados: OperacaoDados;
}