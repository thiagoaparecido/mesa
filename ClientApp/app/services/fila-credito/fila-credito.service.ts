import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { PropostaAcompanhamento } from '../../models/proposta-acompanhamento';
import { FilaGeral } from '../../models/acompanhamento/fila/filageral';
import { FilaPessoal } from '../../models/acompanhamento/fila/filapessoal';
import { FilaComite } from '../../models/acompanhamento/fila/filacomite';
import { FilaGeralDetalheProposta } from '../../models/acompanhamento/fila/filageral-detalhe-proposta';
import { PropostaDecidida } from '../../models/acompanhamento/fila/proposta-decidida';
import { DetalhePropostaDecidida } from '../../models/acompanhamento/fila/detalhe-proposta-decidida';

@Injectable()
export class FilaCreditoService {

    constructor(private http: Http) {
    }

    getFilaGeral(tipoLista:string, idCatalogo:string, idCliente:string) {
        return this.http.get(`api/Acompanhamento/v1/GetFilaGeral/${tipoLista}/${idCatalogo}/${idCliente}`)
        .map(data => <FilaGeral[]>data.json());
    }

    getFilaDecidida(idCliente:string, idProposta:string) {
        return this.http.get(`api/Acompanhamento/v1/GetFilaDecidida/${idCliente}/${idProposta}`)
        .map(data => <PropostaDecidida>data.json());
    }

    getFilaPessoal(idCatalogo:string) {
        return this.http.get(`api/Acompanhamento/v1/GetFilaPessoal/${idCatalogo}`)
        .map(data => <FilaPessoal[]>data.json());
    }

    getFilaComite(idCatalogo?:string) {
        return this.http.get(`api/Acompanhamento/v1/GetFilaComite/${idCatalogo}`)
        .map(data => <FilaComite[]>data.json());
    }

    getFilaGeralDetalheProposta(idFila: number, captura: boolean, idCliente?: string) {
        return this.http.get(`api/Acompanhamento/v1/GetDetalheFilaGeral/${idFila}/${captura}/${idCliente}`)
        .map(data => <FilaGeralDetalheProposta>data.json());        
    }
    
    getPropostaDecididaDetalhe(idDecisao: number, idFila: number, idProposta?: string, idCliente?: string) {
        return this.http.get(`api/Acompanhamento/v1/GetPropostaDecididaDetalhe/${idDecisao}/${idFila}/${idProposta}/${idCliente}`)
        .map(data => <DetalhePropostaDecidida>data.json());        
    }

    getFilaPropostaAcompanhamento(idProposta:string) {
        return this.http.get(`api/Acompanhamento/v1/GetPropostaAcompanhamento/${idProposta}`)
        .map(data => <PropostaAcompanhamento[]>data.json());
    }
}