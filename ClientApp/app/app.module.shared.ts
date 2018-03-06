import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { AcessoComponent } from './components/acesso/acesso.component';
import { BarraFixaComponent} from './components/proposta/barra-fixa/barra-fixa/barra-fixa.component';
import { BarraFixaAvaliacaoComponent } from './components/proposta/barra-fixa/barra-fixa-avaliacao/barra-fixa-avaliacao.component';
import { BarraFixaAvalistaComponent} from './components/proposta/barra-fixa/barra-fixa-avalista/barra-fixa-avalista.component';
import { BarraFixaPerfilAvalistaComponent } from './components/proposta/barra-fixa/barra-fixa-perfil-avalista/barra-fixa-perfil-avalista.component';
import { BarraFixaPerfilAvalistaProfissionalComponent } from './components/proposta/barra-fixa/barra-fixa-perfil-avalista-profissional/barra-fixa-perfil-avalista-profissional.component';
import { BarraFixaDadosConjugeComponent } from './components/proposta/barra-fixa/barra-fixa-dados-conjuge/barra-fixa-dados-conjuge.component';
import { BarraFixaDadosOperacaoComponent } from './components/proposta/barra-fixa/barra-fixa-dados-operacao/barra-fixa-dados-operacao.component';
import { BarraFixaPerfilProfissionalComponent } from './components/proposta/barra-fixa/barra-fixa-perfil-profissional/barra-fixa-perfil-profissional.component'; 
import { BarraFixaPerfilClienteComponent } from './components/proposta/barra-fixa/barra-fixa-perfil-cliente/barra-fixa-perfil-cliente.component';
import { CabecalhoComponent } from './components/proposta/cabecalho/cabecalho/cabecalho.component';
import { CabecalhoAlertasComponent } from './components/proposta/cabecalho/cabecalho-alertas/cabecalho-alertas.component';
import { CabecalhoStatusComponent } from './components/proposta/cabecalho/cabecalho-status/cabecalho-status.component';
import { HeaderSafraComponent } from './components/headersafra/headersafra.component';
import { HomeComponent } from './components/home/home.component';
import { FilaComiteComponent } from './components/acompanhamento/fila/filacomite/filacomite.component';
import { FilaComponent } from './components/acompanhamento/fila/fila/fila.component';
import { FilaGeralComponent } from './components/acompanhamento/fila/filageral/filageral.component';
import { FilaPessoalComponent } from './components/acompanhamento/fila/filapessoal/filapessoal.component';
import { FilaPessoalPropostaAcompanhamentoComponent } from './components/acompanhamento/fila/filapessoal-proposta-acompanhamento/filapessoal-proposta-acompanhamento.component';
import { FilaGeralDetalheComponent } from './components/acompanhamento/fila/filageral-detalhe/filageral-detalhe.component';
import { MenuComponent } from './components/proposta/menu/menu.component';
import { ModalComponent } from './components/util/modal/modal-util.component';
import { OperacaoComponent } from './components/proposta/operacao/operacao/operacao.component';
import { OperacaoCondicaoComponent } from './components/proposta/operacao/operacao-condicao/operacao-condicao.component';
import { OperacaoFluxoParcelasComponent } from './components/proposta/operacao/operacao-fluxo-parcelas/operacao-fluxo-parcelas.component';
import { OperacaoPerfilComponent } from './components/proposta/operacao/operacao-perfil/operacao-perfil.component';
import { OperacaoRevendaComponent } from './components/proposta/operacao/operacao-revenda/operacao-revenda.component';
import { OperacaoValorEntradaComponent } from './components/proposta/operacao/operacao-valor-entrada/operacao-valor-entrada.component';
import { OperacaoValorVeiculoComponent } from './components/proposta/operacao/operacao-valor-veiculo/operacao-valor-veiculo.component';
import { PerfilComponent } from './components/proposta/perfil/perfil/perfil.component';
import { PerfilClienteComponent } from './components/proposta/perfil/perfil-cliente/perfil-cliente.component';
import { PropostaComponent } from './components/proposta/proposta/proposta.component';
import { SpinnerComponent } from './components/util/spinner/spinner.component';

@NgModule({
    declarations: [
        AppComponent,
        AcessoComponent,
        BarraFixaComponent,
        BarraFixaAvaliacaoComponent,
        BarraFixaAvalistaComponent,
        BarraFixaPerfilAvalistaComponent,
        BarraFixaPerfilAvalistaProfissionalComponent,
        BarraFixaDadosConjugeComponent,
        BarraFixaDadosOperacaoComponent,
        BarraFixaPerfilProfissionalComponent,
        BarraFixaPerfilClienteComponent,
        CabecalhoComponent,
        CabecalhoAlertasComponent,
        CabecalhoStatusComponent,
        HeaderSafraComponent,
        HomeComponent,
        FilaComiteComponent,
        FilaComponent,
        FilaGeralComponent,
        FilaPessoalComponent,
        FilaPessoalPropostaAcompanhamentoComponent,
        FilaGeralDetalheComponent,
        MenuComponent,
        ModalComponent,
        OperacaoComponent,
        OperacaoCondicaoComponent,
        OperacaoFluxoParcelasComponent,
        OperacaoPerfilComponent,
        OperacaoRevendaComponent,
        OperacaoValorEntradaComponent,
        OperacaoValorVeiculoComponent,
        PerfilComponent,
        PerfilClienteComponent,
        PropostaComponent,
        SpinnerComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'proposta/:idProposta', component: PropostaComponent,
                children: [
                    { path: 'perfil', component: PerfilComponent },                
                    { path: 'operacao', component: OperacaoComponent }, 
                    { path: '', redirectTo: 'operacao', pathMatch: 'full' }
                ]},
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [{
        provide: LOCALE_ID,
        useValue: 'pt-BR'
    }]
})
export class AppModuleShared {
}
