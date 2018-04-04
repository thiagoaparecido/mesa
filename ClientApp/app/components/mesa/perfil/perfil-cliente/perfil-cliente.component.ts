import { Component, Input, OnInit, OnDestroy, NgModule, HostListener, Output, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PerfilCliente } from './../../../../models/perfil-cliente';
import { PerfilService } from './../../../../services/proposta/perfil.service';
import { PropostaService } from './../../../../services/proposta/proposta.service';
import { FormatacaoService } from './../../../../services/util/formatacao.service';
import { Combo } from '../../../../models/combo';
import { forEach } from '@angular/router/src/utils/collection';
import { EstadoCivil } from '../../../../models/estado-civil';
import { Sexo } from '../../../../models/sexo';
import { Nacionalidade } from '../../../../models/nacionalidade';
import { Estado } from '../../../../models/estado';
import { UtilService } from '../../../../services/proposta/util.service';
import { Endereco } from '../../../../models/endereco';
import { GuidService } from '../../../../services/util/guid.service';
import { RetornoUpdate } from '../../../../models/retorno-update';
import { BarraFixaService } from '../../../../services/fila-credito/barra-fixa.service';
import { Subscription } from 'rxjs/Subscription';
import { EnderecoCidade } from '../../../../models/endereco-cidade';
import { DatePipe } from '@angular/common';
import { FaixaPatrimonio } from '../../../../models/acompanhamento/fila/faixa-patrimonio';

@Component({
    selector: 'perfil-cliente',
    templateUrl: './perfil-cliente.component.html',
    providers: [ PerfilService, FormatacaoService, UtilService, GuidService ]
})

export class PerfilClienteComponent implements OnInit, OnDestroy {
    @Input() idProposta: string;
    @Output() change = new EventEmitter<string>();
    @Output() listarConjuge = new EventEmitter<boolean>();

    perfilCliente = {} as PerfilCliente;
    loading: boolean = false;
    listaPatrimonios: any = [];
    faixasPatrimonios: FaixaPatrimonio[];
    listaEstadosCivis: any = [];
    estadosCivis: EstadoCivil[];
    listaSexos: any = [];
    sexos: Sexo[];
    listaNacionalidades: any = [];
    listaEstados: any;
    estados: Estado[];
    nacionalidades: Nacionalidade[];
    exibirModalConjuge: boolean = false;
    idEstadoCivilAtual: number = 0;
    dsEstadoCivilAtual: string = "";
    idNovoEstadoCivil: number = 0;
    readonly: boolean = window.sessionStorage.getItem('readonly') == "true" ? true : false;
    readonlyEstado: boolean = true;
    guid: string = GuidService.getStoredGuid();
    exibirModal: boolean = false;
    mensagem: string = "";
    selecaoEstadoCivil: boolean = false;
    exibirModalEnderecoCidade: boolean = false;
    cepCidade: Endereco;
    classe: any;
    origem: string = "";
    subscription: Subscription;

    constructor(private perfilService: PerfilService, private propostaService: PropostaService, private formatacaoService: FormatacaoService, private utilService: UtilService, private barraFixaService: BarraFixaService) {
        this.subscription = this.barraFixaService.getEnderecoCidadePerfilCliente().subscribe(data => { this.setEnderecoCidade(data); });
    }

