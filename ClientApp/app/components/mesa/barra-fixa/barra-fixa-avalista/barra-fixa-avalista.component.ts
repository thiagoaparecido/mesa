import { Component, Input } from '@angular/core';
import { Avalista } from './../../../../models/avalista';

@Component({
    selector: 'barra-fixa-avalista',
    templateUrl: './barra-fixa-avalista.component.html'
})

export class BarraFixaAvalistaComponent {
    @Input() avalistas: Avalista;
}