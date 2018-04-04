import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Bacen } from '../../models/consultas-externas/bacen/bacen';
enum SituacaoPagamento {
    VisaoGeral = 1,
    AVencer = 2,
    Vencido = 3,
    Prejuizo = 4
}
enum TipoPessoa {
    VisaoGeral = 0,
    Proponente = 1,
    Avalista = 2,
    Conjuge = 3,
    Cnpj = 4
}
@Injectable()
export class BacenService {
    
    constructor(private http: Http) {}

    getBacen(idProposta: string, tipoPessoa: TipoPessoa, situacaoPagamento: SituacaoPagamento)
    {
        return this.http.get(`api/MesaConsultasExternasBacen/v1/GetBacen/${idProposta}/${tipoPessoa}/${situacaoPagamento}`)
            .map(data => <Bacen>data.json());
    }
}