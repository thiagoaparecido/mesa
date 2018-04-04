import { Component, Input } from '@angular/core';
import { Avalista } from './../../../../../models/avalista';

@Component({
    selector: 'barra-fixa-perfil-avalista-comparacao',
    templateUrl: './barra-fixa-perfil-avalista-comparacao.component.html'
})

export class BarraFixaPerfilAvalistaComparacaoComponent {
    @Input() avalista: Avalista;
}