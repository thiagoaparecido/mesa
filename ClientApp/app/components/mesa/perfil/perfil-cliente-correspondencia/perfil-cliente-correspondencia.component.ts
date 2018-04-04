import { Component, Input, OnInit } from '@angular/core';
import { PerfilService } from '../../../../services/proposta/perfil.service';
import { PerfilEnderecoCorrespondencia } from '../../../../models/perfil/perfil-endereco-correspondencia';
import { FormatacaoService } from '../../../../services/util/formatacao.service';
import { PropostaService } from '../../../../services/proposta/proposta.service';
import { Estado } from '../../../../models/estado';
import { RetornoUpdate } from '../../../../models/retorno-update';
import { GuidService } from '../../../../services/util/guid.service';
import { Endereco } from '../../../../models/endereco';
import { UtilService } from '../../../../services/proposta/util.service';
import { Subscription } from 'rxjs/Subscription';
import { BarraFixaService } from '../../../../services/fila-credito/barra-fixa.service';
import { EnderecoCidade } from '../../../../models/endereco-cidade';


@Component({
    selector: 'perfil-cliente-correspondencia',
    templateUrl: './perfil-cliente-correspondencia.component.html',
    providers: [ PerfilService, FormatacaoService, GuidService, UtilService ]
})

export class PerfilClienteCorrespondenciaComponent implements OnInit {
    
    @Input() idProposta: string;
    loading: boolean = false;
    exibirModal: boolean = false;
    mensagem: string;
    perfilCorrespondencia: PerfilEnderecoCorrespondencia;
    listaEstados: any;
    estados: Estado[];
    readonlyEstado: boolean = true;
    readonly: boolean = window.sessionStorage.getItem('readonly') == "true" ? true : false;
    guid: string = GuidService.getStoredGuid();
    cepCidade: Endereco;
    classe: any;
    origem: string = "";
    exibirModalEnderecoCidade: boolean = false;
    subscription: Subscription;

    constructor(private perfilService: PerfilService, private formatacaoService: FormatacaoService, private propostaService: PropostaService, private utilService: UtilService, private barraFixaService: BarraFixaService) {
        this.subscription = this.barraFixaService.getEnderecoCidadeCorrespondencia().subscribe(data => { this.setEnderecoCidade(data); });
    }

    ngOnInit(): void {
        this.getEnderecoCorrespondencia();
        this.getEstados();
    }

    private getEnderecoCorrespondencia(){
        this.loading = true;
        this.perfilService.getPerfilClienteCorrespondencia(this.idProposta).subscribe(
            data => {
                this.loading = false;
                this.perfilCorrespondencia = data;
                if (data != null){
                    this.perfilCorrespondencia.cep = this.formatacaoService.formataCep(this.perfilCorrespondencia.cep);
                }
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = "Erro ao obter perfil de correspondência";            
            }
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

    private getEstados() {
        this.loading = true;
        this.propostaService.getEstados().subscribe(
            data => {
                this.estados = data
                let lista: any = [];
                this.estados.forEach(item => {
                    let estado = { value: item.codigo, text: item.codigo };
                    lista.push(estado);
                });
                this.listaEstados = lista;
            },
            error => this.loading = false,
            () => this.loading = false
        )
    }

    gravar(value: any) {
        var resultado: RetornoUpdate;
        this.perfilCorrespondencia.cep = this.formatacaoService.removeCep(this.perfilCorrespondencia.cep);
        this.perfilService.updatePerfilClienteCorrespondencia(this.perfilCorrespondencia, this.idProposta, this.guid).subscribe(
            data => {
                resultado = data;
                if (resultado.erros.length > 0) {
                    this.exibirModal = true;
                    this.mensagem = resultado.erros.join("<br />");
                } else {
                    if (resultado.recalcular == true){
                        window.sessionStorage.setItem('recalcular', "true");
                    }
                }
                this.getEnderecoCorrespondencia();
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Erro ao salvar';
                this.getEnderecoCorrespondencia();
            }
        )
        this.perfilCorrespondencia.cep = this.formatacaoService.formataCep(this.perfilCorrespondencia.cep);
    }

    getEndereco(cep: string) {
        this.loading = true;
        this.utilService.getEndereco(cep).subscribe(
            data => {
                this.loading = false;
                if (data != null) {
                    let endereco: Endereco = data;
                    if (endereco.logradouro == undefined || endereco.logradouro == null || endereco.logradouro.length == 0) {
                        if (this.perfilCorrespondencia.idEstado != endereco.idEstado) {
                            this.exibirModal = true;
                            this.mensagem = "UF de licenciamento não pode ser diferente da UF residencial";
                            this.getEnderecoCorrespondencia();
                        } else {
                            this.cepCidade = endereco;
                            this.classe = PerfilEnderecoCorrespondencia;
                            this.exibirModalEnderecoCidade = true;
                        }
                    } else {
                        this.perfilCorrespondencia.logradouro = endereco.logradouro;
                        this.perfilCorrespondencia.bairro = endereco.bairro;
                        this.perfilCorrespondencia.cidade = endereco.cidade;
                        this.perfilCorrespondencia.idEstado = endereco.idEstado;
                        this.gravar(cep);
                    }
                } else {
                    this.exibirModal = true;
                    this.mensagem = "CEP inválido";
                    this.getEnderecoCorrespondencia();
                }
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = "Erro ao obter endereço a partir do CEP";
            }
        )
    }

    fecharModal(fecharModal: boolean) {
        this.exibirModal = fecharModal;
    }

    fecharModalEnderecoCidade(fechar: boolean) {
        this.exibirModalEnderecoCidade = fechar;
        if (fechar == false) {
            this.getEnderecoCorrespondencia();
        }
    }

    setEnderecoCidade(endereco: EnderecoCidade){
        this.perfilCorrespondencia.logradouro = endereco.logradouro;
        this.perfilCorrespondencia.numero = endereco.numero;
        this.perfilCorrespondencia.complemento = endereco.complemento;
        this.perfilCorrespondencia.bairro = endereco.bairro;
        this.perfilCorrespondencia.cidade = endereco.cidade;
        this.perfilCorrespondencia.idEstado = endereco.idEstado;
        this.perfilCorrespondencia.cep = endereco.cep;
        this.gravar(this.perfilCorrespondencia);
    }
}