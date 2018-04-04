import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Cetip } from '../../models/consultas-externas/cetip/cetip';

@Injectable()
export class CetipService {
    
    constructor(private http: Http) {}

    getCetip(idProposta: string, tipoPessoa: TipoPessoa)
    {
        return this.http.get(`api/MesaConsultasExternasCetip/v1/GetCetip/${idProposta}/${tipoPessoa}`)
            .map(data => <Cetip>data.json());
    }
}