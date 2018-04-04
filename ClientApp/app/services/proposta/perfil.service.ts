import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { PerfilCliente } from '../../models/perfil-cliente';
import { PerfilProfissional} from '../../models/perfil-profissional';
import { Conjuge } from '../../models/conjuge';
import { PerfilProfissionalObrigatorio } from '../../models/perfil-profissional-obrigatorio';
import { Avalista } from '../../models/avalista';
import { PerfilEnderecoCorrespondencia } from '../../models/perfil/perfil-endereco-correspondencia';
import { Operacao } from '../../models/operacao/operacao';

@Injectable()
export class PerfilService {

    constructor(private http: Http) {
    }

    getPerfilCliente(idProposta:string) {
        return this.http.get(`api/Perfil/v1/GetPerfilCliente/${idProposta}`)
         .map(data => <PerfilCliente>data.json());
    }

    getPerfilProfissional(idProposta:string) {
        return this.http.get(`api/Perfil/v1/GetPerfilProfissional/${idProposta}`)
         .map(data => <PerfilProfissional>data.json());
    }

    getOperacao(idProposta:string){
        return this.http.get(`api/Perfil/v1/GetOperacao/${idProposta}`)
        .map(data => <Operacao>data.json());
    }

    getConjuge(idProposta:string){
        return this.http.get(`api/Perfil/v1/GetConjuge/${idProposta}`)
        .map(data => <Conjuge>data.json());
    }

    getAvalistas(idProposta:string, cpf:string = ""){
        return this.http.get(`api/Perfil/v1/GetAvalistas/${idProposta}/${cpf}`)
        .map(data => <Avalista[]>data.json())
    }

    getPerfilProfissionalObrigatorio(idOcupacao: number){
        return this.http.get(`api/Perfil/v1/GetPerfilProfissionalObrigatorio/${idOcupacao}`)
        .map(data => <PerfilProfissionalObrigatorio>data.json());
    }

    getPerfilClienteCorrespondencia(idProposta: string){
        return this.http.get(`api/Perfil/v1/GetPerfilClienteCorrespondencia/${idProposta}`)
        .map(data => <PerfilEnderecoCorrespondencia>data.json());
    }

    updatePerfilClienteCorrespondencia(perfilCorrespondencia: PerfilEnderecoCorrespondencia, idProposta: string, guid: string) {
        let url = `api/Perfil/v1/PutPerfilClienteCorrespondencia/${idProposta}/${guid}`;
        return this.http.put(url, perfilCorrespondencia).map(res => res.json());
    }

    updatePerfilCliente(perfilCliente: PerfilCliente, idProposta: string, guid: string) {
        let url = `api/Perfil/v1/PutPerfilCliente/${idProposta}/${guid}`;
        return this.http.put(url, perfilCliente).map(res => res.json());
     }

    updatePerfilProfissional(perfilProfissional: PerfilProfissional, idProposta:string, guid: string) {
        let url = `api/Perfil/v1/PutPerfilProfissional/${idProposta}/${guid}`;
        return this.http.put(url, perfilProfissional).map(res => res.json());
     }

     updatePerfilConjuge(conjuge: Conjuge, idProposta: string, guid: string) {
         let url = `api/Perfil/v1/PutPerfilConjuge/${idProposta}/${guid}`;
         return this.http.put(url, conjuge).map(res => res.json());
     }

     updatePerfilAvalista(avalista: Avalista, idProposta: string, guid: string) {
        let url = `api/Perfil/v1/PutPerfilAvalista/${idProposta}/${guid}`;
        return this.http.put(url, avalista).map(res => res.json());
    }
}