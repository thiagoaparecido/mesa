import { Injectable, Inject, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Endereco } from '../../models/endereco';

@Injectable()
export class UtilService {

    constructor(private http: Http) {}

    getEndereco(cep: string){
        return this.http.get(`api/MesaUtil/v1/GetEndereco/${cep}`)
        .map(data => <Endereco>data.json());
    }

    getHorasMesa(dtAgendamento: string){
        return this.http.get(`api/MesaUtil/v1/GetHorasMesa/${dtAgendamento}`)
        .map(data => <number[]>data.json());
    }

    getHoraAgendamento(tempo: number) {
        return this.http.get(`api/MesaUtil/v1/GetHoraAgendamento/${tempo}`)
        .map(data => <Date>data.json());
    }
}