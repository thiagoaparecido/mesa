import { Component, Input } from '@angular/core';
import { Avalista } from './../../../../models/avalista';

@Component({
    selector: 'barra-fixa-perfil-avalista',
    templateUrl: './barra-fixa-perfil-avalista.component.html'
})

export class BarraFixaPerfilAvalistaComponent {
    @Input() avalista: Avalista;
}