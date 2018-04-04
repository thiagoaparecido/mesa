import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { AlertaHistorico } from '../../models/alerta-historico';
import { Imagem } from '../../models/imagem';
import { OperacaoDados } from '../../models/operacao/operacao-dados';
import { OperacaoValores } from '../../models/operacao/operacao-valores';
import { OperacaoHistorico } from '../../models/operacao/operacao-historico';
import { OperacaoFluxoParcela } from '../../models/operacao/operacao-fluxo-parcela';

@Injectable()
export class OperacaoService {

    constructor(private http: Http) {}

    getDados(idProposta:string){
        return this.http.get(`api/Operacao/v1/GetDados/${idProposta}`)
            .map(data => <OperacaoDados>data.json());
    }

    getValores(idProposta:string){
        const response = this.http.get(`api/Operacao/v1/GetValores/${idProposta}`);
        return response.map(data => <OperacaoValores>data.json());
    }


    getHistorico(idCliente: string, idProposta:string){
        return this.http.get(`api/Operacao/v1/GetHistorico/${idCliente}/${idProposta}`)
            .map(data => <OperacaoHistorico[]>data.json());
    }

    getFluxoParcela(idProposta:string){
        return this.http.get(`api/Operacao/v1/GetFluxoParcela/${idProposta}`)
            .map(data => <OperacaoFluxoParcela[]>data.json());
    }

    putValorCliente(idProposta:string, valorCliente:number){
        return this.http.get(`api/Operacao/v1/PutValorCliente/${idProposta}/${valorCliente}`)
            .map(data => <boolean>data.json());
    } 
}