﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ServicesReference.MesaOperacaoService
{
    using System.Runtime.Serialization;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="DadosOperacao", Namespace="http://schemas.datacontract.org/2004/07/SCDRetaguarda.Mesa.Interfaces.Model")]
    public partial class DadosOperacao : object, System.Runtime.Serialization.IExtensibleDataObject
    {
        
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        private int AnoFabricacaoField;
        
        private int AnoModeloField;
        
        private string CanalField;
        
        private string ClassificacaoField;
        
        private string CondicaoField;
        
        private string DigitadorField;
        
        private string FluxoField;
        
        private bool IsencaoFiscalField;
        
        private bool IsencaoTCField;
        
        private string MarcaField;
        
        private string ModeloField;
        
        private string OperadorField;
        
        private string OperadorTelefoneField;
        
        private string PlacaField;
        
        private string ProdutoField;
        
        private string QuilometrosField;
        
        private string RevendaField;
        
        private bool TaxiField;
        
        private string VersaoField;
        
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData
        {
            get
            {
                return this.extensionDataField;
            }
            set
            {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int AnoFabricacao
        {
            get
            {
                return this.AnoFabricacaoField;
            }
            set
            {
                this.AnoFabricacaoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int AnoModelo
        {
            get
            {
                return this.AnoModeloField;
            }
            set
            {
                this.AnoModeloField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Canal
        {
            get
            {
                return this.CanalField;
            }
            set
            {
                this.CanalField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Classificacao
        {
            get
            {
                return this.ClassificacaoField;
            }
            set
            {
                this.ClassificacaoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Condicao
        {
            get
            {
                return this.CondicaoField;
            }
            set
            {
                this.CondicaoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Digitador
        {
            get
            {
                return this.DigitadorField;
            }
            set
            {
                this.DigitadorField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Fluxo
        {
            get
            {
                return this.FluxoField;
            }
            set
            {
                this.FluxoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public bool IsencaoFiscal
        {
            get
            {
                return this.IsencaoFiscalField;
            }
            set
            {
                this.IsencaoFiscalField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public bool IsencaoTC
        {
            get
            {
                return this.IsencaoTCField;
            }
            set
            {
                this.IsencaoTCField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Marca
        {
            get
            {
                return this.MarcaField;
            }
            set
            {
                this.MarcaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Modelo
        {
            get
            {
                return this.ModeloField;
            }
            set
            {
                this.ModeloField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Operador
        {
            get
            {
                return this.OperadorField;
            }
            set
            {
                this.OperadorField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string OperadorTelefone
        {
            get
            {
                return this.OperadorTelefoneField;
            }
            set
            {
                this.OperadorTelefoneField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Placa
        {
            get
            {
                return this.PlacaField;
            }
            set
            {
                this.PlacaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Produto
        {
            get
            {
                return this.ProdutoField;
            }
            set
            {
                this.ProdutoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Quilometros
        {
            get
            {
                return this.QuilometrosField;
            }
            set
            {
                this.QuilometrosField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Revenda
        {
            get
            {
                return this.RevendaField;
            }
            set
            {
                this.RevendaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public bool Taxi
        {
            get
            {
                return this.TaxiField;
            }
            set
            {
                this.TaxiField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Versao
        {
            get
            {
                return this.VersaoField;
            }
            set
            {
                this.VersaoField = value;
            }
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="ValoresOperacao", Namespace="http://schemas.datacontract.org/2004/07/SCDRetaguarda.Mesa.Interfaces.Model")]
    public partial class ValoresOperacao : object, System.Runtime.Serialization.IExtensibleDataObject
    {
        
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        private long CarenciaField;
        
        private string FluxoField;
        
        private decimal PercentualClienteField;
        
        private decimal PercentualCreditoField;
        
        private decimal PercentualEntradaField;
        
        private decimal PercentualMolicarField;
        
        private decimal PerdaEsperadaField;
        
        private decimal PmtPercentualField;
        
        private decimal PmtValorField;
        
        private int PrazoField;
        
        private string ProdutoField;
        
        private decimal ValorClienteField;
        
        private decimal ValorCreditoField;
        
        private decimal ValorEntradaField;
        
        private decimal ValorMolicarField;
        
        private decimal ValorVeiculoField;
        
        private System.DateTime VencimentoField;
        
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData
        {
            get
            {
                return this.extensionDataField;
            }
            set
            {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public long Carencia
        {
            get
            {
                return this.CarenciaField;
            }
            set
            {
                this.CarenciaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Fluxo
        {
            get
            {
                return this.FluxoField;
            }
            set
            {
                this.FluxoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal PercentualCliente
        {
            get
            {
                return this.PercentualClienteField;
            }
            set
            {
                this.PercentualClienteField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal PercentualCredito
        {
            get
            {
                return this.PercentualCreditoField;
            }
            set
            {
                this.PercentualCreditoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal PercentualEntrada
        {
            get
            {
                return this.PercentualEntradaField;
            }
            set
            {
                this.PercentualEntradaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal PercentualMolicar
        {
            get
            {
                return this.PercentualMolicarField;
            }
            set
            {
                this.PercentualMolicarField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal PerdaEsperada
        {
            get
            {
                return this.PerdaEsperadaField;
            }
            set
            {
                this.PerdaEsperadaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal PmtPercentual
        {
            get
            {
                return this.PmtPercentualField;
            }
            set
            {
                this.PmtPercentualField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal PmtValor
        {
            get
            {
                return this.PmtValorField;
            }
            set
            {
                this.PmtValorField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int Prazo
        {
            get
            {
                return this.PrazoField;
            }
            set
            {
                this.PrazoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Produto
        {
            get
            {
                return this.ProdutoField;
            }
            set
            {
                this.ProdutoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal ValorCliente
        {
            get
            {
                return this.ValorClienteField;
            }
            set
            {
                this.ValorClienteField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal ValorCredito
        {
            get
            {
                return this.ValorCreditoField;
            }
            set
            {
                this.ValorCreditoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal ValorEntrada
        {
            get
            {
                return this.ValorEntradaField;
            }
            set
            {
                this.ValorEntradaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal ValorMolicar
        {
            get
            {
                return this.ValorMolicarField;
            }
            set
            {
                this.ValorMolicarField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal ValorVeiculo
        {
            get
            {
                return this.ValorVeiculoField;
            }
            set
            {
                this.ValorVeiculoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.DateTime Vencimento
        {
            get
            {
                return this.VencimentoField;
            }
            set
            {
                this.VencimentoField = value;
            }
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="Historico", Namespace="http://schemas.datacontract.org/2004/07/SCDRetaguarda.Mesa.Interfaces.Model")]
    public partial class Historico : object, System.Runtime.Serialization.IExtensibleDataObject
    {
        
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        private int AnoModeloField;
        
        private string CepField;
        
        private string EstadoCivilField;
        
        private string IdPropostaField;
        
        private string MarcaField;
        
        private string ModeloField;
        
        private string OcupacaoField;
        
        private decimal RendaField;
        
        private decimal RendaAdicionalField;
        
        private decimal RendaTotalField;
        
        private int ScoreField;
        
        private string VersaoField;
        
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData
        {
            get
            {
                return this.extensionDataField;
            }
            set
            {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int AnoModelo
        {
            get
            {
                return this.AnoModeloField;
            }
            set
            {
                this.AnoModeloField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Cep
        {
            get
            {
                return this.CepField;
            }
            set
            {
                this.CepField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string EstadoCivil
        {
            get
            {
                return this.EstadoCivilField;
            }
            set
            {
                this.EstadoCivilField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string IdProposta
        {
            get
            {
                return this.IdPropostaField;
            }
            set
            {
                this.IdPropostaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Marca
        {
            get
            {
                return this.MarcaField;
            }
            set
            {
                this.MarcaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Modelo
        {
            get
            {
                return this.ModeloField;
            }
            set
            {
                this.ModeloField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Ocupacao
        {
            get
            {
                return this.OcupacaoField;
            }
            set
            {
                this.OcupacaoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal Renda
        {
            get
            {
                return this.RendaField;
            }
            set
            {
                this.RendaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal RendaAdicional
        {
            get
            {
                return this.RendaAdicionalField;
            }
            set
            {
                this.RendaAdicionalField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal RendaTotal
        {
            get
            {
                return this.RendaTotalField;
            }
            set
            {
                this.RendaTotalField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int Score
        {
            get
            {
                return this.ScoreField;
            }
            set
            {
                this.ScoreField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Versao
        {
            get
            {
                return this.VersaoField;
            }
            set
            {
                this.VersaoField = value;
            }
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="FluxoParcela", Namespace="http://schemas.datacontract.org/2004/07/SCDRetaguarda.Mesa.Interfaces.Model")]
    public partial class FluxoParcela : object, System.Runtime.Serialization.IExtensibleDataObject
    {
        
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        private string BalaoField;
        
        private string ParcelaField;
        
        private decimal ValorParcelaField;
        
        private string VencimentoField;
        
        public System.Runtime.Serialization.ExtensionDataObject ExtensionData
        {
            get
            {
                return this.extensionDataField;
            }
            set
            {
                this.extensionDataField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Balao
        {
            get
            {
                return this.BalaoField;
            }
            set
            {
                this.BalaoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Parcela
        {
            get
            {
                return this.ParcelaField;
            }
            set
            {
                this.ParcelaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public decimal ValorParcela
        {
            get
            {
                return this.ValorParcelaField;
            }
            set
            {
                this.ValorParcelaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Vencimento
        {
            get
            {
                return this.VencimentoField;
            }
            set
            {
                this.VencimentoField = value;
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="ServicesReference.MesaOperacaoService.IMesaOperacaoService")]
    public interface IMesaOperacaoService
    {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaOperacaoService/ObterDadosOperacao", ReplyAction="http://tempuri.org/IMesaOperacaoService/ObterDadosOperacaoResponse")]
        ServicesReference.MesaOperacaoService.DadosOperacao ObterDadosOperacao(string idProposta);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaOperacaoService/ObterDadosOperacao", ReplyAction="http://tempuri.org/IMesaOperacaoService/ObterDadosOperacaoResponse")]
        System.Threading.Tasks.Task<ServicesReference.MesaOperacaoService.DadosOperacao> ObterDadosOperacaoAsync(string idProposta);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaOperacaoService/ObterValores", ReplyAction="http://tempuri.org/IMesaOperacaoService/ObterValoresResponse")]
        ServicesReference.MesaOperacaoService.ValoresOperacao ObterValores(string idProposta);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaOperacaoService/ObterValores", ReplyAction="http://tempuri.org/IMesaOperacaoService/ObterValoresResponse")]
        System.Threading.Tasks.Task<ServicesReference.MesaOperacaoService.ValoresOperacao> ObterValoresAsync(string idProposta);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaOperacaoService/ListarHistorico", ReplyAction="http://tempuri.org/IMesaOperacaoService/ListarHistoricoResponse")]
        ServicesReference.MesaOperacaoService.Historico[] ListarHistorico(long idCliente, string idProposta);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaOperacaoService/ListarHistorico", ReplyAction="http://tempuri.org/IMesaOperacaoService/ListarHistoricoResponse")]
        System.Threading.Tasks.Task<ServicesReference.MesaOperacaoService.Historico[]> ListarHistoricoAsync(long idCliente, string idProposta);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaOperacaoService/ListarFluxoParcela", ReplyAction="http://tempuri.org/IMesaOperacaoService/ListarFluxoParcelaResponse")]
        ServicesReference.MesaOperacaoService.FluxoParcela[] ListarFluxoParcela(string idProposta);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaOperacaoService/ListarFluxoParcela", ReplyAction="http://tempuri.org/IMesaOperacaoService/ListarFluxoParcelaResponse")]
        System.Threading.Tasks.Task<ServicesReference.MesaOperacaoService.FluxoParcela[]> ListarFluxoParcelaAsync(string idProposta);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaOperacaoService/AlterarValorCliente", ReplyAction="http://tempuri.org/IMesaOperacaoService/AlterarValorClienteResponse")]
        bool AlterarValorCliente(string idProposta, decimal valorCliente);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaOperacaoService/AlterarValorCliente", ReplyAction="http://tempuri.org/IMesaOperacaoService/AlterarValorClienteResponse")]
        System.Threading.Tasks.Task<bool> AlterarValorClienteAsync(string idProposta, decimal valorCliente);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IMesaOperacaoServiceChannel : ServicesReference.MesaOperacaoService.IMesaOperacaoService, System.ServiceModel.IClientChannel
    {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class MesaOperacaoServiceClient : System.ServiceModel.ClientBase<ServicesReference.MesaOperacaoService.IMesaOperacaoService>, ServicesReference.MesaOperacaoService.IMesaOperacaoService
    {
        
        public MesaOperacaoServiceClient()
        {
        }
        
        public MesaOperacaoServiceClient(string endpointConfigurationName) : 
                base(endpointConfigurationName)
        {
        }
        
        public MesaOperacaoServiceClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress)
        {
        }
        
        public MesaOperacaoServiceClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress)
        {
        }
        
        public MesaOperacaoServiceClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress)
        {
        }
        
        public ServicesReference.MesaOperacaoService.DadosOperacao ObterDadosOperacao(string idProposta)
        {
            return base.Channel.ObterDadosOperacao(idProposta);
        }
        
        public System.Threading.Tasks.Task<ServicesReference.MesaOperacaoService.DadosOperacao> ObterDadosOperacaoAsync(string idProposta)
        {
            return base.Channel.ObterDadosOperacaoAsync(idProposta);
        }
        
        public ServicesReference.MesaOperacaoService.ValoresOperacao ObterValores(string idProposta)
        {
            return base.Channel.ObterValores(idProposta);
        }
        
        public System.Threading.Tasks.Task<ServicesReference.MesaOperacaoService.ValoresOperacao> ObterValoresAsync(string idProposta)
        {
            return base.Channel.ObterValoresAsync(idProposta);
        }
        
        public ServicesReference.MesaOperacaoService.Historico[] ListarHistorico(long idCliente, string idProposta)
        {
            return base.Channel.ListarHistorico(idCliente, idProposta);
        }
        
        public System.Threading.Tasks.Task<ServicesReference.MesaOperacaoService.Historico[]> ListarHistoricoAsync(long idCliente, string idProposta)
        {
            return base.Channel.ListarHistoricoAsync(idCliente, idProposta);
        }
        
        public ServicesReference.MesaOperacaoService.FluxoParcela[] ListarFluxoParcela(string idProposta)
        {
            return base.Channel.ListarFluxoParcela(idProposta);
        }
        
        public System.Threading.Tasks.Task<ServicesReference.MesaOperacaoService.FluxoParcela[]> ListarFluxoParcelaAsync(string idProposta)
        {
            return base.Channel.ListarFluxoParcelaAsync(idProposta);
        }
        
        public bool AlterarValorCliente(string idProposta, decimal valorCliente)
        {
            return base.Channel.AlterarValorCliente(idProposta, valorCliente);
        }
        
        public System.Threading.Tasks.Task<bool> AlterarValorClienteAsync(string idProposta, decimal valorCliente)
        {
            return base.Channel.AlterarValorClienteAsync(idProposta, valorCliente);
        }
    }
}
