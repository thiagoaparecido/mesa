import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { ConselhoRegional } from '../../models/consultas-externas/conselho-regional/conselho-regional';

@Injectable()
export class ConselhoRegionalService {
    
    constructor(private http: Http) {}

    getConselhoRegional(idProposta: string, tipoPessoa: TipoPessoa)
    {
        return this.http.get(`api/MesaConsultasExternasConselhoRegional/v1/GetConselhoRegional/${idProposta}/${tipoPessoa}`)
            .map(data => <ConselhoRegional[]>data.json());
    }
}