import { Component, Input } from '@angular/core';

@Component({
    selector: 'consultas-externas-bureau',
    templateUrl: './consultas-externas-bureau.component.html'
})

export class ConsultasExternasBureauComponent {
    @Input() idProposta: string;
    empresas: boolean = false;
    propriedades: boolean = false;
    parentesco: boolean = false;
    profissao: boolean = false;
    renda: boolean = false;
    similaridade: boolean = false;

    exibir(opcao: string): void {
        this.empresas = false;
        this.propriedades = false;
        this.parentesco = false;
        this.profissao = false;
        this.renda = false;
        this.similaridade = false;

        switch (opcao) {
            case "EMPRESAS VINCULADAS":
                this.empresas = true;
                break;
            case "PROPRIEDADES":
                this.propriedades = true;
                break;
            case "PARENTESCO":
                this.parentesco = true;
                break;
            case "PROFISSAO E ESCOLARIDADE":
                this.profissao = true;
                break;
            case "RENDA":
                this.renda = true;
                break;
            case "SIMILARIDADE":
                this.similaridade = true;
                break;            
        }
    }
}