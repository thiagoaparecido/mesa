import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { Pendencia } from '../../../../models/pendencia';
import { PropostaService } from '../../../../services/proposta/proposta.service';
import { ParecerPendencia } from '../../../../models/proposta/parecer/parecer-pendencia';
import { ParecerAprovar } from '../../../../models/proposta/parecer/parecer-aprovar';

enum ParecerAprovarDocumento {
    PreSelecionado = 0,
    Obrigatorio = 1,
    Opcional = 2
}

@Component({
    selector: 'mesa-parecer-aprovar',
    templateUrl: './mesa-parecer-aprovar.component.html'
})

export class MesaParecerAprovarComponent implements OnInit {

    @Input() idAcao: number;
    @Input() idProposta: string;
    mensagem: string;
    exibirModal: boolean;
    pendencias: ParecerPendencia[];
    pendenciasObrigatorio: ParecerPendencia[];
    pendenciasAdicional: ParecerPendencia[];
    pendenciasSelecionadas: string[] = [];    
    myForm: FormGroup;
    observacao: FormControl;
    
    constructor(private propostaService: PropostaService, private render: Renderer2) { }

    ngOnInit(): void {
        this.createFormControls();
        this.createForm();
        this.getPendencias();        
    }

    private createFormControls(): void {
        this.observacao = new FormControl('', Validators.required)
    }

    private createForm(): void {
        this.myForm = new FormGroup({
            observacao: this.observacao
        })
    }

    fecharModal(fecharModal: boolean) {
        this.exibirModal = fecharModal;
    }

    private getPendencias(): void {        
        this.propostaService.getParecerPendencias(this.idProposta).subscribe(
            data => {
                if (data != null) {
                    this.pendencias = data;
                    this.pendencias.filter(x => x.obrigatorioPagamento == 0).forEach(element => {
                        this.pendenciasSelecionadas.push(element.idPendencia);
                    });
                this.pendenciasObrigatorio = this.pendencias.filter(x => x.obrigatorioPagamento == 1);
                this.pendenciasAdicional = this.pendencias.filter(x => x.obrigatorioPagamento == 2);               
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

    aprovar(): void {

        let pendencias: Pendencia[] = [];    
        this.pendenciasSelecionadas.forEach(element => {
            var elePendencia = this.pendencias.find(x => x.idPendencia == element);
            if (elePendencia != null){
                let pendencia: Pendencia = {
                    proposta: this.idProposta,
                    tipo: false,
                    id: Number(element),
                    compromisso: elePendencia.idCompromisso
                }
                pendencias.push(pendencia);
            }
        });

        var parecerAprovar: ParecerAprovar = new ParecerAprovar();
        parecerAprovar.idProposta = this.idProposta;
        parecerAprovar.idAcao =  this.idAcao;        
        parecerAprovar.pendencias = pendencias;
        parecerAprovar.parecerObservacao = this.observacao.value;
        parecerAprovar.observacao = "" + window.sessionStorage.getItem("parecer");
        
        this.propostaService.putAprovar(parecerAprovar).subscribe(
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

    adicionalChange(idPendencia: string, isChecked: boolean) {       
        if (isChecked) {
            var index = this.pendenciasSelecionadas.indexOf(idPendencia, 0);
            if (index == -1) {
                this.pendenciasSelecionadas.push(idPendencia);
            }            
        } else {
            var index = this.pendenciasSelecionadas.indexOf(idPendencia, 0);
            if (index > -1) {
                this.pendenciasSelecionadas.splice(index, 1);
            }
        }
    }
}