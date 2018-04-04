import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BarraFixaService } from './../../../../services/fila-credito/barra-fixa.service';
import { PerfilCliente } from './../../../../models/perfil-cliente';
import { PerfilProfissional } from './../../../../models/perfil-profissional';
import { Avalista } from './../../../../models/avalista';
import { Conjuge } from './../../../../models/conjuge';
import { Subscription } from 'rxjs/Subscription';
import { PropostaService } from '../../../../services/proposta/proposta.service';
import { FormatacaoService } from './../../../../services/util/formatacao.service';
import { Operacao } from '../../../../models/operacao/operacao';

@Component({
    selector: 'barra-fixa',
    templateUrl: './barra-fixa.component.html',
    providers: [FormatacaoService]
})
export class BarraFixaComponent implements OnInit, OnDestroy {
    @Input() idProposta: string;
    perfilCliente: PerfilCliente;
    perfilProfissional: PerfilProfissional;
    operacao: Operacao;
    avalistas: Avalista[];
    conjuge: Conjuge;
    loading: boolean = false;
    subscription: Subscription;

    constructor(private barraFixaService: BarraFixaService, private propostaService: PropostaService, private formatacaoService: FormatacaoService) {
        this.subscription = this.barraFixaService.getAtualizacaoPerfilCliente().subscribe(data => this.perfilCliente = data);
        this.subscription = this.barraFixaService.getAtualizacaoPerfilProfissional().subscribe(data => this.perfilProfissional = data);
        this.subscription = this.barraFixaService.getAtualizacaoConjuge().subscribe(data => this.conjuge = data);
        this.subscription = this.barraFixaService.getAtualizacaoAvalistas().subscribe(data => this.avalistas = data);
        this.subscription = this.propostaService.getVerificarAtualizacaoBarraFixa().subscribe(data => { this.idProposta = data; this.carregaPagina(); });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        this.carregaPagina();
    }

    private carregaPagina(): void {
        this.getPerfilCliente();
        this.getPerfilProfissional();
        this.getDadosOperacao();
        this.getConjuge();
        this.getAvalistas();
    }

    private getPerfilCliente(): void {
        this.loading = true;
        this.barraFixaService.getPerfilCliente(this.idProposta).subscribe(
            data => {
                this.perfilCliente = data;
                this.perfilCliente.dtNascimento = this.formatacaoService.setDate(this.perfilCliente.dtNascimento);
            },            
            error => this.loading = false,
            () => this.loading = false            
        )
    }

    private getPerfilProfissional(): void {
        this.loading = true;
        this.barraFixaService.getPerfilProfissional(this.idProposta).subscribe(
            data => this.perfilProfissional = data,
            error => this.loading = false,
            () => this.loading = false
        )
    }

    private getDadosOperacao(): void {
        this.loading = true;
        this.barraFixaService.getOperacao(this.idProposta).subscribe(            
            data => this.operacao = data,            
            error => this.loading = false,
            () => this.loading = false
        )
    }

    private getAvalistas(): void {
        this.loading = true;
        this.barraFixaService.getAvalistas(this.idProposta, "0").subscribe(
            data => this.avalistas = data,
            error => this.loading = false,
            () => this.loading = false
        )
    }

    private getConjuge(): void {
        this.loading = true;
        this.barraFixaService.getConjuge(this.idProposta).subscribe(
            data => this.conjuge = data,
            error => this.loading = false,
            () => this.loading = false
        )
    }
}