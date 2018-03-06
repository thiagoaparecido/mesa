import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IPerfilCliente } from '../../models/perfil-cliente.interface';
import { IPerfilProfissional} from '../../models/perfil-profissional.interface';
import { IOperacao } from '../../models/operacao.interface';
import { IAvalista } from '../../models/avalista.interface';
import { IConjuge } from '../../models/conjuge.interface';

@Injectable()
export class BarraFixaService {

    constructor(private http: Http) {
    }

    getPerfilCliente(idProposta:string) {
        return this.http.get(`api/BarraFixa/v1/GetPerfilCliente/${idProposta}`)
         .map(data => <IPerfilCliente>data.json());
    }

    getPerfilProfissional(idProposta:string) {
        return this.http.get(`api/BarraFixa/v1/GetPerfilProfissional/${idProposta}`)
         .map(data => <IPerfilProfissional>data.json());
    }

    getOperacao(idProposta:string){
        return this.http.get(`api/BarraFixa/v1/GetOperacao/${idProposta}`)
        .map(data => <IOperacao>data.json());
    }

    getConjuge(idProposta:string){
        return this.http.get(`api/BarraFixa/v1/GetConjuge/${idProposta}`)
        .map(data => <IConjuge>data.json());
    }

    getAvalistas(idProposta:string){
        return this.http.get(`api/BarraFixa/v1/GetAvalistas/${idProposta}`)
        .map(data => <IAvalista[]>data.json())
    }
}