    ngOnInit(): void {
        this.getPerfilCliente();
        this.getSexo();
        this.getFaixaPatrimonio();
        this.getNacionalidade();
        this.getEstados();
        this.getEstadoCivil();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private getPerfilCliente() {
        this.loading = true;
        this.perfilService.getPerfilCliente(this.idProposta).subscribe(
            data => {
                this.perfilCliente = data;
                this.idEstadoCivilAtual = this.perfilCliente.idEstadoCivil;
                this.dsEstadoCivilAtual = this.perfilCliente.estadoCivil;
                this.perfilCliente.cep = this.formatacaoService.formataCep(this.perfilCliente.cep);
                this.perfilCliente.dtNascimento = this.formatacaoService.setDate(this.perfilCliente.dtNascimento);
                this.loading = false;
            },
            error => this.loading = false,
            () => {
                this.loading = false
            }
        )
    }

    getEndereco(cep: string) {
        this.loading = true;
        this.utilService.getEndereco(cep).subscribe(
            data => {
                this.loading = false;
                if (data != null) {
                    let endereco: Endereco = data;
                    if (endereco.logradouro == undefined || endereco.logradouro == null || endereco.logradouro.length == 0) {
                        if (this.perfilCliente.idEstado != endereco.idEstado) {
                            this.exibirModal = true;
                            this.mensagem = "UF de licenciamento não pode ser diferente da UF residencial";
                            this.getPerfilCliente();
                        } else {
                            this.cepCidade = endereco;
                            this.classe = PerfilCliente;
                            this.exibirModalEnderecoCidade = true;
                        }
                    } else {
                        if (this.perfilCliente.idEstado != endereco.idEstado) {
                            this.exibirModal = true;
                            this.mensagem = "UF de licenciamento não pode ser diferente da UF residencial";
                            this.getPerfilCliente();
                        } else {
                            this.perfilCliente.logradouro = endereco.logradouro;
                            this.perfilCliente.bairro = endereco.bairro;
                            this.perfilCliente.cidade = endereco.cidade;
                            this.perfilCliente.idEstado = endereco.idEstado;
                            this.gravar(cep);
                        }
                    }
                } else {
                    this.exibirModal = true;
                    this.mensagem = "CEP inválido";
                    this.getPerfilCliente();
                }
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = "Erro ao obter endereço a partir do CEP";
            }
        )
    }

    private getFaixaPatrimonio() {
        this.loading = true;
        this.propostaService.getFaixaPatrimonio().subscribe(
            data => {
                this.faixasPatrimonios = data
                let lista: any = [];
                this.faixasPatrimonios.forEach(item => {
                    let faixa = { value: item.idClienteFaixaPatrimonio, text: item.dsClienteFaixaPatrimonio };
                    lista.push(faixa);
                });
                this.listaPatrimonios = lista;
            },
            error => this.loading = false,
            () => this.loading = false
        )
    }

    private getEstadoCivil() {
        this.loading = true;
        this.propostaService.getEstadoCivil(this.idProposta).subscribe(
            data => {
                this.estadosCivis = data
                let lista: any = [];
                this.estadosCivis.forEach(item => {
                    let estadoCivil = { value: item.idEstadoCivil, text: item.dsEstadoCivil };
                    lista.push(estadoCivil);
                });
                this.listaEstadosCivis = lista;
            },
            error => this.loading = false,
            () => this.loading = false
        )
    }

    private getNacionalidade() {
        this.loading = true;
        this.propostaService.getNacionalidade().subscribe(
            data => {
                this.nacionalidades = data
                let lista: any = [];
                this.nacionalidades.forEach(item => {
                    let nacionalidade = { value: item.idNacionalidade, text: item.dsNacionalidade };
                    lista.push(nacionalidade);
                });
                this.listaNacionalidades = lista;
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

    gravarDtNascimento(value: any) {
        var dtNascimento = this.formatacaoService.getDate(value);
        if (dtNascimento != null) {
            this.perfilCliente.dtNascimento = dtNascimento;
            this.gravar(this.perfilCliente);
        } else {
            this.exibirModal = true;
            this.mensagem = "Data de nascimento inválida";
        }
    }

    gravar(value: any, reloadEstadoCivil: boolean = false, realodPerfil: boolean = false) {
        var resultado: RetornoUpdate;
        this.perfilCliente.cep = this.formatacaoService.removeCep(this.perfilCliente.cep);
        this.perfilCliente.dtNascimento = this.formatacaoService.setDate(this.perfilCliente.dtNascimento);
        this.perfilService.updatePerfilCliente(this.perfilCliente, this.idProposta, this.guid).subscribe(
            data => {
                resultado = data;
                if (resultado.erros.length > 0) {
                    this.exibirModal = true;
                    this.mensagem = resultado.erros.join("<br />");
                    this.getPerfilCliente();
                } else {
                    this.change.emit(this.idProposta);
                    if (reloadEstadoCivil == true) {
                        this.getEstadoCivil();
                        if (this.idEstadoCivilAtual == 2 || this.idEstadoCivilAtual == 6) {
                            this.listarConjuge.emit(true);
                        }
                    }
                    this.getPerfilCliente();
                    this.barraFixaService.atualizarPerfilCliente(this.idProposta);
                    this.barraFixaService.atualizarConjuge(this.idProposta);
                    if (resultado.recalcular == true){
                        window.sessionStorage.setItem('recalcular', "true");
                    }
                }
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Erro ao salvar';
                this.getPerfilCliente();
            },
            () => this.loading = false
        )
        this.perfilCliente.cep = this.formatacaoService.formataCep(this.perfilCliente.cep);
    }

    @HostListener('keyup', ['$event'])
    onKeyup($event: any) {
        if ($event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id === "cep") {
            this.formatacaoService.mascaraCep($event);
        }
    }

    changeEstadoCivil(estadoCivil: number) {
        if (this.perfilCliente.idEstadoCivil === 2 || this.perfilCliente.idEstadoCivil === 6) {
            this.exibirModalConjuge = false;
        } else {
            if (estadoCivil === 2 || estadoCivil === 6) { // casado / companheiro
                this.idNovoEstadoCivil = estadoCivil;
                this.exibirModalConjuge = true;
            } else {
                this.exibirModalConjuge = false;
            }
        }
        this.perfilCliente.idEstadoCivil = estadoCivil;
    }

    atualizarModalConjuge(atualizar: boolean) {
        this.exibirModalConjuge = false;
        if (atualizar == true) {
            this.gravar(this.perfilCliente, true);
            this.idEstadoCivilAtual = this.perfilCliente.idEstadoCivil;
        } else {
            this.perfilCliente.idEstadoCivil = this.idEstadoCivilAtual;
        }
        var i;
        for (i = 0; i < this.estadosCivis.length; i++) {
            if (this.estadosCivis[i].idEstadoCivil == this.idEstadoCivilAtual) {
                this.dsEstadoCivilAtual = this.estadosCivis[i].dsEstadoCivil;
            }
        }
        this.selecaoEstadoCivil = false;
    }

    setEstadoCivilAnterior() {
        this.getEstadoCivil();
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

    fecharEstadoCivil(atualizarEstado: boolean) {
        this.atualizarModalConjuge(atualizarEstado);
        this.selecaoEstadoCivil = false;
    }

    abrirEstadoCivil() {
        if (!this.readonly){
            this.selecaoEstadoCivil = true;
        }
    }

    fecharModalEnderecoCidade(fechar: boolean) {
        this.exibirModalEnderecoCidade = fechar;
        if (fechar == false) {
            this.getPerfilCliente();
        }
    }

    setEnderecoCidade(endereco: EnderecoCidade) {
        this.perfilCliente.logradouro = endereco.logradouro;
        this.perfilCliente.numero = endereco.numero;
        this.perfilCliente.complemento = endereco.complemento;
        this.perfilCliente.bairro = endereco.bairro;
        this.perfilCliente.cidade = endereco.cidade;
        this.perfilCliente.idEstado = endereco.idEstado;
        this.gravar(this.perfilCliente, false, true);
    }
}