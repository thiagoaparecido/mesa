import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'mesa',
    templateUrl: './mesa.component.html'
})

export class MesaComponent implements OnInit {

    @Input() idProposta:string;

    constructor(private activatedRoute: ActivatedRoute){
    }

    getIdProposta():void{
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idProposta = params['idProposta'];
          });                 
    }

    ngOnInit(): void {
        this.getIdProposta();
    }
}