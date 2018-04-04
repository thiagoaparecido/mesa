import { Component, Input, OnInit, Output, EventEmitter,Renderer2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Avalista } from '../../../../../../models/avalista';
import { FormatacaoService } from '../../../../../../services/util/formatacao.service';
import { NaturezaOcupacao } from '../../../../../../models/natureza-ocupacao';
import { Cargo } from '../../../../../../models/cargo';
import { Profissao } from '../../../../../../models/profissao';
import { PropostaService } from '../../../../../../services/proposta/proposta.service';
import { PerfilService } from '../../../../../../services/proposta/perfil.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CloneService } from '../../../../../../services/util/clone.service';
import { PerfilProfissionalObrigatorio } from '../../../../../../models/perfil-profissional-obrigatorio';
import { Estado } from '../../../../../../models/estado';
import { UtilService } from '../../../../../../services/proposta/util.service';
import { Endereco } from '../../../../../../models/endereco';
import { ValidacaoService } from '../../../../../../services/util/validacao.service';

@Component({
    selector: 'perfil-profissao-avalista-edicao',
    templateUrl: './perfil-profissao-avalista-edicao.component.html',
    providers: [ FormatacaoService, PerfilService, CloneService, UtilService, ValidacaoService ]
})

export class PerfilProfissionalAvalistaEdicaoComponent implements OnInit {

    @Input() idProposta: string;
    @Input() avalista: Avalista;
    @Output() changeExibirModal = new EventEmitter<boolean>();
    @Output() atualizarAvalista = new EventEmitter<Avalista>();
    
    loading: boolean = false;
    ocupacoes: NaturezaOcupacao[];
    cargos: Cargo[];
    profissoes: Profissao[];
    avalistaLocal = {} as Avalista;
    idOcupacaoLocal: number;
    idProfissaoLocal: number;
    idCargoLocal: number;
    perfilObrigatorio = {} as PerfilProfissionalObrigatorio;
    estados: Estado[];
    exibirModal: boolean = false;
    mensagem: string = "";

    myForm: FormGroup;
    ocupacao: FormControl;
    profissao: FormControl;
    cargo: FormControl;
    empresa: FormControl;
    cnpj: FormControl;
    // dtAdmissao: FormControl;
    cep: FormControl;
    logradouro: FormControl;
    numero: FormControl;
    cidade: FormControl;
    bairro: FormControl;
    complemento: FormControl;
    idEstado: FormControl;
    telefoneDdd: FormControl;
    telefoneNumero: FormControl;
    telefoneRamal: FormControl;

    constructor(private propostaService: PropostaService, private formatacaoService: FormatacaoService, private perfilService: PerfilService, private cloneService: CloneService, private render: Renderer2, private utilService: UtilService, private validacaoService: ValidacaoService) {}

    ngOnInit(): void {   
        this.avalistaLocal = this.cloneService.clone(this.avalista);
        this.getNaturezaOcupacao();
        this.getProfissao(this.avalistaLocal.idOcupacao);
        this.getCargo(this.avalistaLocal.idProfissao, this.avalistaLocal.idOcupacao);
        this.getEstados();
        this.createFormControls();
        this.createForm();  
    }    

    changeProfissao(idOcupacao: number){
        this.getProfissao(idOcupacao);
        this.changeCargo(this.profissao.value, idOcupacao);
        this.setFields(idOcupacao);
        this.profissao.setValue(null);
        this.cargo.setValue(null);
    }

    changeCargo(idProfissao: number, idOcupacao: number = 0) {
        if (idOcupacao == 0){
            idOcupacao = this.ocupacao.value;
        }
        this.getCargo(idProfissao, idOcupacao);                
    }

    setFields(idOcupacao: number) {
        this.getPerfilProfissionalObrigatorio(idOcupacao);
    }

    createFormControls(){
        this.ocupacao = new FormControl('', Validators.required);
        this.profissao = new FormControl('', Validators.required);
        this.cargo = new FormControl('', Validators.required);
        this.empresa = new FormControl('', Validators.required);
        this.cnpj = new FormControl('', Validators.required);
        // this.dtAdmissao = new FormControl('', Validators.required);
        this.cep = new FormControl('', Validators.required);
        this.logradouro = new FormControl('', Validators.required);
        this.numero = new FormControl('', Validators.required);
        this.cidade = new FormControl('', Validators.required);
        this.bairro = new FormControl('', Validators.required);
        this.complemento = new FormControl('', null);
        this.idEstado = new FormControl('', Validators.required);
        this.telefoneDdd = new FormControl('', Validators.required);
        this.telefoneNumero = new FormControl('', Validators.required);
        this.telefoneRamal = new FormControl('', null);
    }

    createForm(){
        this.myForm = new FormGroup({
            ocupacao: this.ocupacao,
            profissao: this.profissao,
            cargo: this.cargo,
            empresa: this.empresa,
            cnpj: this.cnpj,
            // dtAdmissao: this.dtAdmissao,
            cep: this.cep,
            logradouro: this.logradouro,
            numero: this.numero,
            cidade: this.cidade,
            bairro: this.bairro,
            complemento: this.complemento,
            idEstado: this.idEstado,
            telefoneDdd: this.telefoneDdd,
            telefoneNumero: this.telefoneNumero,
            telefoneRamal: this.telefoneRamal
        });
    }
       
