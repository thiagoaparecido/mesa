import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { IOperacaoDados } from '../../models/operacao-dados.interface';
import { IOperacaoValores } from '../../models/operacao-valores.interface';
import { IOperacaoHistorico } from '../../models/operacao-historico.interface';

@Injectable()
export class OperacaoService {

    constructor(private http: Http) {}

    getDados(idProposta:string){
        return this.http.get(`api/Operacao/v1/GetDados/${idProposta}`)
            .map(data => <IOperacaoDados>data.json());
    }

    getValores(idProposta:string){
        return this.http.get(`api/Operacao/v1/GetValores/${idProposta}`)
            .map(data => <IOperacaoValores>data.json());
    }

    getHistorico(idCliente: string, idProposta:string){
        return this.http.get(`api/Operacao/v1/GetHistorico/${idCliente}/${idProposta}`)
            .map(data => <IOperacaoHistorico[]>data.json());
    }
}