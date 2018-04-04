import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Rais } from '../../models/consultas-externas/rais/rais';

@Injectable()
export class RaisService {
    
    constructor(private http: Http) {}

    getRais(idProposta: string, tipoPessoa: TipoPessoa)
    {
        return this.http.get(`api/MesaConsultasExternasRais/v1/GetRais/${idProposta}/${tipoPessoa}`)
            .map(data => <Rais[]>data.json());
    }
}