import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Alerta } from '../../models/alertas-externos/alerta';

@Injectable()
export class AlertasExternosService {

    constructor(private http: Http) {}

    getAlertasExternos(idProposta:string){
        return this.http.get(`api/MesaAlertasExternos/v1/GetAlertas/${idProposta}`)
            .map(data => <Alerta[]>data.json());
    }

    setResolucao(idProposta: string, tipoPessoa: number, alerta: Alerta){
        return this.http.post(`api/MesaAlertasExternos/v1/SetResolucao/${idProposta}/${tipoPessoa}`, alerta)
            .map(data => <boolean>data.json());
    }}