import { Component, Input } from '@angular/core';
import { PerfilCliente } from './../../../../models/perfil-cliente';

@Component({
    selector: 'barra-fixa-perfil-cliente',
    templateUrl: './barra-fixa-perfil-cliente.component.html'
})

export class BarraFixaPerfilClienteComponent {    
    @Input() perfilCliente: PerfilCliente;
    @Input() idProposta: string;
}