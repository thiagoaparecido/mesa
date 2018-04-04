import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PerfilCliente } from './../../../../models/perfil-cliente';
import { Conjuge } from './../../../../models/conjuge';
import { Avalista } from './../../../../models/avalista';
import { PerfilService } from './../../../../services/proposta/perfil.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PerfilDadosConjugeComponent } from '../dados-conjuge/perfil-dados-conjuge.component';

@Component({
    selector: 'perfil',
    templateUrl: './perfil.component.html',
    providers: [PerfilService]
})

export class PerfilComponent implements OnInit {

    @Input() idProposta: string;
    @Output() change = new EventEmitter<string>();
    @ViewChild('conjuge') conjugeComponent: PerfilDadosConjugeComponent
    
    avalistas: Avalista[];
    loading: boolean = false;

    constructor(private perfilService: PerfilService, private activatedRoute: ActivatedRoute) {}

    private getAvalistas(){
        this.loading = true;
        this.perfilService.getAvalistas(this.idProposta).subscribe(
            data => this.avalistas = data,
            erro => this.loading = false,
            () => this.loading = false
        )
    }
    
    getIdProposta():void{
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idProposta = params['idProposta'];
          });        
    }    
    
    ngOnInit(): void {
        this.getIdProposta();
        this.getAvalistas();
    }

    perfilChange(event: any) {
        if (event.length == 5) {
            this.idProposta = event;
            this.change.emit(this.idProposta);
        }
    }

    listarConjuge(listar: boolean){
        this.conjugeComponent.getConjuge();
    }
}