import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { LogHistorico } from '../../models/log-historico';

@Injectable()
export class LogService {

    constructor(private http: Http){}

    getHistorico(idProposta: string, guid: string){
        return this.http.get(`api/MesaLog/v1/GetHistorico/${idProposta}/${guid}`)
            .map(data => <LogHistorico[]>data.json());
    }
}