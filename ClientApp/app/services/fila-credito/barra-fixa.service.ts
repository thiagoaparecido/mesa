import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { PerfilCliente } from '../../models/perfil-cliente';
import { PerfilProfissional} from '../../models/perfil-profissional';
import { Avalista } from '../../models/avalista';
import { Conjuge } from '../../models/conjuge';
import { EnderecoCidade } from '../../models/endereco-cidade';
import { Operacao } from '../../models/operacao/operacao';

@Injectable()
export class BarraFixaService {

    private subjectPerfilCliente = new Subject<PerfilCliente>();
    private subjectPerfilProfissional = new Subject<PerfilProfissional>();
    private subjectConjuge = new Subject<Conjuge>();
    private subjectAvalista = new Subject<Avalista[]>();
    private subjectEnderecoPerfilCliente = new Subject<EnderecoCidade>();
    private subjectEnderecoPerfilProfissional = new Subject<EnderecoCidade>();
    private subjectEnderecoAvalista = new Subject<EnderecoCidade>();
    private subjectEnderecoAvalistaProfissional = new Subject<EnderecoCidade>();
    private subjectEnderecoCorrespondencia = new Subject<EnderecoCidade>();

    constructor(private http: Http) {}

    getPerfilCliente(idProposta:string) {
        return this.http.get(`api/BarraFixa/v1/GetPerfilCliente/${idProposta}`)
         .map(data => <PerfilCliente>data.json());
    }

    getPerfilProfissional(idProposta:string) {
        return this.http.get(`api/BarraFixa/v1/GetPerfilProfissional/${idProposta}`)
         .map(data => <PerfilProfissional>data.json());
    }

    getOperacao(idProposta:string){
        return this.http.get(`api/BarraFixa/v1/GetOperacao/${idProposta}`)
        .map(data => <Operacao>data.json());
    }

    getConjuge(idProposta:string){
        return this.http.get(`api/BarraFixa/v1/GetConjuge/${idProposta}`)
        .map(data => <Conjuge>data.json());
    }

    getAvalistas(idProposta:string, Cpf:string){
        return this.http.get(`api/BarraFixa/v1/GetAvalistas/${idProposta}/${Cpf}`)
        .map(data => <Avalista[]>data.json())
    }

    atualizarPerfilCliente(idProposta: string){
        this.getPerfilCliente(idProposta).subscribe(data => this.subjectPerfilCliente.next(data));
    }

    atualizarPerfilProfissional(idProposta: string){
        this.getPerfilProfissional(idProposta).subscribe(data => this.subjectPerfilProfissional.next(data));
    }

    atualizarConjuge(idProposta: string){
        this.getConjuge(idProposta).subscribe(data => this.subjectConjuge.next(data));
    }

    atualizarAvalistas(idProposta: string, cpf: string){
        this.getAvalistas(idProposta, cpf).subscribe(data => this.subjectAvalista.next(data));
    }

    getAtualizacaoPerfilCliente(): Observable<PerfilCliente> {
        return this.subjectPerfilCliente.asObservable();
    }

    getAtualizacaoPerfilProfissional(): Observable<PerfilProfissional> {
        return this.subjectPerfilProfissional.asObservable();
    }

    getAtualizacaoConjuge(): Observable<Conjuge> {
        return this.subjectConjuge.asObservable();
    }

    getAtualizacaoAvalistas(): Observable<Avalista[]> {
        return this.subjectAvalista.asObservable();
    }

    setEnderecoCidadePerfilCliente(endereco: EnderecoCidade){
        this.subjectEnderecoPerfilCliente.next(endereco);
    }

    getEnderecoCidadePerfilCliente(): Observable<EnderecoCidade> {
        return this.subjectEnderecoPerfilCliente.asObservable();
    }

    setEnderecoCidadePerfilProfissional(endereco: EnderecoCidade){
        this.subjectEnderecoPerfilProfissional.next(endereco);
    }

    getEnderecoCidadePerfilProfissional(): Observable<EnderecoCidade> {
        return this.subjectEnderecoPerfilProfissional.asObservable();
    }

    setEnderecoCidadeAvalista(endereco: EnderecoCidade){
        this.subjectEnderecoAvalista.next(endereco);
    }

    getEnderecoCidadeAvaista(): Observable<EnderecoCidade> {
        return this.subjectEnderecoAvalista.asObservable();
    }

    setEnderecoCidadeAvalistaProfissional(endereco: EnderecoCidade){
        this.subjectEnderecoAvalistaProfissional.next(endereco);
    }

    getEnderecoCidadeAvalistaProfissional(): Observable<EnderecoCidade> {
        return this.subjectEnderecoAvalistaProfissional.asObservable();
    }

    setEnderecoCidadeCorrespondencia(endereco: EnderecoCidade) {
        this.subjectEnderecoCorrespondencia.next(endereco);
    }

    getEnderecoCidadeCorrespondencia(): Observable<EnderecoCidade> {
        return this.subjectEnderecoCorrespondencia.asObservable();
    }
}