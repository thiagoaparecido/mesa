import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IFilaGeral } from '../../Models/filageral.interface';
import { IFilaPessoal } from '../../Models/filapessoal.interface';
import { IFilaComite } from '../../Models/filacomite.interface';
import { IFilaGeralDetalheProposta } from '../../models/filageral-detalhe-proposta.interface';
import { IPropostaAcompanhamento } from '../../models/proposta-acompanhamento.interface';

@Injectable()
export class FilaCreditoService {

    constructor(private http: Http) {
    }

    getFilaGeral(idUsuario:string, tipoLista:string, idCatalogo:string, idCliente:string) {
        return this.http.get(`api/Acompanhamento/v1/GetFilaGeral/${idUsuario}/${tipoLista}/${idCatalogo}/${idCliente}`, this.jwt())
        .map(data => <IFilaGeral[]>data.json());
    }

    getFilaPessoal(idUsuario:string, idCatalogo:string) {
        return this.http.get(`api/Acompanhamento/v1/GetFilaPessoal/${idUsuario}/${idCatalogo}`, this.jwt())
        .map(data => <IFilaPessoal[]>data.json());
    }

    getFilaComite(idUsuario:string, idCatalogo?:string) {
        return this.http.get(`api/Acompanhamento/v1/GetFilaComite/${idUsuario}/${idCatalogo}`, this.jwt())
        .map(data => <IFilaComite[]>data.json());
    }

    getFilaGeralDetalheProposta(idFila: number, idUsuario: string, captura: boolean, idCliente?: string) {
        return this.http.get(`api/Acompanhamento/v1/GetDetalheFilaGeral/${idFila}/${idUsuario}/${captura}/${idCliente}`, this.jwt())
        .map(data => <IFilaGeralDetalheProposta>data.json());        
    }

    getFilaPropostaAcompanhamento(idProposta:string) {
        return this.http.get(`api/Acompanhamento/v1/GetPropostaAcompanhamento/${idProposta}`, this.jwt())
        .map(data => <IPropostaAcompanhamento[]>data.json());
    }

    private jwt() {
        let headers = new Headers({ 'Authorization': 'fiversecret'});
        return new RequestOptions({ headers: headers})
    }
}