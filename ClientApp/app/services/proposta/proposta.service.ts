import { Injectable, Inject, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

import { MesaPropostaStatus } from './../../models/mesa-proposta-status';
import { MesaPropostaConceito } from './../../models/mesa-proposta-conceito';
import { MesaPropostaAlerta } from './../../models/mesa-proposta-alertas';
import { Imagem } from '../../models/imagem';
import { EstadoCivil } from '../../models/estado-civil';
import { Sexo } from './../../models/sexo';
import { NaturezaOcupacao } from '../../models/natureza-ocupacao';
import { Profissao } from '../../models/profissao';
import { Nacionalidade } from '../../models/nacionalidade';
import { Estado } from '../../models/estado';
import { Cargo } from '../../models/cargo';
import { Recalcular } from '../../models/recalcular';
import { ProximaProposta } from '../../models/proxima-proposta';
import { Pendencia } from '../../models/pendencia';
import { CapturaObservacao } from '../../models/proposta/captura-observacao';
import { FaixaPatrimonio } from '../../models/acompanhamento/fila/faixa-patrimonio';
import { InfoAnalise } from '../../models/proposta/info-analise';
import { ParecerAcao } from '../../models/proposta/parecer/parecer-acao';
import { ParecerMotivo } from '../../models/proposta/parecer/parecer-motivo';
import { ParecerPendencia } from '../../models/proposta/parecer/parecer-pendencia';
import { ParecerPrioridade } from '../../models/proposta/parecer/parecer-prioridade';
import { ParecerUsuario } from '../../models/proposta/parecer/parecer-usuario';
import { ParecerComite } from '../../models/proposta/parecer/parecer-comite';
import { ParecerPendenciar } from '../../models/proposta/parecer/parecer-pendenciar';
import { ParecerRecusar } from '../../models/proposta/parecer/parecer-recusar';
import { ParecerAprovar } from '../../models/proposta/parecer/parecer-aprovar';
import { ParecerAgendar } from '../../models/proposta/parecer/parecer-agendar';
import { ParecerEncaminhar } from '../../models/proposta/parecer/parecer-encaminhar';

@Injectable()
export class PropostaService {

    private subjectProximaProposta = new Subject<any>();
    private subjectAtualizarBarraFixa = new Subject<any>();

    constructor(private http: Http) {}

    getAlertasProposta(idProposta:string){
        return this.http.get(`api/MesaProposta/v1/GetAlertasProposta/${idProposta}`)
        .map(data => <MesaPropostaAlerta>data.json());
    }

    getConceitoProposta(idProposta:string){
        return this.http.get(`api/MesaProposta/v1/GetConceitoProposta/${idProposta}`)
        .map(data => <MesaPropostaConceito>data.json());
    }

    getStatusProposta(idProposta:string){
        return this.http.get(`api/MesaProposta/v1/GetStatusProposta/${idProposta}`)
        .map(data => <MesaPropostaStatus>data.json());
    }

    getDataImagem(idProposta:string,idModulo:number)
    {
        return this.http.get(`api/MesaProposta/v1/GetImagemProposta/${idProposta}/${idModulo}`)
        .map(data => <Imagem[]>data.json());
    }

    getFaixaPatrimonio()
    {
        return this.http.get(`api/MesaProposta/v1/GetFaixaPatrimonio`)
        .map(data => <FaixaPatrimonio[]>data.json());
    }

    getEstadoCivil(idProposta?: string)
    {
        idProposta = idProposta === undefined ? "" : idProposta;
        return this.http.get(`api/MesaProposta/v1/GetEstadoCivil/${idProposta}`)
        .map(data => <EstadoCivil[]>data.json());
    }

    getProfissao(idNatOcupacao: number)
    {
        return this.http.get(`api/MesaProposta/v1/GetProfissao/${idNatOcupacao}`)
        .map(data => <Profissao[]>data.json());
    }

    getSexo(adicionarNaoIdentificado: boolean){
        return this.http.get(`api/MesaProposta/v1/GetSexo/${adicionarNaoIdentificado}`)
        .map(data => <Sexo[]>data.json());        
    }

    getNaturezaOcupacao(idProposta?: string)
    {
        idProposta = idProposta === undefined ? "" : idProposta;
        return this.http.get(`api/MesaProposta/v1/GetNaturezaOcupacao/${idProposta}`)
        .map(data => <NaturezaOcupacao[]>data.json());
    }

    getNacionalidade()
    {
        return this.http.get(`api/MesaProposta/v1/GetNacionalidade`)
        .map(data => <Nacionalidade[]>data.json());
    }

    getEstados()
    {
        return this.http.get(`api/MesaProposta/v1/GetEstados`)
        .map(data => <Estado[]>data.json());
    }

    getCargos(idOcupacao: number, idProfissao: number)
    {
        return this.http.get(`api/MesaProposta/v1/GetCargos/${idOcupacao}/${idProfissao}`)
        .map(data => <Cargo[]>data.json());
    }

    getParecerAcoes(idProposta: string){
        return this.http.get(`api/MesaProposta/v1/GetParecerAcoes/${idProposta}`)
        .map(data => <ParecerAcao[]>data.json());
    }

    getParecerMotivos(idAcao: number){
        return this.http.get(`api/MesaProposta/v1/GetParecerMotivos/${idAcao}`)
        .map(data => <ParecerMotivo[]>data.json());
    }

    getParecerMotivosEncaminhar(idProposta: string){
        return this.http.get(`api/MesaProposta/v1/GetParecerMotivosEncaminhar/${idProposta}`)
        .map(data => <ParecerMotivo[]>data.json());
    }    

    getParecerPendencias(idProposta: string){
        return this.http.get(`api/MesaProposta/v1/GetParecerPendencias/${idProposta}`)
        .map(data => <ParecerPendencia[]>data.json());
    }

    getParecerPrioridades(){        
        return this.http.get(`api/MesaProposta/v1/GetParecerPrioridades`)
        .map(data => <ParecerPrioridade[]>data.json());
    }

    getParecerUsuario(parecerUsuario: ParecerUsuario){
        return this.http.get(`api/MesaProposta/v1/GetParecerUsuario/${parecerUsuario.idProposta}`)
        .map(data => <ParecerUsuario[]>data.json());
    }

    getParecerComite(parecerComite: ParecerComite){
        return this.http.get(`api/MesaProposta/v1/GetParecerComite/${parecerComite.idProposta}`)
        .map(data => <ParecerComite[]>data.json());
    }

    getParecerUsuarioRemetente(parecerUsuarioRemetente: ParecerUsuario){
        return this.http.get(`api/MesaProposta/v1/GetParecerUsuarioRemetente/${parecerUsuarioRemetente.idProposta}`)
        .map(data => <ParecerUsuario[]>data.json());
    }

    getParecerUsuarioAlcada(parecerUsuarioAlcada: ParecerUsuario){
        return this.http.get(`api/MesaProposta/v1/GetParecerUsuarioAlcada/${parecerUsuarioAlcada.idProposta}`)
        .map(data => <ParecerUsuario[]>data.json());
    }

    getProximaPropostaParaAnalise(idPropostaAnterior: string) {
        let url = `api/MesaProposta/v1/GetProximaPropostaParaAnalise/${idPropostaAnterior}`;
        return this.http.get(url).map(data => <ProximaProposta>data.json());
    }

    verificarNavegacaoProximaProposta(){
        this.subjectProximaProposta.next();
    }

    getVerificarNavegacaoProximaProposta(): Observable<any> {
        return this.subjectProximaProposta.asObservable();
    }

    atualizarBarraFixa(idProposta: string) {
        this.subjectAtualizarBarraFixa.next(idProposta);
    }

    getVerificarAtualizacaoBarraFixa(): Observable<any> {
        return this.subjectAtualizarBarraFixa.asObservable();
    }

    getInfoAnalise(idProposta: string) {
        let url = `api/MesaProposta/v1/GetInfoAnalise/${idProposta}`;
        return this.http.get(url).map(data => <InfoAnalise>data.json());
    }

    getCapturaObservacao(idProposta: string) {
        let url = `api/MesaProposta/v1/GetCapturaObservacao/${idProposta}`;
        return this.http.get(url).map(data => <CapturaObservacao>data.json());
    }

    postRecalcular(recalcular: Recalcular)
    {
        let url = `api/MesaProposta/v1/PostRecalcular`;
        return this.http.post(url, recalcular).map(res => res.json());
    }

    postPendenciar(parecer: ParecerPendenciar)
    {
        let url = `api/MesaProposta/v1/PostPendenciar`;
        return this.http.post(url, parecer).map(res => res.json());
    }

    postRecusar(parecer: ParecerRecusar)
    {
        let url = `api/MesaProposta/v1/PostRecusar`;
        return this.http.post(url, parecer).map(res => res.json());
    }

    postAgendar(agendamento: ParecerAgendar) {
        let url = `api/MesaProposta/v1/PostAgendar`;
        return this.http.post(url, agendamento).map(res => res.json());
    }

    putUsoProposta(idProposta: string) {
        let url = `api/MesaProposta/v1/PutUsoProposta/${idProposta}`;
        return this.http.put(url, null).map(res => res.json());
    }

    putAprovar(parecerAprovar: ParecerAprovar) {
        let url = `api/MesaProposta/v1/PutAprovar`;
        return this.http.put(url, parecerAprovar).map(res => <string[]>res.json());
    }

    putEncaminhar(parecerEncaminhar: ParecerEncaminhar){
        let url = `api/MesaProposta/v1/PutEncaminhar`;
        return this.http.put(url, parecerEncaminhar).map(res => <string[]>res.json());
    }
}