    private getNaturezaOcupacao(){
        this.loading = true;
        this.propostaService.getNaturezaOcupacao(this.idProposta).subscribe(
            data => {
                this.ocupacoes = data
            },
            error => this.loading = false,
            () => this.loading = false
        )
    }

    private getProfissao(idOcupacao: number){
        this.loading = true;
        this.propostaService.getProfissao(idOcupacao).subscribe(
            data => {                
                this.profissoes = data                
            },
            error => this.loading = false,
            () => this.loading = false
        )
    }

    private getCargo(idProfissao: number, idOcupacao: number){
        this.loading = true;
        this.propostaService.getCargos(idOcupacao, idProfissao).subscribe(
            data => {
                this.cargos = data
            },
            error => this.loading = false,
            () => this.loading = false
        )
    }

    private getPerfilProfissionalObrigatorio(idOcupacao: number) {
        this.perfilService.getPerfilProfissionalObrigatorio(idOcupacao).subscribe(
            data => {
                this.perfilObrigatorio = data

                if (this.perfilObrigatorio.empresaObrigatorio) {
                    this.empresa.enable();
                } else {
                    this.empresa.disable();
                }

                if (this.perfilObrigatorio.cnpjObrigatorio) {
                    this.cnpj.enable();
                } else {
                    this.cnpj.disable();
                }

                // if (this.perfilObrigatorio.dtAdmissaoObrigatorio) {
                //     this.dtAdmissao.enable();
                // } else {
                //     this.dtAdmissao.disable();
                // }

                if (this.perfilObrigatorio.enderecoObrigatorio) {
                    this.cep.enable();
                    this.logradouro.enable();
                    this.numero.enable();
                    this.cidade.enable();
                    this.bairro.enable();
                    this.complemento.enable();
                    this.idEstado.enable();
                    this.telefoneDdd.enable();
                    this.telefoneNumero.enable();
                } else {
                    this.cep.disable();
                    this.logradouro.disable();
                    this.numero.disable();
                    this.cidade.disable();
                    this.bairro.disable();
                    this.complemento.disable();
                    this.idEstado.disable();
                    this.telefoneDdd.disable();
                    this.telefoneNumero.disable();
                }
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Erro ao obter perfil obrigatório';
            }
        )
    }

    getEndereco() {
        this.loading = true;
        this.utilService.getEndereco(this.cep.value).subscribe(
            data => {
                this.loading = false;
                if (data != null) {
                    let endereco: Endereco = data;
                    this.logradouro.setValue(endereco.logradouro);
                    this.cidade.setValue(endereco.cidade);
                    this.bairro.setValue(endereco.bairro);
                    this.idEstado.setValue(endereco.idEstado);
                } else {
                    this.exibirModal = true;
                    this.mensagem = "CEP inválido";
                    this.cep.setValue("");
                }
            },
            error => {
                this.loading = false;
                this.exibirModal = true;
                this.mensagem = "Erro ao obter endereço a partir do CEP";
            }
        )
    }

    closeModal() {
        this.changeExibirModal.emit(false);
    }

    public gravarAvalistaProfissional() {
        this.avalistaLocal.profissaoIdCargo = this.cargo.value;
        this.avalistaLocal.idProfissao = this.profissao.value;
        this.avalistaLocal.idOcupacao = this.ocupacao.value;
        if (this.perfilObrigatorio.cnpjObrigatorio) {
            this.avalistaLocal.cnpjEmpresa = this.cnpj.value;
        }
        // if (this.perfilObrigatorio.dtAdmissaoObrigatorio) {
        //     this.avalistaLocal.dtAdmissao = this.dtAdmissao.value;
        // }
        if (this.perfilObrigatorio.empresaObrigatorio) {
            this.avalistaLocal.profissaoEmpresa = this.empresa.value;
        }
        if (this.perfilObrigatorio.enderecoObrigatorio) {
            this.avalistaLocal.profissaoCep = this.cep.value;
            this.avalistaLocal.profissaoLogradouro = this.logradouro.value;
            this.avalistaLocal.profissaoNumero = this.numero.value;
            this.avalistaLocal.profissaoCidade = this.cidade.value;
            this.avalistaLocal.profissaoBairro = this.bairro.value;
            this.avalistaLocal.profissaoComplemento = this.complemento.value;
            this.avalistaLocal.profissaoIdEstado = this.idEstado.value;
            this.avalistaLocal.profissaoDdd = this.telefoneDdd.value;
            this.avalistaLocal.profissaoTelefone = this.telefoneNumero.value;
            this.avalistaLocal.profissaoRamal = this.telefoneRamal.value;
        }        
        this.atualizarAvalista.emit(this.avalistaLocal);        
    }

    private getEstados() {
        this.loading = true;
        this.propostaService.getEstados().subscribe(
            data => {
                this.estados = data
            },
            error => this.loading = false,
            () => this.loading = false
        )
    }

    fecharModal(fecharModal: boolean) {
        this.exibirModal = fecharModal;
    }

    getFormClass(field: FormControl){
        return this.validacaoService.getFormClass(field);
    }
}
