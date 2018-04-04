import { Component, Input, OnInit } from '@angular/core';
import { FilaCreditoService } from './../../../../services/fila-credito/fila-credito.service';
import { DetalhePropostaDecidida } from '../../../../models/acompanhamento/fila/detalhe-proposta-decidida';
import { Router } from '@angular/router';

@Component({
    selector: 'proposta-decidida-detalhe',
    templateUrl: './proposta-decidida-detalhe.component.html',
    providers: [ FilaCreditoService]
})
export class PropostaDecididaDetalheComponent implements OnInit {
    @Input() idCliente: string;
    @Input() idDecisao: number;
    loading: boolean = false;
    isOpen: boolean = false;
    propostaDecididaDetalhe: DetalhePropostaDecidida;
    exibirModal: boolean = false;
    mensagem: string = "";
    
    constructor(private filaCreditoService: FilaCreditoService, private router: Router){ }

    ngOnInit(): void {
        this.getPropostaDecididaDetalhe();
    }

    fecharModal(fecharModal: boolean) {
        this.exibirModal = fecharModal;
    }

    private getPropostaDecididaDetalhe() {       
        this.loading = true;
        this.filaCreditoService.getPropostaDecididaDetalhe(this.idDecisao, 0,"-", this.idCliente).subscribe(
            data => {
                this.propostaDecididaDetalhe = data;
                this.loading = false;
                
            },
            error => {                
                this.loading = false;
                () => this.loading = false;
            }
        )       
    }

    visualizarProposta(idProposta: string) {
        window.sessionStorage.setItem('readonly', "true");
        this.router.navigateByUrl(`/mesa/${idProposta}/alerta/${idProposta}`);
    }

}