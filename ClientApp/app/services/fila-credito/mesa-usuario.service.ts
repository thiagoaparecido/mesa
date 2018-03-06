import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IMesaUsuario } from './../../models/mesa-usuario-interface';

@Injectable()
export class MesaUsuarioService {

    constructor(private http: Http) {}

    getUsuario(){
        return this.http.get('api/MesaUsuario/v1/GetUsuario')
        .map(data => <IMesaUsuario>data.json());
    }
}