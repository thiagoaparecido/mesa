import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ContatoService } from '../../../services/contato/contato.service';
import { Contato } from '../../../models/contato';

@Component({
    selector: 'contato',
    templateUrl: './contato.component.html',    
    providers: [ ContatoService ]
})
export class ContatoComponent implements OnInit {
   
    idProposta:string;    
    contato: Contato;
    mensagem: string;
    exibirModal: boolean; 
    
    constructor(private contatoService: ContatoService, private activatedRoute: ActivatedRoute) {}

    ngOnInit(): void {
        this.getIdProposta();        
    }

    getIdProposta():void{
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idProposta = params['idProposta'];
            this.getContato();
          });        
    }

    getContato(): void {
        this.contatoService.getContato(this.idProposta).subscribe(
            data => {
                this.contato = data
            },
            error => {
                this.exibirModal = true;
                this.mensagem = "Erro ao listar contatos";
            }
        );
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }

}