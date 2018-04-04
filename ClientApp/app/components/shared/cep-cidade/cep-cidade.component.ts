import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Endereco } from '../../../models/endereco';
import { ValidacaoService } from '../../../services/util/validacao.service';
import { EnderecoCidade } from '../../../models/endereco-cidade';
import { BarraFixaService } from '../../../services/fila-credito/barra-fixa.service';
import { PerfilCliente } from '../../../models/perfil-cliente';
import { Avalista } from '../../../models/avalista';
import { PerfilProfissional } from '../../../models/perfil-profissional';
import { PerfilEnderecoCorrespondencia } from '../../../models/perfil/perfil-endereco-correspondencia';

@Component({
    selector: 'cep-cidade',
    templateUrl: './cep-cidade.component.html',
    providers: [ValidacaoService]
})
export class CepCidadeComponent implements OnInit {

    @Input() idProposta: string;
    @Input() endereco: Endereco;
    @Input() classe: any;
    @Input() origem: string;
    @Output() atualizarModal = new EventEmitter<boolean>();

    exibirModal: boolean = false;
    mensagem: string = "";

    myForm: FormGroup;
    logradouro: FormControl;
    numero: FormControl;
    complemento: FormControl;
    bairro: FormControl;

    constructor(private validacaoService: ValidacaoService, private barraFixaService: BarraFixaService) { }

    ngOnInit(): void {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.logradouro = new FormControl('', Validators.required);
        this.numero = new FormControl('', Validators.required);
        this.complemento = new FormControl('', null);
        this.bairro = new FormControl('', Validators.required);
    }

    createForm() {
        this.myForm = new FormGroup({
            logradouro: this.logradouro,
            numero: this.numero,
            complemento: this.complemento,
            bairro: this.bairro
        });
    }

    gravar() {
        let end = new EnderecoCidade();
        end.logradouro = this.logradouro.value;
        end.numero = this.numero.value;
        end.complemento = this.complemento.value;
        end.bairro = this.bairro.value;
        end.cep = this.endereco.cep;
        end.cidade = this.endereco.cidade;
        end.idEstado = this.endereco.idEstado;

        if (this.classe.name === PerfilCliente.name) {
            this.barraFixaService.setEnderecoCidadePerfilCliente(end);
        } else if (this.classe.name === PerfilProfissional.name) {
            this.barraFixaService.setEnderecoCidadePerfilProfissional(end);    
        } else if (this.classe.name === Avalista.name && this.origem === "perfil") {
            this.barraFixaService.setEnderecoCidadeAvalista(end);
        } else if (this.classe.name === Avalista.name && this.origem === "profissional") {
            this.barraFixaService.setEnderecoCidadeAvalistaProfissional(end);
        } else if (this.classe.name === PerfilEnderecoCorrespondencia.name) {
            this.barraFixaService.setEnderecoCidadeCorrespondencia(end);
        }

        this.closeModal();
    }

    closeModal() {
        this.atualizarModal.emit(false);
    }

    getFormClass(field: FormControl) {
        return this.validacaoService.getFormClass(field);
    }
}
