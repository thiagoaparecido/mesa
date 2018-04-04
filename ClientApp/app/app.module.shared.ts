import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';

import { CompararPopOverComponent } from './components/mesa/alerta/comparar-pop-over/comparar-pop-over.component';
import { BarraFixaComparacaoComponent } from './components/mesa/alerta/comparacao/barra-fixa-comparacao/barra-fixa-comparacao.component';
import { AlertasExternosComponent } from './components/mesa/alerta/alertas-externos/alertas-externos.component';
import { AlertaComponent } from './components/mesa/alerta/alerta/alerta.component';
import { AlertasInternosComponent } from './components/mesa/alertas-internos/alertas-internos/alertas-internos.component';
import { HistoricoAlertaComponent } from './components/mesa/alerta/historico-alerta/historico-alerta.component';
import { TelefoneAlertaComponent } from './components/mesa/alerta/telefone-alerta/telefone-alerta.component';
import { BarraFixaComponent} from './components/mesa/barra-fixa/barra-fixa/barra-fixa.component';
import { BarraFixaAvalistaComponent} from './components/mesa/barra-fixa/barra-fixa-avalista/barra-fixa-avalista.component';
import { BarraFixaAvalistaComparacaoComponent } from './components/mesa/alerta/comparacao/barra-fixa-avalista-comparacao/barra-fixa-avalista-comparacao.component';

