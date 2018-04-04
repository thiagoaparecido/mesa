import { Component, Input } from '@angular/core';
import { Avalista } from './../../../../models/avalista';

@Component({
    selector: 'barra-fixa-perfil-avalista-profissional',
    templateUrl: './barra-fixa-perfil-avalista-profissional.component.html'
})

export class BarraFixaPerfilAvalistaProfissionalComponent {
    @Input() avalista: Avalista;
}