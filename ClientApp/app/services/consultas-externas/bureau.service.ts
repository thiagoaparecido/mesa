import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { BureauEmpresa } from '../../models/consultas-externas/bureau/bureau-empresa/bureau-empresa';
import { BureauPropriedade } from '../../models/consultas-externas/bureau/bureau-propriedade/bureau-propriedade';
import { BureauParentesco } from '../../models/consultas-externas/bureau/bureau-parentesco/bureau-parentesco';
import { BureauProfissao } from '../../models/consultas-externas/bureau/bureau-profissao/bureau-profissao';
import { BureauRenda } from '../../models/consultas-externas/bureau/bureau-renda/bureau-renda';
import { BureauSimilaridade } from '../../models/consultas-externas/bureau/bureau-similaridade/bureau-similaridade';

@Injectable()
export class BureauService {
    
    constructor(private http: Http) {}

    getBureauEmpresas(idProposta: string)
    {
        return this.http.get(`api/MesaConsultasExternasBureauEmpresas/v1/GetBureauEmpresas/${idProposta}`)
            .map(data => <BureauEmpresa[]>data.json());
    }

    getBureauPropriedade(idProposta: string)
    {
        return this.http.get(`api/MesaConsultasExternasBureauPropriedade/v1/GetBureauPropriedade/${idProposta}`)
            .map(data => <BureauPropriedade>data.json());
    }

    getBureauParentescos(idProposta: string)
    {
        return this.http.get(`api/MesaConsultasExternasBureauParentescos/v1/GetBureauParentescos/${idProposta}`)
            .map(data => <BureauParentesco[]>data.json());
    }

    getBureauProfissao(idProposta: string)
    {
        return this.http.get(`api/MesaConsultasExternasBureauProfissao/v1/GetBureauProfissao/${idProposta}`)
            .map(data => <BureauProfissao>data.json());
    }

    getBureauRenda(idProposta: string)
    {
        return this.http.get(`api/MesaConsultasExternasBureauRenda/v1/GetBureauRenda/${idProposta}`)
            .map(data => <BureauRenda>data.json());
    }

    getBureauSimilaridades(idProposta: string, tipoPessoa: TipoPessoa)
    {
        return this.http.get(`api/MesaConsultasExternasBureauSimilaridade/v1/GetBureauSimilaridades/${idProposta}/${tipoPessoa}`)
            .map(data => <BureauSimilaridade[]>data.json());
    }
}