import { Component, Renderer2, Input } from '@angular/core';

@Component({
    selector: 'visualizar-proposta',
    templateUrl: './visualizar-proposta.component.html'
})
export class VisualizarPropostaComponent {
    
    @Input() idProposta: string;
    readonly: boolean = window.sessionStorage.getItem('readonly') == "true" ? true : false;

    constructor(private render: Renderer2) {}
    
    visualizarProposta(proposta: string): void {
        if (proposta.length == 5){
            var h = screen.height;
            var w = screen.width;
            let readonly: string = window.sessionStorage.getItem('readonly') == "true" ? "true" : "false";
            window.sessionStorage.setItem('readonly', "true");
            window.sessionStorage.setItem('popup', "true");
            var janela = window.open('mesa/' + proposta.toUpperCase() + '/alerta/' + proposta.toUpperCase(), '_blank','menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=no,resizable=no,dependent,width=' + w + ',height=' + h + ',left=0,top=0');
            window.sessionStorage.setItem('readonly', readonly);
            window.sessionStorage.setItem('popup', "false");
        }
    }

    visualizarFila(): void {
        var h = screen.height;
        var w = screen.width;
        window.sessionStorage.setItem('popup', "true");
        var janela = window.open('home/', '_blank','menubar=no,toolbar=no,location=no,directories=no,status=no,scrollbars=no,resizable=no,dependent,width=' + w + ',height=' + h + ',left=0,top=0');
        window.sessionStorage.setItem('popup', "false");    
    }
}