import { Component, Input, OnInit, OnDestroy, HostListener, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Avalista } from './../../../../../models/avalista';
import { PropostaService } from './../../../../../services/proposta/proposta.service';
import { PerfilService } from './../../../../../services/proposta/perfil.service';
import { FormatacaoService } from './../../../../../services/util/formatacao.service';
import { Cargo } from '../../../../../models/cargo';
import { Estado } from '../../../../../models/estado';
import { PerfilProfissionalObrigatorio } from '../../../../../models/perfil-profissional-obrigatorio';
import { UtilService } from '../../../../../services/proposta/util.service';
import { Endereco } from '../../../../../models/endereco';
import { GuidService } from '../../../../../services/util/guid.service';
import { RetornoUpdate } from '../../../../../models/retorno-update';
import { BarraFixaService } from '../../../../../services/fila-credito/barra-fixa.service';
import { Subscription } from 'rxjs/Subscription';
import { EnderecoCidade } from '../../../../../models/endereco-cidade';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'perfil-profissao-avalista',
    templateUrl: './perfil-profissao-avalista.component.html',
    providers: [ PerfilService, FormatacaoService, UtilService, GuidService ]
})

export class PerfilProfissaoAvalistaComponent implements OnInit {
    @Input() avalista: Avalista;
    @Input() idProposta: string;
    loading: boolean = false;
    perfilAvalistaProfissional = {} as Avalista;
    profAvalista: Avalista;
    strRendaAdicional: string;
    strRenda: string;
    listaCargos: any = [];
    listaPessoaPolitica: any[];
    listaPessoaRelacaoPolitica: any[];
    cargos: Cargo[];
    listaEstados: any;
    estados: Estado[];
    profissao: number;
    exibirModalPerfilProfissional: boolean = false;
    readonly: boolean = window.sessionStorage.getItem('readonly') == "true" ? true : false;
    guid: string = GuidService.getStoredGuid();
    exibirModal: boolean = false;
    mensagem: string = "";
    perfilObrigatorio = {} as PerfilProfissionalObrigatorio;
    exibirModalEnderecoCidade: boolean = false;
    cepCidade: Endereco;
    classe: any;
    origem: string = "profissional";    
    subscription: Subscription;

    constructor(private activatedRoute: ActivatedRoute, private propostaService: PropostaService, private perfilService: PerfilService, private formatacaoService: FormatacaoService, private utilService: UtilService, private barraFixaService: BarraFixaService) { 
        this.subscription = this.barraFixaService.getEnderecoCidadeAvalistaProfissional().subscribe(data => { this.setEnderecoCidade(data); });
    }

