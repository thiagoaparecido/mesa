import { Component, Input } from '@angular/core';
import { Event } from '@angular/router/src/events';

@Component({
    selector: 'cpf-cnpj',
    templateUrl: './cpf-cnpj.component.html',
    styleUrls: []
})

export class CpfCnpjComponent {
   
    tam:number;
    tam_vr:number;
    value:string;    
    tecla:number;
    teclaPress:KeyboardEvent;
    @Input() tammax:number;
    
    public CpfCnpj(event: KeyboardEvent): void {  
        
       this.aplica_mascara_cpfcnpj(event);       
    }

     //Aplica a máscara no campo
     //Função para ser utilizada nos eventos do input para formatação dinâmica
     private aplica_mascara_cpfcnpj(event: KeyboardEvent)
     {
        this.value =  ((document.getElementById("cpfcnpj") as HTMLInputElement).value);       
        this.tecla = event.keyCode; 
        
        if ((this.tecla < 48 || this.tecla > 57) && (this.tecla < 96 || this.tecla > 105) && this.tecla != 46 && this.tecla != 8) {
		    return false;
	    }

        var vr = this.value;        
        vr = vr.replace( /\//g, "" );
        vr = vr.replace( /-/g, "" );
        vr = vr.replace( /\./g, "" );
        var tam = vr.length;
        
        if ( tam <= 2 ) {
            this.value = vr;
        }
        if ( (tam > 2) && (tam <= 5) ) {
            this.value = vr.substr( 0, tam - 2 ) + '-' + vr.substr( tam - 2, tam );
        }
        if ( (tam >= 6) && (tam <= 8) ) {
            this.value = vr.substr( 0, tam - 5 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam );
        }
        if ( (tam >= 9) && (tam <= 11) ) {
            this.value = vr.substr( 0, tam - 8 ) + '.' + vr.substr( tam - 8, 3 ) + '.' + vr.substr( tam - 5, 3 ) + '-' + vr.substr( tam - 2, tam );
        }
        if ( (tam == 12) ) {
            this.value = vr.substr( tam - 12, 3 ) + '.' + vr.substr( tam - 9, 3 ) + '/' + vr.substr( tam - 6, 4 ) + '-' + vr.substr( tam - 2, tam );
        }
        if ( (tam > 12) && (tam <= 14) ) {
            this.value = vr.substr( 0, tam - 12 ) + '.' + vr.substr( tam - 12, 3 ) + '.' + vr.substr( tam - 9, 3 ) + '/' + vr.substr( tam - 6, 4 ) + '-' + vr.substr( tam - 2, tam );
        }
    }        
}


    