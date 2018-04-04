import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { MesaUsuario } from './../../models/mesa-usuario';

@Injectable()
export class MesaUsuarioService {

    constructor(private http: Http) {}

    getUsuario(){
        return this.http.get(`api/MesaUsuario/v1/GetUsuario`)
        .map(data => <MesaUsuario>data.json());
    }
}