    ngOnInit(): void {
        this.getIdProposta();
        this.avalista.cnpjEmpresa = this.formatacaoService.formataCnpj(this.avalista.cnpjEmpresa);
        this.avalista.cep = this.formatacaoService.formataCep(this.avalista.cep);        
        this.avalista.profissaoCep = this.formatacaoService.formataCep(this.avalista.profissaoCep);        
        // this.avalista.dtAdmissao = this.formatacaoService.setDate(this.avalista.dtAdmissao);
        this.strRenda = this.avalista.renda != null && this.avalista.renda != undefined ? this.numberParaReal(this.avalista.renda) : "0";
        this.strRendaAdicional = this.avalista.rendaAdicional != null && this.avalista.rendaAdicional != undefined ? this.numberParaReal(this.avalista.rendaAdicional) : "0";
        this.getCargo(0, 0);
        this.getEstados();
        this.getPerfilObrigatorio();
        this.getPessoaPolitica();
        this.getPessoaRelacaoPolitica();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    getIdProposta(): void {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.idProposta = params['idProposta'];
        });
    }

    gravar(avalista: Avalista, reload: boolean = false) {
        this.loading = true;
        avalista.cnpjEmpresa = this.formatacaoService.removeCnpj(avalista.cnpjEmpresa);
        avalista.profissaoCep = this.formatacaoService.removeCep(avalista.profissaoCep);
        avalista.cep = this.formatacaoService.removeCep(avalista.cep);

        var valorRenda: number;
        var valorRendaAdicional: number;

        if (reload == false){
            valorRenda = Number(this.strRenda.replace(".", "").replace(",", "."));
            valorRendaAdicional = Number(this.strRendaAdicional.replace(".", "").replace(",", "."));
        } else {
            valorRenda = avalista.renda;
            valorRendaAdicional = avalista.rendaAdicional;
        }

        if (valorRenda == 0 || valorRenda == NaN || valorRenda == undefined) {
            this.exibirModal = true;
            this.mensagem = 'Erro ao salvar';
            this.strRenda = this.avalista.renda != null && this.avalista.renda != undefined ? this.numberParaReal(this.avalista.renda) : "0";
            this.strRendaAdicional = this.avalista.rendaAdicional != null && this.avalista.rendaAdicional != undefined ? this.numberParaReal(this.avalista.rendaAdicional) : "0";
        } else {
            if (reload == false){
                avalista.rendaAdicional = Number(this.strRendaAdicional.replace(".", "").replace(",", "."));
                avalista.renda = Number(this.strRenda.replace(".", "").replace(",", "."));    
            }
            var resultado: RetornoUpdate;
            this.perfilService.updatePerfilAvalista(avalista, this.idProposta, this.guid).subscribe(
                data => {
                    resultado = data;
                    if (resultado.erros.length > 0) {
                        this.exibirModal = true;
                        this.mensagem = resultado.erros.join('<br />');
                        this.getAvalista();
                    } else {
                        if (reload == true) {
                            this.getAvalista();
                        } else {
                            this.perfilAvalistaProfissional = avalista;
                        }
                        this.exibirModalPerfilProfissional = false;
                        this.barraFixaService.atualizarAvalistas(this.idProposta, this.avalista.cpf);
                        if (resultado.recalcular == true){
                            window.sessionStorage.setItem('recalcular', "true");
                        }
                    }
                },
                error => {
                    this.loading = false;
                    this.exibirModal = true;
                    this.mensagem = 'Erro ao salvar';
                    this.getAvalista();
                },
                () => this.loading = false
            )
        }
        this.perfilAvalistaProfissional.cnpjEmpresa = this.formatacaoService.formataCnpj(this.perfilAvalistaProfissional.cnpjEmpresa);
    }

    getEndereco(cep: string) {
        this.loading = true;
        this.utilService.getEndereco(cep).subscribe(
            data => {
                this.loading = false;
                if (data != null) {
                    let endereco: Endereco = data;
                    if (endereco.logradouro == undefined || endereco.logradouro == null || endereco.logradouro.length == 0) {
                        this.cepCidade = endereco;
                        this.classe = Avalista;
                        this.exibirModalEnderecoCidade = true;
                    } else{
                        this.avalista.profissaoLogradouro = endereco.logradouro;
                        this.avalista.profissaoCidade = endereco.cidade;
                        this.avalista.profissaoIdEstado = endereco.idEstado;
                        this.gravar(this.avalista, false);
                    }
                } else {
                    this.exibirModal = true;
                    this.mensagem = "CEP inválido";
                    this.getAvalista();
                }
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = "Erro ao obter endereço a partir do CEP";
            }
        )
    }

    private getPerfilObrigatorio() {
        this.perfilService.getPerfilProfissionalObrigatorio(this.avalista.idOcupacao).subscribe(
            data => {
                this.perfilObrigatorio = data
            }, error => {
                this.exibirModal = true;
                this.mensagem = 'Erro ao obter perfil obrigatório';
            }
        )
    }

    private getAvalista() {
        this.loading = true;
        this.perfilService.getAvalistas(this.idProposta, this.avalista.cpf).subscribe(
            data => {
                if (data.length == 1) {
                    this.avalista = data[0];
                    this.perfilAvalistaProfissional.cpf = this.formatacaoService.formataCnpj(this.avalista.cpf);
                    this.perfilAvalistaProfissional.cep = this.formatacaoService.formataCep(this.avalista.cep);
                    this.strRenda = data != null && data != undefined ? this.numberParaReal(this.avalista.renda) : "0";
                    this.strRendaAdicional = data != null && data != undefined ? this.numberParaReal(this.avalista.rendaAdicional) : "0";
                    this.getPerfilObrigatorio();
                } else {
                    this.exibirModal = true;
                    this.mensagem = 'Erro ao obter perfil do avalista';
                }
            },
            error => this.loading = false,
            () => this.loading = false
        )
    }

    private getCargo(idProfissao: number, idOcupacao: number) {
        this.loading = true;
        this.propostaService.getCargos(idProfissao, idOcupacao).subscribe(
            data => {
                this.cargos = data
                let lista: any = [];
                this.cargos.forEach(item => {
                    let cargo = { value: item.idCargo, text: item.dsCargo };
                    lista.push(cargo);
                });
                this.listaCargos = lista;
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

    private getPessoaPolitica() {
        let lista: any = [];
        lista.push({value: false, text: 'NÃO'});
        lista.push({value: true, text: 'SIM'});
        this.listaPessoaPolitica = lista;
    }

    private getPessoaRelacaoPolitica() {
        let lista: any = [];
        lista.push({value: false, text: 'NÃO'});
        lista.push({value: true, text: 'SIM'});
        this.listaPessoaRelacaoPolitica = lista;
    }

    editarOcupacao() {
        this.exibirModalPerfilProfissional = true;
    }

    changeModalProfissional(exibirModal: boolean) {
        this.exibirModalPerfilProfissional = exibirModal;
    }

    atualizarAvalista(avalista: Avalista) {
        this.gravar(avalista, true);
    }

    @HostListener('keyup', ['$event'])
    onKeyup($event: any) {
        if ($event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id === "cnpjEmpresa") {
            this.formatacaoService.mascaraCpfCnpj($event);
        }

        if ($event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id === "strRendaAdicional") {
            this.strRendaAdicional = this.formatacaoService.mascaraValor($event);
        }

        if ($event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id === "strRenda") {
            this.strRenda = this.formatacaoService.mascaraValor($event);
        }
    }

    private numberParaReal(numero: number) {
        var formatado = numero.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        return formatado.replace("R$", "");
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
            if (campo == "") {
                this.mensagem = 'Este campo não pode ser nulo';
            } else {
                this.mensagem = 'O campo ' + campo + ' não é válido';
            }
        }
    }

    fecharModal(fecharModal: boolean) {
        this.exibirModal = fecharModal;
    }

    fecharModalEnderecoCidade(fechar: boolean) {      
        this.exibirModalEnderecoCidade = fechar;
        if (fechar == false){
            this.getAvalista();
        }
    }

    setEnderecoCidade(endereco: EnderecoCidade){
        this.avalista.profissaoLogradouro = endereco.logradouro;
        this.avalista.profissaoNumero = endereco.numero;
        this.avalista.profissaoComplemento = endereco.complemento;
        this.avalista.profissaoBairro = endereco.bairro;
        this.avalista.profissaoCidade = endereco.cidade;
        this.avalista.profissaoIdEstado = endereco.idEstado;
        this.gravar(this.avalista, true);
    }

    // gravarDtAdmissao(value: any){
    //     var dtAdmissao = this.formatacaoService.getDate(value);
    //     if (dtAdmissao != null){
    //         this.avalista.dtAdmissao = dtAdmissao;
    //         this.gravar(this.avalista);
    //     } else {
    //         this.exibirModal = true;
    //         this.mensagem = "Data de admissão inválida";
    //     }
    // }
}