import { Component, Input  } from '@angular/core';
import { PerfilProfissional } from './../../../../../models/perfil-profissional';

@Component({
    selector: 'barra-fixa-perfil-profissional-comparacao',
    templateUrl: './barra-fixa-perfil-profissional-comparacao.component.html'
})

export class BarraFixaPerfilProfissionalComparacaoComponent {
    @Input() perfilProfissional: PerfilProfissional;
}