import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Comprot } from '../../models/consultas-externas/comprot/comprot';

@Injectable()
export class ComprotService {
    
    constructor(private http: Http) {}

    getComprot(idProposta: string, tipoPessoa: TipoPessoa)
    {
        return this.http.get(`api/MesaConsultasExternasComprot/v1/GetComprot/${idProposta}/${tipoPessoa}`)
            .map(data => <Comprot[]>data.json());
    }
}