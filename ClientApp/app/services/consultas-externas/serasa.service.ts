import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Serasa } from '../../models/consultas-externas/serasa/serasa';

@Injectable()
export class SerasaService {
    
    constructor(private http: Http) {}

    getSerasa(idProposta: string, tipoPessoa: TipoPessoa)
    {
        return this.http.get(`api/MesaConsultasExternasSerasa/v1/GetSerasa/${idProposta}/${tipoPessoa}`)
            .map(data => <Serasa>data.json());
    }
}