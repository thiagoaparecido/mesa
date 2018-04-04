import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { ReceitaFederal } from '../../models/consultas-externas/receita-federal/receita-federal';

@Injectable()
export class ReceitaFederalService {
    
    constructor(private http: Http) {}

    getReceitaFederal(idProposta: string, tipoPessoa: TipoPessoa)
    {
        return this.http.get(`api/MesaConsultasExternasReceitaFederal/v1/GetReceitaFederal/${idProposta}/${tipoPessoa}`)
            .map(data => <ReceitaFederal>data.json());
    }
}