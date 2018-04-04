import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AlertaHistorico } from '../../models/alerta-historico';
import { Perfil } from '../../models/perfil';

@Injectable()
export class AlertaService {

    constructor(private http: Http) {}

    getComparacaoPropostas(idProposta: string, propostas: string[]){
        return this.http.get(`api/MesaAlerta/v1/GetComparacaoPropostas/${idProposta}/${propostas}`)
        .map(data => <Perfil[]>data.json());
    }

    getAlertaHistorico(idProposta:string){
        return this.http.get(`api/MesaAlerta/v1/GetHistoricoAlerta/${idProposta}`)
            .map(data => <AlertaHistorico[]>data.json());
    }
}