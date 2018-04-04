import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PropostaService } from '../../../../services/proposta/proposta.service';
import { Pendencia } from '../../../../models/pendencia';
import { ParecerMotivo } from '../../../../models/proposta/parecer/parecer-motivo';
import { ParecerPrioridade } from '../../../../models/proposta/parecer/parecer-prioridade';
import { ParecerComite } from '../../../../models/proposta/parecer/parecer-comite';
import { ParecerUsuario } from '../../../../models/proposta/parecer/parecer-usuario';
import { ParecerPendencia } from '../../../../models/proposta/parecer/parecer-pendencia';
import { ParecerEncaminhar } from '../../../../models/proposta/parecer/parecer-encaminhar';

@Component({
    selector: 'mesa-parecer-encaminhar',
    templateUrl: './mesa-parecer-encaminhar.component.html'
})

export class MesaParecerEncaminharComponent implements OnInit {

    @Input() idAcao: number;
    @Input() idProposta: string;
    motivos: ParecerMotivo[];
    prioridades: ParecerPrioridade[];
    tipos: ParecerComite[];
    usuarios: ParecerUsuario[];
    alcadas: ParecerUsuario[];
    remetentes: ParecerUsuario[];
    mensagem: string;
    exibirModal: boolean;
    pendencias: ParecerPendencia[];
    pendenciasSelecionadas: string[] = [];
    exibirComites: boolean = false;
    exibirUsuarios: boolean = false;
    exibirAlcadas: boolean = false;
    exibirRemetentes: boolean = false;
    exibirPrioridades: boolean = false;
    idPrioridade: number;
    codUsuarioAnalista: string;
    codUsuarioAlcada: string;
    codUsuarioRemetente: string;
    idComite: number;
    idMotivo: number;
    
    myForm: FormGroup;
    motivo: FormControl;
    observacao: FormControl;
    prioridade: FormControl;
    tipo: FormControl;
    usuario: FormControl;
    alcada: FormControl;
    remetente: FormControl;

    constructor(private propostaService: PropostaService, private router: Router) { }

    ngOnInit(): void {
        this.createFormControls();
        this.createForm();
        this.getMotivos();
        this.getPendencias();        
    }

    private createFormControls(): void {
        this.motivo = new FormControl('', Validators.required);
        this.observacao = new FormControl('', Validators.required);
        this.prioridade = new FormControl('', Validators.required);
        this.tipo = new FormControl('', Validators.required);
        this.usuario = new FormControl('', Validators.required);
        this.alcada = new FormControl('', Validators.required);
        this.remetente = new FormControl('', Validators.required);
    }

    private createForm(): void {
        this.myForm = new FormGroup({
            motivo: this.motivo,
            observacao: this.observacao,
            prioridade: this.prioridade,
            tipo: this.tipo,
            usuario: this.usuario,
            alcada: this.alcada,
            remetente: this.remetente
        })
    }

    private getPendencias(): void {
        this.propostaService.getParecerPendencias(this.idProposta).subscribe(
            data => {
                if (data != null) {
                    this.pendencias = data;
                    this.pendencias.filter(x => x.obrigatorioPagamento == 0).forEach(element => {
                        this.pendenciasSelecionadas.push(element.idPendencia);
                    });
                } else {
                    this.exibirModal = true;
                    this.mensagem = 'Erro ao listar motivos';
                }
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Erro ao listar motivos';
            }
        )
    }

    adicionalChange(idPendencia: string, isChecked: boolean) {
        if (isChecked) {
            this.pendenciasSelecionadas.push(idPendencia);
        } else {
            var index = this.pendenciasSelecionadas.indexOf(idPendencia, 0);
            if (index > -1) {
                this.pendenciasSelecionadas.splice(index, 1);
            }
        }
    }

    private getMotivos(): void {        
        this.propostaService.getParecerMotivosEncaminhar(this.idProposta).subscribe(
            data => {
                this.motivos = data;
                this.myForm.controls['motivo'].setValue(null);
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Erro ao listar motivos';
            }
        )
    }

