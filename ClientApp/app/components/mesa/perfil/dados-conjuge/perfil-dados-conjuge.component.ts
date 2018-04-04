import { Component, Input, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { Conjuge } from './../../../../models/conjuge';
import { PerfilService } from '../../../../services/proposta/perfil.service';
import { GuidService } from '../../../../services/util/guid.service';
import { RetornoUpdate } from '../../../../models/retorno-update';
import { BarraFixaService } from '../../../../services/fila-credito/barra-fixa.service';
import { NaturezaOcupacao } from '../../../../models/natureza-ocupacao';
import { PropostaService } from '../../../../services/proposta/proposta.service';
import { Sexo } from '../../../../models/sexo';
import { FormatacaoService } from './../../../../services/util/formatacao.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'perfil-dados-conjuge',
    templateUrl: './perfil-dados-conjuge.component.html',
    providers: [PerfilService, GuidService, FormatacaoService]
})

export class PerfilDadosConjugeComponent implements OnInit {
    @Input() idProposta: string;
    conjuge: Conjuge = {} as Conjuge;
    exibirConjuge: boolean = false;
    loading: boolean = false;
    readonly: boolean = window.sessionStorage.getItem('readonly') == "true" ? true : false;
    guid: string = GuidService.getStoredGuid();
    exibirModal: boolean = false;
    mensagem: string = "";
    listaOcupacoes: any = [];
    ocupacoes: NaturezaOcupacao[];
    listaSexos: any = [];
    sexos: Sexo[];

    constructor(private perfilService: PerfilService, private barraFixaService: BarraFixaService, private propostaService : PropostaService, private formatacaoService: FormatacaoService) { }

    ngOnInit(): void {
        this.getConjuge();        
    }

    public getConjuge() {
        this.loading = true;
        this.perfilService.getConjuge(this.idProposta).subscribe(
            data => {
                this.conjuge = data;
                if (data != null){
                    if (this.conjuge.dtNascimento != null){
                        this.conjuge.dtNascimento = this.formatacaoService.setDate(this.conjuge.dtNascimento);
                    }
                }
                this.exibirConjuge = data != null;
            },
            erro => this.loading = false,
            () => this.loading = false
        );
        this.getNaturezaOcupacao();
        this.getSexo();
    }

    gravar(value: any) {
        this.loading = true;
        var resultado: RetornoUpdate;
        if (this.conjuge.dtNascimento != null){
            this.conjuge.dtNascimento = this.formatacaoService.setDate(this.conjuge.dtNascimento);
        }
        this.perfilService.updatePerfilConjuge(this.conjuge, this.idProposta, this.guid).subscribe(
            data => {
                resultado = data;
                if (resultado.erros.length > 0) {
                    this.exibirModal = true;
                    this.mensagem = resultado.erros.join('<br />');
                    this.getConjuge();
                } else {
                    this.barraFixaService.atualizarConjuge(this.idProposta);
                    if (resultado.recalcular == true){
                        window.sessionStorage.setItem('recalcular', "true");
                    }
                }
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = 'Erro ao salvar';
                this.getConjuge();
            },
            () => this.loading = false
        )
    }

    handleError($event: any, campo: string = "") {
        if ($event[0].message == "Test length has failed") {
            this.exibirModal = true;
            if (campo == "") {
                this.mensagem = 'Este campo não pode ser nulo';
            } else {
                this.mensagem = 'O campo ' + campo + ' não pode ser nulo';
            }
        }
        else if ($event[0].message == "Test pattern has failed") {
            this.exibirModal = true;
            this.mensagem = 'O campo ' + campo + ' não é válido';
        }
    }

    fecharModal(fecharModal: boolean) {
        this.exibirModal = fecharModal;
    }

    private getNaturezaOcupacao() {
        this.loading = true;
        this.propostaService.getNaturezaOcupacao().subscribe(
            data => {
                this.ocupacoes = data
                let lista: any = [];
                this.ocupacoes.forEach(item => {
                    let ocupacao = { value: item.idNatOcupacao, text: item.dsNatOcupacao };
                    lista.push(ocupacao);
                });
                this.listaOcupacoes = lista;
            },
            error => this.loading = false,
            () => this.loading = false
        )
    }

    private getSexo() {
        this.loading = true;
        this.propostaService.getSexo(true).subscribe(
            data => {
                this.sexos = data
                let lista: any = [];
                this.sexos.forEach(item => {
                    let sex = { value: item.idSexo, text: item.dsSexo };
                    lista.push(sex);
                });
                this.listaSexos = lista;
            },
            error => this.loading = false,
            () => this.loading = false
        )
    }

    gravarDtNascimento(value: any){
        var dtNascimento = this.formatacaoService.getDate(value);
        if (dtNascimento != null){
            this.conjuge.dtNascimento = dtNascimento;
            this.gravar(this.conjuge);
        } else {
            this.exibirModal = true;
            this.mensagem = "Data de nascimento inválida";
        }
    }

}