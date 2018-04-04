import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Portal } from '../../models/consultas-externas/portal/portal';

@Injectable()
export class PortalService {
    
    constructor(private http: Http) {}

    getPortal(idProposta: string, tipoPessoa: TipoPessoa)
    {
        return this.http.get(`api/MesaConsultasExternasPortal/v1/GetPortal/${idProposta}/${tipoPessoa}`)
            .map(data => <Portal[]>data.json());
    }
}