import { Component, Input, OnInit } from '@angular/core';
import { FilaCreditoService } from './../../../../services/fila-credito/fila-credito.service';
import { Router } from '@angular/router';
import { GuidService } from '../../../../services/util/guid.service';
import { PropostaService } from '../../../../services/proposta/proposta.service';
import { FilaGeralDetalheProposta } from '../../../../models/acompanhamento/fila/filageral-detalhe-proposta';

@Component({
    selector: 'fila-geral-detalhe',
    templateUrl: './filageral-detalhe.component.html',
    providers: [ FilaCreditoService, GuidService ]
})
export class FilaGeralDetalheComponent implements OnInit {
    @Input() idFila: number;
    @Input() captura: boolean;
    @Input() idCliente: string;
    loading: boolean = false;
    isOpen: boolean = false;
    filaDetalheProposta: FilaGeralDetalheProposta;
    exibirModal: boolean = false;
    mensagem: string = "";
    popup: boolean = window.sessionStorage.getItem('popup') == "true" ? true : false;

    constructor(private filaCreditoService: FilaCreditoService, private router: Router, private propostaService: PropostaService) { }

    ngOnInit(): void {
        this.getFilaGeralDetalhe();
    }

    visualizarProposta(idProposta: string) {
        window.sessionStorage.setItem('readonly', "true");
        this.router.navigateByUrl(`/mesa/${idProposta}/alerta/${idProposta}`);
    }

    editarProposta(idProposta: string) {
        let acesso: boolean;
        this.propostaService.putUsoProposta(idProposta).subscribe(
            data => {
                acesso = data;
                if (acesso == true) {
                    window.sessionStorage.setItem('readonly', "false");
                    window.sessionStorage.setItem('guid', GuidService.newGuid());
                    window.sessionStorage.setItem('recalcular', "false");
                    window.sessionStorage.setItem('parecer','');
                    this.router.navigateByUrl(`/mesa/${idProposta}/alerta/${idProposta}`);
                } else {
                    this.exibirModal = true;
                    this.mensagem = 'Esta proposta já esta sendo analisada';
                }
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Esta proposta já esta sendo analisada';
            }
        )
    }

    fecharModal(fecharModal: boolean) {
        this.exibirModal = fecharModal;
    }

    private getFilaGeralDetalhe() {
        this.captura = true;
        this.loading = true;
        this.filaCreditoService.getFilaGeralDetalheProposta(this.idFila, this.captura, this.idCliente).subscribe(
            data => this.filaDetalheProposta = data,
            error => this.loading = false,
            () => this.loading = false
        )
    }

    getColor(status: string) {
        let classe: string;
        switch (status) {
            case "A": {
                classe = "text-primary";
                break;
            }
            case "P": {
                classe = "text-danger";
                break;
            }
            case "G": {
                classe = "text-sucess";
                break;
            }
            case "R": {
                classe = "text-orange";
                break;
            }
            case "S": {
                classe = "text-purple";
                break;
            }
            default: {
                classe = "text-dark";
                break;
            }
        }
        return classe;
    }
}