import { BarraFixaConceitoComponent } from './components/mesa/barra-fixa/barra-fixa-conceito/barra-fixa-conceito.component';
import { BarraFixaConceitoComparacaoComponent } from './components/mesa/alerta/comparacao/barra-fixa-conceito-comparacao/barra-fixa-conceito-comparacao.component';
import { BarraFixaPerfilAvalistaComponent } from './components/mesa/barra-fixa/barra-fixa-perfil-avalista/barra-fixa-perfil-avalista.component';
import { BarraFixaPerfilAvalistaComparacaoComponent } from './components/mesa/alerta/comparacao/barra-fixa-perfil-avalista-comparacao/barra-fixa-perfil-avalista-comparacao.component';
import { BarraFixaPerfilAvalistaProfissionalComponent } from './components/mesa/barra-fixa/barra-fixa-perfil-avalista-profissional/barra-fixa-perfil-avalista-profissional.component';
import { BarraFixaPerfilAvalistaProfissionalComparacaoComponent } from './components/mesa/alerta/comparacao/barra-fixa-perfil-avalista-profissional-comparacao/barra-fixa-perfil-avalista-profissional-comparacao.component';
import { BarraFixaDadosConjugeComponent } from './components/mesa/barra-fixa/barra-fixa-dados-conjuge/barra-fixa-dados-conjuge.component';
import { BarraFixaDadosConjugeComparacaoComponent } from './components/mesa/alerta/comparacao/barra-fixa-dados-conjuge-comparacao/barra-fixa-dados-conjuge-comparacao.component';
import { BarraFixaDadosOperacaoComponent } from './components/mesa/barra-fixa/barra-fixa-dados-operacao/barra-fixa-dados-operacao.component';
import { BarraFixaDadosOperacaoComparacaoComponent } from './components/mesa/alerta/comparacao/barra-fixa-dados-operacao-comparacao/barra-fixa-dados-operacao-comparacao.component';
import { BarraFixaPerfilProfissionalComponent } from './components/mesa/barra-fixa/barra-fixa-perfil-profissional/barra-fixa-perfil-profissional.component'; 
import { BarraFixaPerfilClienteComponent } from './components/mesa/barra-fixa/barra-fixa-perfil-cliente/barra-fixa-perfil-cliente.component';
import { BarraFixaStatusComponent } from './components/mesa/barra-fixa/barra-fixa-status/barra-fixa-status.component';
import { BarraFixaStatusComparacaoComponent } from './components/mesa/alerta/comparacao/barra-fixa-status-comparacao/barra-fixa-status-comparacao.component';
import { CabecalhoComponent } from './components/mesa/cabecalho/cabecalho/cabecalho.component';
import { CabecalhoAlertasComponent } from './components/mesa/cabecalho/cabecalho-alertas/cabecalho-alertas.component';
import { CabecalhoStatusComponent } from './components/mesa/cabecalho/cabecalho-status/cabecalho-status.component';
import { CelularPipe } from './components/shared/pipe/celular.pipe';
import { CepPipe } from './components/shared/pipe/cep.pipe';
import { CpfCnpjComponent } from './components/util/cpf-cnpj/cpf-cnpj.component';
import { CpfPipe } from './components/shared/pipe/cpf.pipe';
import { CnpjPipe } from './components/shared/pipe/cnpj.pipe';
import { ConsultasInternasComponent} from './components/mesa/alertas-internos/consultas-internas/consultas-internas.component';
import { ConsultasInternasConsultasContratoTotalComponent } from './components/mesa/alertas-internos/consultas-internas-consultas-contrato-total/consultas-internas-consultas-contrato-total.component';
import { ConsultasInternasRiscoOperacoesComponent} from './components/mesa/alertas-internos/consultas-internas-risco-operacoes/consultas-internas-risco-operacoes.component';
import { ConsultasInternasPosicaoInvestidorComponent} from './components/mesa/alertas-internos/consultas-internas-posicao-investidor/consultas-internas-posicao-investidor.component';
import { ConsultasInternasConsultasContratoComponent} from './components/mesa/alertas-internos/consultas-internas-consultas-contrato/consultas-internas-consultas-contrato.component';
import { ConsultasInternasPocsClientesComponent} from './components/mesa/alertas-internos/consultas-internas-pocs-clientes/consultas-internas-pocs-clientes.component';
import { ConsultasInternasConsultasContratoDetalheComponent } from './components/mesa/alertas-internos/consultas-internas-consultas-contrato-detalhe/consultas-internas-consultas-contrato-detalhe.component';
import { HeaderMesaComponent } from './components/mesa/header-mesa/header-mesa.component';
import { HomeComponent } from './components/home/home.component';
import { FilaComiteComponent } from './components/acompanhamento/fila/filacomite/filacomite.component';
import { FilaComponent } from './components/acompanhamento/fila/fila/fila.component';
import { FilaGeralComponent } from './components/acompanhamento/fila/filageral/filageral.component';
import { FilaHeaderComponent } from './components/acompanhamento/fila/filaheader/filaheader.component';
import { FilaPessoalComponent } from './components/acompanhamento/fila/filapessoal/filapessoal.component';
import { FilaPessoalPropostaAcompanhamentoComponent } from './components/acompanhamento/fila/filapessoal-proposta-acompanhamento/filapessoal-proposta-acompanhamento.component';
import { FilaGeralDetalheComponent } from './components/acompanhamento/fila/filageral-detalhe/filageral-detalhe.component';
import { LogoComponent } from './components/shared/logo/logo.component';
import { MaskCpfCnpjDirective} from './components/shared/diretivas/mask-cpf-cnpj';
import { MenuComponent } from './components/mesa/menu/menu.component';
import { MesaComponent } from './components/mesa/mesa/mesa.component';
import { ModalComponent } from './components/util/modal/modal-util.component';
import { ModalConjugeComponent } from './components/mesa/perfil/dados-conjuge/modal-conjuge/modal-conjuge.component';
import { OperacaoComponent } from './components/mesa/operacao/operacao/operacao.component';
import { OperacaoCondicaoComponent } from './components/mesa/operacao/operacao-condicao/operacao-condicao.component';
import { OperacaoFluxoParcelasComponent } from './components/mesa/operacao/operacao-fluxo-parcelas/operacao-fluxo-parcelas.component';
import { OperacaoPerfilComponent } from './components/mesa/operacao/operacao-perfil/operacao-perfil.component';
import { OperacaoRevendaComponent } from './components/mesa/operacao/operacao-revenda/operacao-revenda.component';
import { OperacaoValorEntradaComponent } from './components/mesa/operacao/operacao-valor-entrada/operacao-valor-entrada.component';
import { OperacaoValorVeiculoComponent } from './components/mesa/operacao/operacao-valor-veiculo/operacao-valor-veiculo.component';
import { PerfilComponent } from './components/mesa/perfil/perfil/perfil.component';
import { PerfilClienteComponent } from './components/mesa/perfil/perfil-cliente/perfil-cliente.component';
import { BarraFixaPerfilClienteComparacaoComponent } from './components/mesa/alerta/comparacao/barra-fixa-perfil-cliente-comparacao/barra-fixa-perfil-cliente-comparacao.component';
import { PerfilDadosAvalistaComponent } from './components/mesa/perfil/avalista/dados-avalista/perfil-dados-avalista.component';
import { PerfilDadosConjugeComponent } from './components/mesa/perfil/dados-conjuge/perfil-dados-conjuge.component';
import { PerfilProfissionalComponent } from './components/mesa/perfil/perfil-profissional/perfil-profissional.component';
import { BarraFixaPerfilProfissionalComparacaoComponent } from './components/mesa/alerta/comparacao/barra-fixa-perfil-profissional-comparacao/barra-fixa-perfil-profissional-comparacao.component';
import { PerfilProfissaoAvalistaComponent } from './components/mesa/perfil/avalista/profissao-avalista/perfil-profissao-avalista.component';
import { SpinnerComponent } from './components/util/spinner/spinner.component';
import { TelefonePipe } from './components/shared/pipe/telefone.pipe';
import { VisualizarImagemComponent } from './components/mesa/cabecalho/visualizar-imagens/visualizar-imagem.component';
import { PerfilProfissionalAvalistaEdicaoComponent } from './components/mesa/perfil/avalista/profissao-avalista/edicao/perfil-profissao-avalista-edicao.component';
import { InlineEditorModule } from '@qontu/ngx-inline-editor';
import { KzMaskDirective } from './components/shared/diretivas/mask-ang';
import { PerfilProfissionalEdicaoComponent } from './components/mesa/perfil/perfil-profissional/edicao/perfil-profissional-edicao.component';
import { BrowserModule } from '@angular/platform-browser';
import { ModalAlertComponent } from './components/shared/modal/modal-alert.component';
import { MesaParecerComponent } from './components/mesa/parecer/mesa-parecer.component';
import { MesaParecerAprovarComponent } from './components/mesa/parecer/aprovar/mesa-parecer-aprovar.component';
import { MesaParecerPendenciarComponent } from './components/mesa/parecer/pendenciar/mesa-parecer-pendenciar.component';
import { MesaParecerRecusarComponent } from './components/mesa/parecer/recusar/mesa-parecer-recusar.component';
import { MesaParecerAgendarComponent } from './components/mesa/parecer/agendar/mesa-parecer-agendar.component';
import { CabecalhoExtratoComponent } from './components/mesa/cabecalho/cabecalho-extrato/cabecalho-extrato.component';
import { BarraFixaService } from './services/fila-credito/barra-fixa.service';
import { InfoAnaliseComponent } from './components/mesa/header-mesa/info-analise/info-analise.component';
import { PropostaService } from './services/proposta/proposta.service';
import { CepCidadeComponent } from './components/shared/cep-cidade/cep-cidade.component';
import { MesaParecerEncaminharComponent } from './components/mesa/parecer/encaminhar/mesa-parecer-encaminhar.component';
import { ConsultasExternasComponent } from './components/mesa/consultas-externas/consultas-externas/consultas-externas.component';
import { ConsultasExternasBacenComponent } from './components/mesa/consultas-externas/consultas-externas-bacen/consultas-externas-bacen.component';
import { ConsultasExternasConselhoRegionalComponent } from './components/mesa/consultas-externas/consultas-externas-conselho-regional/consultas-externas-conselho-regional.component';
import { ConsultasExternasSerasaComponent } from './components/mesa/consultas-externas/consultas-externas-serasa/consultas-externas-serasa.component';
import { ConsultasExternasSerasaRestricoesComponent } from './components/mesa/consultas-externas/consultas-externas-serasa/consultas-externas-serasa-restricoes/consultas-externas-serasa-restricoes.component';
import { ConsultasExternasSerasaTotalComponent } from './components/mesa/consultas-externas/consultas-externas-serasa/consultas-externas-serasa-total/consultas-externas-serasa-total.component';
import { ConsultasExternasRaisComponent } from './components/mesa/consultas-externas/consultas-externas-rais/consultas-externas-rais.component';
import { ConsultasExternasComprotComponent } from './components/mesa/consultas-externas/consultas-externas-comprot/consultas-externas-comprot.component';
import { ConsultasExternasSintegraComponent } from './components/mesa/consultas-externas/consultas-externas-sintegra/consultas-externas-sintegra.component';
import { ConsultasExternasCetipComponent } from './components/mesa/consultas-externas/consultas-externas-cetip/consultas-externas-cetip.component';
import { ConsultasExternasCetipFinanciamentosComponent } from './components/mesa/consultas-externas/consultas-externas-cetip/consultas-externas-cetip-financiamentos/consultas-externas-cetip-financiamentos.component';
import { ConsultasExternasCetipInstituicaoComponent } from './components/mesa/consultas-externas/consultas-externas-cetip/consultas-externas-cetip-instituicao/consultas-externas-cetip-instituicao.component';
import { ConsultasExternasCetipBemComponent } from './components/mesa/consultas-externas/consultas-externas-cetip/consultas-externas-cetip-bem/consultas-externas-cetip-bem.component';
import { ConsultasExternasReceitaFederalComponent } from './components/mesa/consultas-externas/consultas-externas-receita-federal/consultas-externas-receita-federal.component';
import { ConsultasExternasReceitaFederalReceitaComponent } from './components/mesa/consultas-externas/consultas-externas-receita-federal/consultas-externas-receita-federal-receita/consultas-externas-receita-federal-receita.component';
import { ConsultasExternasReceitaFederalIrpfComponent } from './components/mesa/consultas-externas/consultas-externas-receita-federal/consultas-externas-receita-federal-irpf/consultas-externas-receita-federal-irpf.component';
import { ConsultasExternasReceitaFederalCreddComponent } from './components/mesa/consultas-externas/consultas-externas-receita-federal/consultas-externas-receita-federal-credd/consultas-externas-receita-federal-credd.component';
import { ConsultasExternasBureauComponent } from './components/mesa/consultas-externas/consultas-externas-bureau/consultas-externas-bureau.component';
import { ConsultasExternasBureauEmpresaComponent } from './components/mesa/consultas-externas/consultas-externas-bureau/consultas-externas-bureau-empresa/consultas-externas-bureau-empresa.component';
import { ConsultasExternasBureauParentescoComponent } from './components/mesa/consultas-externas/consultas-externas-bureau/consultas-externas-bureau-parentesco/consultas-externas-bureau-parentesco.component';
import { ConsultasExternasBureauProfissaoComponent } from './components/mesa/consultas-externas/consultas-externas-bureau/consultas-externas-bureau-profissao/consultas-externas-bureau-profissao.component';
import { ConsultasExternasBureauProfissaoEscolaridadeComponent } from './components/mesa/consultas-externas/consultas-externas-bureau/consultas-externas-bureau-profissao/escolaridade/consultas-externas-bureau-profissao-escolaridade.component';
import { ConsultasExternasBureauProfissaoCargoComponent } from './components/mesa/consultas-externas/consultas-externas-bureau/consultas-externas-bureau-profissao/cargo/consultas-externas-bureau-profissao-cargo.component';
import { ConsultasExternasBureauPropriedadeImovelComponent } from './components/mesa/consultas-externas/consultas-externas-bureau/consultas-externas-bureau-propriedade/imovel/consultas-externas-bureau-propriedade-imovel.component';
import { ConsultasExternasBureauPropriedadeVeiculoComponent } from './components/mesa/consultas-externas/consultas-externas-bureau/consultas-externas-bureau-propriedade/veiculo/consultas-externas-bureau-propriedade-veiculo.component';
import { ConsultasExternasBureauPropriedadeComponent } from './components/mesa/consultas-externas/consultas-externas-bureau/consultas-externas-bureau-propriedade/consultas-externas-bureau-propriedade.component';
import { ConsultasExternasBureauRendaFontePagadoraComponent } from './components/mesa/consultas-externas/consultas-externas-bureau/consultas-externas-bureau-renda/fonte-pagadora/consultas-externas-bureau-renda-fonte-pagadora.component';
import { ConsultasExternasBureauRendaFonteRendaComponent } from './components/mesa/consultas-externas/consultas-externas-bureau/consultas-externas-bureau-renda/fonte-renda/consultas-externas-bureau-renda-fonte-renda.component';
import { ConsultasExternasBureauRendaComponent } from './components/mesa/consultas-externas/consultas-externas-bureau/consultas-externas-bureau-renda/consultas-externas-bureau-renda.component';
import { ConsultasExternasBureauSimilaridadeComponent } from './components/mesa/consultas-externas/consultas-externas-bureau/consultas-externas-bureau-similaridade/consultas-externas-bureau-similaridade.component';
import { ConsultasExternasPortalComponent } from './components/mesa/consultas-externas/consultas-externas-portal/consultas-externas-portal.component';
import { ContatoComponent } from './components/mesa/contato/contato.component';
import { FilaPessoalPipe } from './components/acompanhamento/fila/filapessoal/filapessoal.pipe';
import { VisualizarPropostaComponent } from './components/mesa/cabecalho/visualizar-proposta/visualizar-proposta.component';
import { PerfilClienteCorrespondenciaComponent } from './components/mesa/perfil/perfil-cliente-correspondencia/perfil-cliente-correspondencia.component';
import { FilaTotalGeralComponent } from './components/acompanhamento/fila/fila-total-geral/fila-total-geral.component';
import { ConsultasExternasBacenFluxoComponent } from './components/mesa/consultas-externas/consultas-externas-bacen/fluxo/consultas-externas-bacen-fluxo.component';
import { ConsultasExternasBacenConsolidadoComponent } from './components/mesa/consultas-externas/consultas-externas-bacen/fluxo/consolidado/consultas-externas-bacen-consolidado.component';
import { ConsultasExternasBacenParcelaComponent } from './components/mesa/consultas-externas/consultas-externas-bacen/fluxo/parcela/consultas-externas-bacen-parcela.component';
import { ConsultasExternasBacenParcelaAVencerComponent } from './components/mesa/consultas-externas/consultas-externas-bacen/fluxo/parcela/avencer/consultas-externas-bacen-parcela-avencer.component';
import { ConsultasExternasBacenParcelaVencidoComponent } from './components/mesa/consultas-externas/consultas-externas-bacen/fluxo/parcela/vencido/consultas-externas-bacen-parcela-vencido.component';
import { ConsultasExternasBacenParcelaPrejuizoComponent } from './components/mesa/consultas-externas/consultas-externas-bacen/fluxo/parcela/prejuizo/consultas-externas-bacen-parcela-prejuizo.component';
import { CapturaObservacoesComponent } from './components/mesa/cabecalho/captura-observacoes/captura-observacoes.component';
import { ConsultasExternasBacenOperacaoComponent } from './components/mesa/consultas-externas/consultas-externas-bacen/fluxo/operacao/consultas-externas-bacen-operacao.component';
import { ConsultasExternasBacenHistoricoComponent } from './components/mesa/consultas-externas/consultas-externas-bacen/historico/consultas-externas-bacen-historico.component';
import { ConsultasExternasBacenModalidadeComponent } from './components/mesa/consultas-externas/consultas-externas-bacen/modalidade/consultas-externas-bacen-modalidade.component';
import { ConsultasExternasBacenModalidadeDataBaseComponent } from './components/mesa/consultas-externas/consultas-externas-bacen/modalidade/data-base/consultas-externas-bacen-modalidade-data-base.component';
import { ConsultasExternasBacenModalidadeEmprestimosComponent } from './components/mesa/consultas-externas/consultas-externas-bacen/modalidade/emprestimos/consultas-externas-bacen-modalidade-emprestimos.component';
import { ConsultasExternasBacenModalidadeFinanciamentos } from './components/mesa/consultas-externas/consultas-externas-bacen/modalidade/financiamentos/consultas-externas-bacen-modalidade-financiamentos.component';
import { ConsultasExternasBacenModalidadeOutrosCreditos } from './components/mesa/consultas-externas/consultas-externas-bacen/modalidade/outros-creditos/consultas-externas-bacen-modalidade-outros-creditos.component';
import { PropostaDecididaDetalheComponent } from './components/acompanhamento/fila/proposta-decidida-detalhe/proposta-decidida-detalhe.component';
import { FilaPropostaDecididaComponent } from './components/acompanhamento/fila/fila-proposta-decidida/fila-proposta-decidida.component';
import { ConsultasInternasResumoCadastroCCLComponent } from './components/mesa/consultas-internas/consultas-internas-ccl/consultas-internas-cadastro-ccl-resumo/consultas-internas-resumo-cadastro-ccl.component';
import { ConsultasInternasCCLComponent } from './components/mesa/consultas-internas/consultas-internas-ccl/consultas-internas-ccl.component';
import { ConsultasInternasCadastroCCLComponent } from './components/mesa/consultas-internas/consultas-internas-ccl/consultas-internas-cadastro-ccl/consultas-internas-cadastro-ccl.component';

