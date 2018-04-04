import { Component, Input, OnInit, AfterViewInit, enableProdMode } from '@angular/core';
import { AlertasExternosService } from '../../../../services/alertas-externos/alertas-externos';
import { Alerta } from '../../../../models/alertas-externos/alerta';
enableProdMode();

declare var $: any;

@Component({
    selector: 'alertas-externos',
    templateUrl: './alertas-externos.component.html',
    providers: [AlertasExternosService]
})

export class AlertasExternosComponent implements OnInit, AfterViewInit {

    @Input() idProposta: string;
    mensagem: string;
    exibirModal: boolean;
    alertas: Alerta[];

    constructor(private alertasExternosService: AlertasExternosService) { }

    ngOnInit(): void {
        this.getAlertasExternos();
    }

    ngAfterViewInit(): void {
        $('[data-toggle="toggle"]').bootstrapToggle({
            on: 'SIM',
            off: 'NÃO',
            offstyle: 'danger',
            onstyle: 'primary',
            style: 'toggle-configuration'
        });
    }

    getAlertasExternos(): void {
        this.alertasExternosService.getAlertasExternos(this.idProposta).subscribe(
            data => {
                this.alertas = data;
            },
            error => {
                this.exibirModal = true;
                this.mensagem = "Erro ao obter alertas externos";
            }
        )
    }

    fecharModal(fecharModal: boolean): void {
        this.exibirModal = fecharModal;
    }

    setResolucao(event: any, alerta: Alerta): void {
        debugger;
        this.alertasExternosService.setResolucao(this.idProposta, alerta.tipoPessoa, alerta).subscribe(
            data => {
                if (data == false) {
                    this.exibirModal = true;
                    this.mensagem = "Falha ao gravar esclarecimento do alerta";
                }
            },
            error => {
                this.exibirModal = true;
                this.mensagem = "Falha ao gravar esclarecimento do alerta";
            }
        )
    }
}