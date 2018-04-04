import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { PropostaService } from '../../../../services/proposta/proposta.service';
import { ProximaProposta } from '../../../../models/proxima-proposta';
import { GuidService } from '../../../../services/util/guid.service';
import { FormatacaoService } from '../../../../services/util/formatacao.service';
import { InfoAnalise } from '../../../../models/proposta/info-analise';

@Component({
    selector: 'info-analise',
    templateUrl: './info-analise.component.html',
    providers: [ GuidService, FormatacaoService ]
})
export class InfoAnaliseComponent implements OnDestroy {
    @Input() idProposta: string;
    infoAnalise: InfoAnalise;
    mensagem: string;
    exibirModal: boolean;
    pause: boolean;
    subscription: Subscription;
    inicio: Date = new Date();
    tempoTotal: Date;
    tempoGasto: string;
    readonly: boolean = window.sessionStorage.getItem('readonly') == "true" ? true : false;
    
    constructor(private propostaService: PropostaService, private router: Router, private formatacaoService: FormatacaoService) {
        this.subscription = this.propostaService.getVerificarNavegacaoProximaProposta().subscribe(data => { this.analisarProximaProposta(); });
    }

    ngOnInit(): void {
        this.getInfoAnalise();
        setInterval(() => {
            var millisenconds = new Date().valueOf() - this.inicio.valueOf();
            this.tempoGasto = this.formatacaoService.convertMillisecondsToDigitalClock(millisenconds);
        }, 1);
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    private getInfoAnalise(): void {
        this.propostaService.getInfoAnalise(this.idProposta).subscribe(
            data => {
                if (data != null) {
                    this.infoAnalise = data;
                } else {
                    // TODO: voltar aki
                    //this.exibirModal = true;
                    //this.mensagem = 'Informações de análise da proposta indisponíveis';
                }
            },
            error => {
                this.exibirModal = true;
                this.mensagem = 'Falha ao obter informações de análise da proposta';
            }
        )
    }

    pausePlay(): void {
        this.pause = !this.pause;
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }

    analisarProximaProposta(): void {
        if (this.pause) {
            this.router.navigateByUrl(`/mesa`);
        } else {
            this.propostaService.getProximaPropostaParaAnalise(this.idProposta).subscribe(
                data => {
                    if (data == null) {
                        this.router.navigateByUrl(`/mesa`);
                    } else {
                        let proximaProposta: ProximaProposta = data;
                        this.inicio = new Date();
                        window.sessionStorage.setItem('guid', GuidService.newGuid());
                        window.sessionStorage.setItem('recalcular', 'false');
                        window.sessionStorage.setItem('parecer','');
                        let url: string = `/mesa/${proximaProposta.idProposta}/alerta/${proximaProposta.idProposta}`;
                        this.router.navigateByUrl(url);
                        this.propostaService.atualizarBarraFixa(proximaProposta.idProposta);
                    }
                },
                error => {
                    this.router.navigateByUrl(`/mesa`);
                }
            )
        }
    }
}
