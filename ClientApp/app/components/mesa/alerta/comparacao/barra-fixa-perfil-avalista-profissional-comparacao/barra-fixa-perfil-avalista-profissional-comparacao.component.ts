import { Component, Input  } from '@angular/core';
import { Avalista } from '../../../../../models/avalista';

@Component({
    selector: 'barra-fixa-perfil-avalista-profissional-comparacao',
    templateUrl: './barra-fixa-perfil-avalista-profissional-comparacao.component.html'
})

export class BarraFixaPerfilAvalistaProfissionalComparacaoComponent {
    @Input() avalista: Avalista;
}