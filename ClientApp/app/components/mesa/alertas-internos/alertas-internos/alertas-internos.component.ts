import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'alertas-internos',
    templateUrl: './alertas-internos.component.html',
    styleUrls: []
})

export class AlertasInternosComponent implements OnInit {
   
    idProposta:string;      

    constructor(private activatedRoute: ActivatedRoute) {}

    getIdProposta():void{
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idProposta = params['idProposta'];
          });        
    }

    ngOnInit(): void {
        this.getIdProposta();        
    }
}