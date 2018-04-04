import { Component, Input, OnInit,  OnDestroy, HostListener, Output } from '@angular/core';
import { PerfilProfissional } from './../../../../Models/perfil-profissional';
import { PropostaService } from './../../../../services/proposta/proposta.service';
import { PerfilService } from './../../../../services/proposta/perfil.service';
import { FormatacaoService } from './../../../../services/util/formatacao.service';
import { Cargo } from '../../../../models/cargo';
import { Estado } from '../../../../models/estado';
import { PerfilProfissionalObrigatorio } from '../../../../models/perfil-profissional-obrigatorio';
import { UtilService } from '../../../../services/proposta/util.service';
import { Endereco } from '../../../../models/endereco';
import { GuidService } from '../../../../services/util/guid.service';
import { RetornoUpdate } from '../../../../models/retorno-update';
import { BarraFixaService } from '../../../../services/fila-credito/barra-fixa.service';
import { Subscription } from 'rxjs/Subscription';
import { EnderecoCidade } from '../../../../models/endereco-cidade';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'perfil-profissional',
    templateUrl: './perfil-profissional.component.html',
    providers: [ PerfilService, FormatacaoService, UtilService, GuidService ]
})

export class PerfilProfissionalComponent implements OnInit {

    @Input() idProposta: string;
    loading: boolean = false;
    perfilProfissional = {} as PerfilProfissional;
    strRendaAdicional: string;
    strRenda: string;
    listaCargos: any = [];
    cargos: Cargo[];
    listaPessoaPolitica: any[];
    listaPessoaRelacaoPolitica: any[];
    profissao: number;
    exibirModalPerfilProfissional: boolean = false;
    listaEstados: any;
    estados: Estado[];
    exibirModal: boolean = false;
    mensagem: string = "";
    readonly: boolean = window.sessionStorage.getItem('readonly') == "true" ? true : false;
    guid: string = GuidService.getStoredGuid();
    perfilObrigatorio = {} as PerfilProfissionalObrigatorio;
    exibirModalEnderecoCidade: boolean = false;
    cepCidade: Endereco;
    classe: any;
    origem: string = "";
    subscription: Subscription;

    constructor(private propostaService: PropostaService, private perfilService: PerfilService, private formatacaoService: FormatacaoService, private utilService: UtilService, private barraFixaService: BarraFixaService) { 
        this.subscription = this.barraFixaService.getEnderecoCidadePerfilProfissional().subscribe(data => { this.setEnderecoCidade(data); });
    }

