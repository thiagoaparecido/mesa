import { Component, Input } from '@angular/core';
import { Perfil } from './../../../../../models/perfil';
import { PerfilCliente } from '../../../../../models/perfil-cliente';
import { MesaPropostaStatus } from '../../../../../models/mesa-proposta-status';

@Component({
    selector: 'barra-fixa-perfil-cliente-comparacao',
    templateUrl: './barra-fixa-perfil-cliente-comparacao.component.html'
})

export class BarraFixaPerfilClienteComparacaoComponent {
    @Input() idProposta: string;
    @Input() statusProposta: MesaPropostaStatus;
    @Input() perfilCliente: PerfilCliente;
}