import { Component, Input } from '@angular/core';

@Component({
    selector: 'header-mesa',
    templateUrl: './header-mesa.component.html'
})
export class HeaderMesaComponent {
    @Input() idProposta: string;
}