    ngOnInit(): void {
        this.getPerfilProfissional();  
        this.getEstados();
        this.getPessoaPolitica();
        this.getPessoaRelacaoPolitica();
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private getPerfilProfissional() {
        this.loading = true;
        this.perfilService.getPerfilProfissional(this.idProposta).subscribe(
            data => {
                this.perfilProfissional = data
                this.perfilProfissional.cnpjEmpresa = this.formatacaoService.formataCnpj(this.perfilProfissional.cnpjEmpresa);
                this.perfilProfissional.cep = this.formatacaoService.formataCep(this.perfilProfissional.cep);
                // if (this.perfilProfissional.dtAdmissao != null){
                //     this.perfilProfissional.dtAdmissao = this.formatacaoService.setDate(this.perfilProfissional.dtAdmissao);
                // }                
                this.strRenda = data != null && data != undefined ? this.numberParaReal(data.renda) : "0";
                this.strRendaAdicional = data != null && data != undefined ? this.numberParaReal(data.rendaAdicional) : "0";
                this.getPerfilObrigatorio();
                this.getCargo(this.perfilProfissional.idProfissao, this.perfilProfissional.idOcupacao);
            },
            error => this.loading = false,
            () => this.loading = false
        )
    }

    private getPerfilObrigatorio() {
        this.perfilService.getPerfilProfissionalObrigatorio(this.perfilProfissional.idOcupacao).subscribe(
            data => {
                this.perfilObrigatorio = data
            }, error => {
                this.exibirModal = true;
                this.mensagem = 'Erro ao obter perfil obrigatório';
            }
        )
    }

    gravar(perfil: PerfilProfissional, reload: boolean = false) {
        this.loading = true;
        var resultado: RetornoUpdate;
        
        perfil.cnpjEmpresa = this.formatacaoService.removeCnpj(perfil.cnpjEmpresa);
        perfil.cep = this.formatacaoService.removeCep(perfil.cep);

        let valorRenda = Number(this.strRenda.replace(".", "").replace(",", "."));
        let valorRendaAdicional = Number(this.strRendaAdicional.replace(".", "").replace(",", "."));

        if (valorRenda == 0 || valorRenda == NaN || valorRenda == undefined) {
            this.exibirModal = true;
            this.mensagem = 'Erro ao salvar';
            this.strRenda = this.perfilProfissional.renda != null && this.perfilProfissional.renda != undefined ? this.numberParaReal(this.perfilProfissional.renda) : "0";
            this.strRendaAdicional = this.perfilProfissional.rendaAdicional != null && this.perfilProfissional.rendaAdicional != undefined ? this.numberParaReal(this.perfilProfissional.rendaAdicional) : "0";
        } else {
            perfil.rendaAdicional = this.strRendaAdicional != null && this.strRendaAdicional != undefined ? Number(this.strRendaAdicional.replace(".", "").replace(",", ".")) : 0 ;
            perfil.renda = Number(this.strRenda.replace(".", "").replace(",", ".")); 
            this.perfilService.updatePerfilProfissional(perfil, this.idProposta, this.guid).subscribe(
                data => {
                    resultado = data;
                    if (resultado.erros.length > 0) {
                        this.exibirModal = true;
                        this.mensagem = resultado.erros.join('<br />');
                        this.getPerfilProfissional();
                    } else {
                        this.getPerfilProfissional();
                        this.exibirModalPerfilProfissional = false;
                        this.barraFixaService.atualizarPerfilProfissional(this.idProposta);
                        if (resultado.recalcular == true){
                            window.sessionStorage.setItem('recalcular', "true");
                        }
                    }
                },
                error => {
                    this.loading = false;
                    this.exibirModal = true;
                    this.mensagem = 'Erro ao salvar';
                    this.getPerfilProfissional();
                },
                () => this.loading = false
            )
        }
        this.perfilProfissional.cnpjEmpresa = this.formatacaoService.mascaraCnpj(this.perfilProfissional.cnpjEmpresa);
    }

    private getCargo(idProfissao: number, idOcupacao: number) {
        this.loading = true;
        this.propostaService.getCargos(idOcupacao, idProfissao).subscribe(
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

    atualizarPerfil(perfil: PerfilProfissional) {
        this.gravar(perfil, true);
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

    getEndereco(cep: string) {
        this.utilService.getEndereco(cep).subscribe(
            data => {
                this.loading = false;
                if (data != null) {
                    let endereco: Endereco = data;
                    if (endereco.logradouro == undefined || endereco.logradouro == null || endereco.logradouro.length == 0) {
                        this.cepCidade = endereco;
                        this.classe = PerfilProfissional;
                        this.exibirModalEnderecoCidade = true;
                    } else{
                        this.perfilProfissional.logradouro = endereco.logradouro;
                        this.perfilProfissional.cidade = endereco.cidade;
                        this.perfilProfissional.idEstado = endereco.idEstado;
                        this.gravar(this.perfilProfissional, false);
                    }                    
                } else {
                    this.exibirModal = true;
                    this.mensagem = "CEP inválido";
                    this.getPerfilProfissional();
                }
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = "Erro ao obter endereço a partir do CEP";
            }
        )
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
            this.getPerfilProfissional();
        }
    }

    setEnderecoCidade(endereco: EnderecoCidade){
        this.perfilProfissional.logradouro = endereco.logradouro;
        this.perfilProfissional.numero = endereco.numero;
        this.perfilProfissional.complemento = endereco.complemento;
        this.perfilProfissional.bairro = endereco.bairro;
        this.perfilProfissional.cidade = endereco.cidade;
        this.perfilProfissional.idEstado = endereco.idEstado;
        this.gravar(this.perfilProfissional, true);
    }

    // gravarDtAdmissao(value: any){
    //     var dtAdmissao = this.formatacaoService.getDate(value);
    //     if (dtAdmissao != null){
    //          this.perfilProfissional.dtAdmissao = dtAdmissao;
    //         this.gravar(this.perfilProfissional);
    //     } else {
    //         this.exibirModal = true;
    //         this.mensagem = "Data de admissão inválida";
    //     }
    // }
}