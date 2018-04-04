import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Avalista } from './../../../../../models/avalista';
import { PerfilService } from '../../../../../services/proposta/perfil.service';
import { EstadoCivil } from '../../../../../models/estado-civil';
import { FormatacaoService } from '../../../../../services/util/formatacao.service';
import { PropostaService } from '../../../../../services/proposta/proposta.service';
import { Sexo } from '../../../../../models/sexo';
import { Nacionalidade } from '../../../../../models/nacionalidade';
import { Estado } from '../../../../../models/estado';
import { UtilService } from '../../../../../services/proposta/util.service';
import { Endereco } from '../../../../../models/endereco';
import { GuidService } from '../../../../../services/util/guid.service';
import { RetornoUpdate } from '../../../../../models/retorno-update';
import { BarraFixaService } from '../../../../../services/fila-credito/barra-fixa.service';
import { Subscription } from 'rxjs/Subscription';
import { EnderecoCidade } from '../../../../../models/endereco-cidade';
import { DatePipe } from '@angular/common';
import { FaixaPatrimonio } from '../../../../../models/acompanhamento/fila/faixa-patrimonio';

declare var $ : any;

@Component({
    selector: 'perfil-dados-avalista',
    templateUrl: './perfil-dados-avalista.component.html',
    providers: [PerfilService, FormatacaoService, UtilService, GuidService]
})

export class PerfilDadosAvalistaComponent implements OnInit {
    @Input() avalista: Avalista;
    @Input() idProposta: string;

    loading: boolean = false;
    listaPatrimonios: any = [];
    faixasPatrimonios: FaixaPatrimonio[];
    listaEstadosCivis: any = [];
    estadosCivis: EstadoCivil[];
    listaSexos: any = [];
    sexos: Sexo[];
    listaEstados: any;
    estados: Estado[];
    listaNacionalidades: any = [];
    nacionalidades: Nacionalidade[];
    readonly: boolean = window.sessionStorage.getItem('readonly') == "true" ? true : false;
    guid: string = GuidService.getStoredGuid();
    exibirModal: boolean = false;
    mensagem: string = "";
    exibirModalEnderecoCidade: boolean = false;
    cepCidade: Endereco;
    classe: any;
    origem: string = "perfil";
    subscription: Subscription;

    constructor(private perfilService: PerfilService, private propostaService: PropostaService, private formatacaoService: FormatacaoService, private utilService: UtilService, private barraFixaService: BarraFixaService) { 
        this.subscription = this.barraFixaService.getEnderecoCidadeAvaista().subscribe(data => { this.setEnderecoCidade(data); });
    }


    ngOnInit(): void {
        this.getEstadoCivil();
        this.getSexo();
        this.getNacionalidade();
        this.getEstados();
        this.getFaixaPatrimonio();
        this.avalista.dataNascimento = this.formatacaoService.setDate(this.avalista.dataNascimento);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    gravar(value: any) {
        var resultado: RetornoUpdate;
        this.avalista.cep = this.formatacaoService.removeCep(this.avalista.cep);
        this.avalista.profissaoCep = this.formatacaoService.removeCep(this.avalista.profissaoCep);
        this.avalista.cnpjEmpresa = this.formatacaoService.removeCnpj(this.avalista.cnpjEmpresa);
        this.perfilService.updatePerfilAvalista(this.avalista, this.idProposta, this.guid).subscribe(
            data => {
                resultado = data;
                if (resultado.erros.length > 0) {
                    this.exibirModal = true;
                    this.mensagem = resultado.erros.join('<br />');
                    this.getAvalista();
                } else {
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
        this.avalista.cep = this.formatacaoService.formataCep(this.avalista.cep);
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
                    } else {
                        this.avalista.logradouro = endereco.logradouro;
                        this.avalista.cidade = endereco.cidade;
                        this.avalista.idEstado = endereco.idEstado;
                        this.gravar(cep);
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
        this.propostaService.getEstadoCivil().subscribe(
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

    private getAvalista() {
        this.loading = true;
        this.perfilService.getAvalistas(this.idProposta, this.avalista.cpf).subscribe(
            data => {
                this.avalista = data[0];
            },
            error => this.loading = false,
            () => this.loading = false
        )
    }

    @HostListener('keyup', ['$event'])
    onKeyup($event: any) {
        if ($event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id === "avalistaCep") {
            this.formatacaoService.mascaraCep($event);
        }

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

    fecharModalEnderecoCidade(fechar: boolean) { 
        this.exibirModalEnderecoCidade = fechar;
        if (fechar == false){
            this.getAvalista();
        }
    }

    setEnderecoCidade(endereco: EnderecoCidade){
        this.avalista.logradouro = endereco.logradouro;
        this.avalista.numero = endereco.numero;
        this.avalista.complemento = endereco.complemento;
        this.avalista.bairro = endereco.bairro;
        this.avalista.cidade = endereco.cidade;
        this.avalista.idEstado = endereco.idEstado;
        this.gravar(this.avalista);
    }

    gravarDtNascimento(value: any){
        var dtNascimento = this.formatacaoService.getDate(value);
        if (dtNascimento != null){
            this.avalista.dataNascimento = dtNascimento;
            this.gravar(this.avalista);
        } else {
            this.exibirModal = true;
            this.mensagem = "Data de nascimento inválida";
        }
    }
}