    motivoChange(idMotivo: string): void {
        this.idMotivo = Number(idMotivo);
        switch (idMotivo) {            
            case "50":
                this.getPrioridades();  
                this.remetente.disable();
                this.alcada.disable();
                this.usuario.disable();
                this.tipo.disable();
                break;   
            case "3":
                this.getUsuariosRemetentes();
                this.getPrioridades();   
                this.exibirRemetentes = true;   
                this.exibirAlcadas = false;    
                this.exibirUsuarios = false; 
                this.exibirComites = false;
                this.remetente.enable();
                this.alcada.disable();
                this.usuario.disable();
                this.tipo.disable();
                break;   
            case "6":                
                this.getTiposComites();
                this.getPrioridades();   
                this.exibirComites = true;
                this.exibirUsuarios = false;           
                this.exibirAlcadas = false;           
                this.exibirRemetentes = false;             
                this.remetente.disable();
                this.alcada.disable();
                this.usuario.disable();
                this.tipo.enable();
                break;   
            case "5":
                this.getUsuariosAlcadas();
                this.getPrioridades();  
                this.exibirAlcadas = true;    
                this.exibirUsuarios = false; 
                this.exibirComites = false;
                this.exibirRemetentes = false;
                this.remetente.disable();
                this.alcada.enable();
                this.usuario.disable();
                this.tipo.disable();      
                break;   
            case "4":                
                this.getUsuarios();
                this.getPrioridades(); 
                this.exibirUsuarios = true; 
                this.exibirComites = false;
                this.exibirAlcadas = false;
                this.exibirRemetentes = false;   
                this.remetente.disable();
                this.alcada.disable();
                this.usuario.enable();
                this.tipo.disable();  
                break;   
        }
    }

    private getPrioridades(): void {
        this.propostaService.getParecerPrioridades().subscribe(
            data => {
                this.prioridades = data;
                this.exibirPrioridades = true;           
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Erro ao listar prioridades';
            }
        )
    }

    private getTiposComites(): void {
        var parecerComite = {} as ParecerComite;        
        parecerComite.idProposta = this.idProposta;
        this.propostaService.getParecerComite(parecerComite).subscribe(
            data => {                
                this.tipos = data;                
            },
            error => {                
                this.exibirModal = true;
                this.mensagem = 'Erro ao listar tipos de comites';
            }
        )
    }

    private getUsuarios(): void {
        var parecerUsuario = {} as ParecerUsuario;        
        parecerUsuario.idProposta = this.idProposta;
        this.propostaService.getParecerUsuario(parecerUsuario).subscribe(
            data => {                
                this.usuarios = data;                         
            },
            error => {                
                this.exibirModal = true;
                this.mensagem = 'Erro ao listar usuários';
            }
        )
    }

    private getUsuariosAlcadas(): void {
        var parecerUsuario = {} as ParecerUsuario;        
        parecerUsuario.idProposta = this.idProposta;
        this.propostaService.getParecerUsuarioAlcada(parecerUsuario).subscribe(
            data => {                
                this.alcadas = data;                             
            },
            error => {                
                this.exibirModal = true;
                this.mensagem = 'Erro ao listar usuários';
            }
        )
    }

    private getUsuariosRemetentes(): void {
        var parecerUsuario = {} as ParecerUsuario;        
        parecerUsuario.idProposta = this.idProposta;
        this.propostaService.getParecerUsuarioRemetente(parecerUsuario).subscribe(
            data => {                
                this.remetentes = data;                      
            },
            error => {                
                this.exibirModal = true;
                this.mensagem = 'Erro ao listar usuários';
            }
        )
    }

    encaminhar(): void {
        let pendencias: Pendencia[] = [];

        this.pendenciasSelecionadas.forEach(element => {
            var elePendencia = this.pendencias.find(x => x.idPendencia == element);
            if (elePendencia != null) {
                let pendencia: Pendencia = {
                    proposta: this.idProposta,
                    tipo: false,
                    id: Number(element),
                    compromisso: elePendencia.idCompromisso
                }
                pendencias.push(pendencia);
            }
        });

        var parecerEncaminhar: ParecerEncaminhar = new ParecerEncaminhar();
        parecerEncaminhar.idProposta = this.idProposta;     
        parecerEncaminhar.idAcao = this.idAcao;
        parecerEncaminhar.idMotivo = this.idMotivo;
        parecerEncaminhar.idPrioridade =  this.idPrioridade;        
        parecerEncaminhar.pendencias = pendencias;
        parecerEncaminhar.parecerObservacao = this.observacao.value;
        parecerEncaminhar.observacao = "" + window.sessionStorage.getItem("parecer");
        
        if(this.exibirComites == true){
            parecerEncaminhar.idComite = this.idComite;      
        };       

        if(this.exibirUsuarios == true){
            parecerEncaminhar.codUsuarioEnc = this.codUsuarioAnalista;
        }
        else if(this.exibirAlcadas == true){
            parecerEncaminhar.codUsuarioEnc = this.codUsuarioAlcada;
        }
        else if(this.exibirRemetentes == true){
            parecerEncaminhar.codUsuarioEnc = this.codUsuarioRemetente;
        };           
        

        this.propostaService.putEncaminhar(parecerEncaminhar).subscribe(
            data => {
                if (data.length == 0) {
                    this.propostaService.verificarNavegacaoProximaProposta();
                } else {
                    this.exibirModal = true;
                    this.mensagem = data.join('<br />');
                }
            }, error => {
                this.exibirModal = true;
                this.mensagem = "Erro ao aprovar";
            }
        )
    }
    
}
