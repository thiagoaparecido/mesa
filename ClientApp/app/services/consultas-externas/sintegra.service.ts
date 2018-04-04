import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Sintegra } from '../../models/consultas-externas/sintegra/sintegra';

@Injectable()
export class SintegraService {
    
    constructor(private http: Http) {}

    getSintegra(idProposta: string, tipoPessoa: TipoPessoa)
    {
        return this.http.get(`api/MesaConsultasExternasSintegra/v1/GetSintegra/${idProposta}/${tipoPessoa}`)
            .map(data => <Sintegra[]>data.json());
    }
}