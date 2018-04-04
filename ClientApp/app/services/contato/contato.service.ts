import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Contato } from '../../models/contato';

@Injectable()
export class ContatoService {
    
    constructor(private http: Http) {}

    getContato(idProposta: string)
    {
        return this.http.get(`api/MesaContato/v1/GetContato/${idProposta}`)
            .map(data => <Contato>data.json());
    }
}