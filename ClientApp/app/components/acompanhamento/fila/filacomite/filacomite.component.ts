import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GuidService } from '../../../../services/util/guid.service';
import { PropostaService } from '../../../../services/proposta/proposta.service';
import { FilaComite } from '../../../../models/acompanhamento/fila/filacomite';

@Component({
    selector: 'fila-comite',
    templateUrl: './filacomite.component.html',
    providers: [ GuidService ]
})

export class FilaComiteComponent {
    @Input() filaComite: FilaComite;
    exibirModal: boolean = false;
    mensagem: string = "";

    constructor(private router: Router, private propostaService: PropostaService) { }

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

    public getColor(status: string) {

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
                classe = "text-success";
                break;
            }
            case "R": {
                classe = "text-orange";
                break;
            }
            case "S": {
                classe = "text-purple"
                break;
            }
            default: {
                classe = "text-dark";
                break;
            }
        }
        return classe;
    }

    fecharModal(fecharModal: boolean) {
        this.exibirModal = fecharModal;
    }
}