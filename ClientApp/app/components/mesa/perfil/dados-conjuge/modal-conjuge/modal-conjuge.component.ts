import { Component, Input, Output, OnInit, EventEmitter, Renderer2, AfterViewInit } from '@angular/core';
import { Conjuge } from './../../../../../models/conjuge';
import { PerfilService } from './../../../../../services/proposta/perfil.service';
import { NaturezaOcupacao } from '../../../../../models/natureza-ocupacao';
import { PropostaService } from '../../../../../services/proposta/proposta.service';
import { FormatacaoService } from '../../../../../services/util/formatacao.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Sexo } from '../../../../../models/sexo';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { GuidService } from '../../../../../services/util/guid.service';
import { RetornoUpdate } from '../../../../../models/retorno-update';
import { ValidacaoService } from '../../../../../services/util/validacao.service';

@Component({
    selector: 'perfil-modal-conjuge',
    templateUrl: './modal-conjuge.component.html',
    providers: [ GuidService, ValidacaoService ]
})
export class ModalConjugeComponent implements OnInit, AfterViewInit {

    @Input() idProposta: string;
    @Input() idNovoEstadoCivil: number;
    @Output() atualizarModal = new EventEmitter<boolean>();

    conjuge = {} as Conjuge;
    loading: boolean = false;
    ocupacoes: NaturezaOcupacao[];  
    exibirModal: boolean = false;
    mensagem: string = "";  
    sexos: Sexo[];
    guid: string = GuidService.getStoredGuid();

    myform: FormGroup;
    nome: FormControl;
    cpf: FormControl;
    celularDdd: FormControl;
    celularNumero: FormControl;
    dtNascimento: FormControl;
    idSexo: FormControl;
    idOcupacao: FormControl;

    constructor(private perfilService: PerfilService, private propostaService: PropostaService, private renderer: Renderer2, private formatacao: FormatacaoService, private validacaoService: ValidacaoService) {}

    ngOnInit(): void {
        this.conjuge.idEstadoCivil = this.idNovoEstadoCivil;
        this.createFormControls();
        this.createForm();
        this.getSexo();
        this.getNaturezaOcupacao();
    }

    createFormControls() { 
        this.nome = new FormControl('', Validators.required);
        this.cpf = new FormControl('', Validators.required);
        this.celularDdd = new FormControl('', null);
        this.celularNumero = new FormControl('', null);
        this.dtNascimento = new FormControl('', Validators.required);
        this.idSexo = new FormControl('', Validators.required);
        this.idOcupacao = new FormControl('', Validators.required);
      }

      createForm() { 
        this.myform = new FormGroup({
          nome: this.nome,
          cpf: this.cpf,
          celularDdd: this.celularDdd,
          celularNumero: this.celularNumero,
          dtNascimento: this.dtNascimento,
          idSexo: this.idSexo,
          idOcupacao: this.idOcupacao
        });
      }

    ngAfterViewInit(): void {
        this.renderer.selectRootElement('#nome').focus();
    }
    
    closeModal(){
        this.atualizarModal.emit(false);        
    } 

    private getSexo() {
        this.loading = true;
        this.propostaService.getSexo(true).subscribe(
            data => {
                this.sexos = data
            },
            error => this.loading = false,
            () => this.loading = false
        )        
    }

    private getNaturezaOcupacao() {
        this.loading = true;
        this.propostaService.getNaturezaOcupacao(this.idProposta).subscribe(
            data => {
                this.ocupacoes = data
            },
            error => this.loading = false,
            () => this.loading = false
        )
    }
    
    gravarConjuge() {
        this.conjuge.nome = this.nome.value;
        this.conjuge.cpf = Number(this.formatacao.removeCpf(this.cpf.value));  
        this.conjuge.dtNascimento = this.formatacao.setDate(this.dtNascimento.value);                     
        this.conjuge.celularDdd = this.celularDdd.value;
        this.conjuge.celularNumero = this.celularNumero.value;
        this.conjuge.idSexo = this.idSexo.value;
        this.conjuge.idOcupacao = this.idOcupacao.value;
        var resultado: RetornoUpdate;
        this.perfilService.updatePerfilConjuge(this.conjuge, this.idProposta, this.guid).subscribe(
            data => {
                resultado = data;
                if (resultado.erros.length > 0 ){
                    this.exibirModal = true;
                    this.mensagem = resultado.erros.join('<br />');
                } else {
                    this.exibirModal = false;
                    this.atualizarModal.emit(true);
                }
            }
        )
    }

    getFormClass(field: FormControl){
        return this.validacaoService.getFormClass(field);
    }

    fecharModal(fecharModal: boolean) {
        this.exibirModal = fecharModal;
    }
}