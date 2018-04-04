import { Component, Input } from '@angular/core';
import { PerfilProfissional } from './../../../../models/perfil-profissional';

@Component({
    selector: 'barra-fixa-perfil-profissional',
    templateUrl: './barra-fixa-perfil-profissional.component.html'
})

export class BarraFixaPerfilProfissionalComponent {    
    @Input() perfilProfissional: PerfilProfissional;    
}