@NgModule({
    declarations: [
        AppComponent,
        BarraFixaComparacaoComponent,
        AlertasExternosComponent,
        AlertaComponent,
        BarraFixaAvalistaComparacaoComponent,
        CompararPopOverComponent,
        AlertasInternosComponent,
        BarraFixaComponent,
        BarraFixaAvalistaComponent,
        BarraFixaConceitoComponent,
        BarraFixaConceitoComparacaoComponent,
        BarraFixaPerfilAvalistaComponent,
        BarraFixaPerfilAvalistaComparacaoComponent,
        BarraFixaPerfilAvalistaProfissionalComparacaoComponent,
        BarraFixaPerfilAvalistaProfissionalComponent,
        BarraFixaDadosConjugeComponent,
        BarraFixaDadosConjugeComparacaoComponent,
        BarraFixaDadosOperacaoComponent,
        BarraFixaDadosOperacaoComparacaoComponent,
        BarraFixaPerfilProfissionalComponent,
        BarraFixaPerfilClienteComponent,
        BarraFixaStatusComponent,
        BarraFixaStatusComparacaoComponent,
        CabecalhoComponent,
        CabecalhoAlertasComponent,
        CabecalhoStatusComponent,
        CapturaObservacoesComponent,
        CepCidadeComponent,
        CelularPipe,
        CepPipe,
        CpfPipe,
        CnpjPipe,
        CpfCnpjComponent,
        ConsultasExternasBacenModalidadeComponent,
        ConsultasExternasBacenModalidadeDataBaseComponent,
        ConsultasExternasBacenModalidadeEmprestimosComponent,
        ConsultasExternasBacenModalidadeFinanciamentos,
        ConsultasExternasBacenModalidadeOutrosCreditos,
        ConsultasExternasBureauComponent,
        ConsultasExternasBureauEmpresaComponent,
        ConsultasExternasBureauParentescoComponent,
        ConsultasExternasBureauProfissaoComponent,
        ConsultasExternasBureauProfissaoEscolaridadeComponent,
        ConsultasExternasBureauProfissaoCargoComponent,
        ConsultasExternasBureauPropriedadeComponent,
        ConsultasExternasBureauPropriedadeVeiculoComponent,
        ConsultasExternasBureauPropriedadeImovelComponent,
        ConsultasExternasBureauRendaComponent,
        ConsultasExternasBureauRendaFonteRendaComponent,
        ConsultasExternasBureauRendaFontePagadoraComponent,
        ConsultasExternasBureauSimilaridadeComponent,
        ConsultasExternasBacenFluxoComponent,
        ConsultasExternasComponent,
        ConsultasExternasBacenOperacaoComponent,
        ConsultasExternasBacenComponent,
        ConsultasExternasSerasaComponent,
        ConsultasExternasSerasaRestricoesComponent,
        ConsultasExternasSerasaTotalComponent,
        ConsultasExternasComprotComponent,
        ConsultasExternasConselhoRegionalComponent,
        ConsultasExternasSintegraComponent,
        ConsultasExternasRaisComponent,
        ConsultasExternasPortalComponent,
        ConsultasExternasCetipComponent,
        ConsultasExternasCetipFinanciamentosComponent,
        ConsultasExternasCetipInstituicaoComponent,
        ConsultasExternasReceitaFederalComponent,
        ConsultasExternasReceitaFederalIrpfComponent,
        ConsultasExternasCetipBemComponent,        
        ConsultasExternasReceitaFederalReceitaComponent,
        ConsultasExternasReceitaFederalCreddComponent,
        ConsultasExternasBacenHistoricoComponent,
        ConsultasInternasComponent,
        ConsultasInternasConsultasContratoTotalComponent,
        ConsultasInternasConsultasContratoDetalheComponent,
        ConsultasInternasRiscoOperacoesComponent,
        ConsultasInternasPosicaoInvestidorComponent,
        ConsultasInternasConsultasContratoComponent,
        ConsultasInternasPocsClientesComponent,
        ConsultasInternasCadastroCCLComponent,
        ConsultasInternasResumoCadastroCCLComponent,
        ConsultasInternasCCLComponent,
        ConsultasExternasBacenConsolidadoComponent,
        ConsultasExternasBacenParcelaComponent,
        ConsultasExternasBacenParcelaAVencerComponent,
        ConsultasExternasBacenParcelaVencidoComponent,
        ConsultasExternasBacenParcelaPrejuizoComponent,
        HeaderMesaComponent,
        HomeComponent,
        HistoricoAlertaComponent,
        TelefoneAlertaComponent,
        FilaComiteComponent,
        FilaComponent,
        FilaGeralComponent,
        FilaHeaderComponent,
        FilaPessoalComponent,
        FilaPessoalPropostaAcompanhamentoComponent,
        FilaGeralDetalheComponent,
        FilaTotalGeralComponent,
        FilaPropostaDecididaComponent,
        PropostaDecididaDetalheComponent,
        InfoAnaliseComponent,
        CabecalhoExtratoComponent,
        LogoComponent,
        MaskCpfCnpjDirective,        
        MenuComponent,
        MesaComponent,
        MesaParecerComponent,
        MesaParecerAgendarComponent,
        MesaParecerAprovarComponent,        
        MesaParecerEncaminharComponent,
        MesaParecerPendenciarComponent,
        MesaParecerRecusarComponent,
        ModalComponent,
        ModalAlertComponent,
        ModalConjugeComponent,
        ContatoComponent,
        OperacaoComponent,
        OperacaoCondicaoComponent,
        OperacaoFluxoParcelasComponent,
        OperacaoPerfilComponent,
        OperacaoRevendaComponent,
        OperacaoValorEntradaComponent,
        OperacaoValorVeiculoComponent,
        PerfilComponent,
        PerfilClienteComponent,
        BarraFixaPerfilClienteComparacaoComponent,
        PerfilDadosAvalistaComponent,
        PerfilDadosConjugeComponent,
        PerfilProfissionalComponent,
        BarraFixaPerfilProfissionalComparacaoComponent,
        PerfilProfissaoAvalistaComponent,
        PerfilProfissionalEdicaoComponent,
        PerfilProfissionalAvalistaEdicaoComponent,
        PerfilClienteCorrespondenciaComponent,
        SpinnerComponent,
        TelefonePipe,
        VisualizarImagemComponent,
        KzMaskDirective,
        VisualizarPropostaComponent,
        FilaPessoalPipe
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        CommonModule,
        HttpModule,
        InlineEditorModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'mesa/:idProposta', component: MesaComponent,
                children: [
                    { path: 'perfil/:idProposta', component: PerfilComponent },                
                    { path: 'operacao/:idProposta', component: OperacaoComponent }, 
                    { path: 'alerta/:idProposta', component: AlertaComponent },
                    { path: 'consultas-internas/:idProposta', component: AlertasInternosComponent },
                    { path: 'consultas-externas/:idProposta', component: ConsultasExternasComponent },
                    { path: 'contato/:idProposta', component: ContatoComponent },
                    { path: 'parecer/:idProposta', component: MesaParecerComponent },
                    { path: '', redirectTo: 'alerta', pathMatch: 'full' }
                ]},            
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'pt-BR'
        },
        BarraFixaService,
        PropostaService
    ],
})

export class AppModuleShared {

}
