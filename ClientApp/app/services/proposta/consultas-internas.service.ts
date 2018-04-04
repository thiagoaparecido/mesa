import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { ConsultasInternas } from '../../models/consultas-internas';
import { RiscosOperacoes } from '../../models/riscos-operacoes';
import { ContratoCdcLeasing } from '../../models/consultas-internas/contrato-cdc-leasing';
import { ContratoCdcLeasingDetalhe } from '../../models/consultas-internas/contrato-cdc-leasing-detalhe';
import { ContratoCdcLeasingTotal } from '../../models/consultas-internas/contrato-cdc-leasing-total';
import { CadastroCCL } from '../../models/consultas-internas/ccl/cadastro-ccl';
import { ResumoCCL } from '../../models/consultas-internas/ccl/resumo-ccl';

@Injectable()
export class ConsultasInternasService 
{
    constructor(private http: Http) {}

    getConsultasInternas(idProposta:string){
        return this.http.get(`api/ConsultasInternas/v1/GetConsultasInternas/${idProposta}`)
        .map(data => <ConsultasInternas[]>data.json())
    }

    getRiscosOperacoes(idProposta:string){
        return this.http.get(`api/ConsultasInternas/v1/GetRiscosOperacoes/${idProposta}`)
        .map(data => <RiscosOperacoes[]>data.json())
    }

    getContratosCdcLeasing(idProposta:string){
        return this.http.get(`api/ConsultasInternas/v1/GetContratosCdcLeasing/${idProposta}`)
        .map(data => <ContratoCdcLeasing[]>data.json())        
    }

    getDetalhesContratosCdcLeasing(idContrato:string){
        return this.http.get(`api/ConsultasInternas/v1/GetDetalhesContratosCdcLeasing/${idContrato}`)
        .map(data => <ContratoCdcLeasingDetalhe[]>data.json())        
    }

    getTotalContratosCdcLeasing(idProposta:string){
        return this.http.get(`api/ConsultasInternas/v1/GetTotalContratosCdcLeasing/${idProposta}`)
        .map(data => <ContratoCdcLeasingTotal>data.json())        
    }

    getInformacoesCcl(idProposta:string){
        debugger;
        return this.http.get(`api/ConsultasInternas/v1/GetInformacoesCCL/${idProposta}`)
        .map(data => <CadastroCCL>data.json())        
    }
	
    getResumoCcl(idProposta:string){
        return this.http.get(`api/ConsultasInternas/v1/GetResumoCCL/${idProposta}`)
        .map(data => <ResumoCCL>data.json())        
    }
}