﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ServicesReference.MesaAlertasExternosService
{
    using System.Runtime.Serialization;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="Alerta", Namespace="http://schemas.datacontract.org/2004/07/SCDRetaguarda.Mesa.Interfaces.Model.Alert" +
        "asExternos.Alertas")]
    public partial class Alerta : object, System.Runtime.Serialization.IExtensibleDataObject
    {
        
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        private ServicesReference.MesaAlertasExternosService.AlertaAviso[] AvisosField;
        
        private int IdField;
        
        private ServicesReference.MesaAlertasExternosService.TipoPessoaEnum TipoPessoaField;
        
        private string TituloField;
        
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
        public ServicesReference.MesaAlertasExternosService.AlertaAviso[] Avisos
        {
            get
            {
                return this.AvisosField;
            }
            set
            {
                this.AvisosField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int Id
        {
            get
            {
                return this.IdField;
            }
            set
            {
                this.IdField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public ServicesReference.MesaAlertasExternosService.TipoPessoaEnum TipoPessoa
        {
            get
            {
                return this.TipoPessoaField;
            }
            set
            {
                this.TipoPessoaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Titulo
        {
            get
            {
                return this.TituloField;
            }
            set
            {
                this.TituloField = value;
            }
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="AlertaAviso", Namespace="http://schemas.datacontract.org/2004/07/SCDRetaguarda.Mesa.Interfaces.Model.Alert" +
        "asExternos.Alertas")]
    public partial class AlertaAviso : object, System.Runtime.Serialization.IExtensibleDataObject
    {
        
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        private string DescricaoField;
        
        private int TipoDadoField;
        
        private string ValorField;
        
        private string ValorComplementarField;
        
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
        public string Descricao
        {
            get
            {
                return this.DescricaoField;
            }
            set
            {
                this.DescricaoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int TipoDado
        {
            get
            {
                return this.TipoDadoField;
            }
            set
            {
                this.TipoDadoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Valor
        {
            get
            {
                return this.ValorField;
            }
            set
            {
                this.ValorField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string ValorComplementar
        {
            get
            {
                return this.ValorComplementarField;
            }
            set
            {
                this.ValorComplementarField = value;
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="TipoPessoaEnum", Namespace="http://schemas.datacontract.org/2004/07/SCDRetaguarda.Mesa.Interfaces.Enum")]
    public enum TipoPessoaEnum : int
    {
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        VisaoGeral = 0,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Proponente = 1,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Avalista = 2,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Conjuge = 3,
        
        [System.Runtime.Serialization.EnumMemberAttribute()]
        Cnpj = 4,
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="AlertaResolvido", Namespace="http://schemas.datacontract.org/2004/07/SCDRetaguarda.Mesa.Interfaces.Model.Alert" +
        "asExternos.Alertas")]
    public partial class AlertaResolvido : object, System.Runtime.Serialization.IExtensibleDataObject
    {
        
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        private string AlertaField;
        
        private ServicesReference.MesaAlertasExternosService.AlertaAviso[] AvisosField;
        
        private int CodCompromissoField;
        
        private string CodUsuarioField;
        
        private string CompromissoField;
        
        private System.DateTime DtAlteracaoField;
        
        private int IdField;
        
        private string IdPropostaField;
        
        private string UsuarioField;
        
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
        public string Alerta
        {
            get
            {
                return this.AlertaField;
            }
            set
            {
                this.AlertaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public ServicesReference.MesaAlertasExternosService.AlertaAviso[] Avisos
        {
            get
            {
                return this.AvisosField;
            }
            set
            {
                this.AvisosField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int CodCompromisso
        {
            get
            {
                return this.CodCompromissoField;
            }
            set
            {
                this.CodCompromissoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string CodUsuario
        {
            get
            {
                return this.CodUsuarioField;
            }
            set
            {
                this.CodUsuarioField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Compromisso
        {
            get
            {
                return this.CompromissoField;
            }
            set
            {
                this.CompromissoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.DateTime DtAlteracao
        {
            get
            {
                return this.DtAlteracaoField;
            }
            set
            {
                this.DtAlteracaoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public int Id
        {
            get
            {
                return this.IdField;
            }
            set
            {
                this.IdField = value;
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
        public string Usuario
        {
            get
            {
                return this.UsuarioField;
            }
            set
            {
                this.UsuarioField = value;
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="ServicesReference.MesaAlertasExternosService.IMesaAlertasExternosService")]
    public interface IMesaAlertasExternosService
    {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaAlertasExternosService/GetAlertas", ReplyAction="http://tempuri.org/IMesaAlertasExternosService/GetAlertasResponse")]
        ServicesReference.MesaAlertasExternosService.Alerta[] GetAlertas(string idProposta);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaAlertasExternosService/GetAlertas", ReplyAction="http://tempuri.org/IMesaAlertasExternosService/GetAlertasResponse")]
        System.Threading.Tasks.Task<ServicesReference.MesaAlertasExternosService.Alerta[]> GetAlertasAsync(string idProposta);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaAlertasExternosService/SetResolucao", ReplyAction="http://tempuri.org/IMesaAlertasExternosService/SetResolucaoResponse")]
        bool SetResolucao(ServicesReference.MesaAlertasExternosService.AlertaResolvido alertaResolvido);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaAlertasExternosService/SetResolucao", ReplyAction="http://tempuri.org/IMesaAlertasExternosService/SetResolucaoResponse")]
        System.Threading.Tasks.Task<bool> SetResolucaoAsync(ServicesReference.MesaAlertasExternosService.AlertaResolvido alertaResolvido);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IMesaAlertasExternosServiceChannel : ServicesReference.MesaAlertasExternosService.IMesaAlertasExternosService, System.ServiceModel.IClientChannel
    {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class MesaAlertasExternosServiceClient : System.ServiceModel.ClientBase<ServicesReference.MesaAlertasExternosService.IMesaAlertasExternosService>, ServicesReference.MesaAlertasExternosService.IMesaAlertasExternosService
    {
        
        public MesaAlertasExternosServiceClient()
        {
        }
        
        public MesaAlertasExternosServiceClient(string endpointConfigurationName) : 
                base(endpointConfigurationName)
        {
        }
        
        public MesaAlertasExternosServiceClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress)
        {
        }
        
        public MesaAlertasExternosServiceClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress)
        {
        }
        
        public MesaAlertasExternosServiceClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress)
        {
        }
        
        public ServicesReference.MesaAlertasExternosService.Alerta[] GetAlertas(string idProposta)
        {
            return base.Channel.GetAlertas(idProposta);
        }
        
        public System.Threading.Tasks.Task<ServicesReference.MesaAlertasExternosService.Alerta[]> GetAlertasAsync(string idProposta)
        {
            return base.Channel.GetAlertasAsync(idProposta);
        }
        
        public bool SetResolucao(ServicesReference.MesaAlertasExternosService.AlertaResolvido alertaResolvido)
        {
            return base.Channel.SetResolucao(alertaResolvido);
        }
        
        public System.Threading.Tasks.Task<bool> SetResolucaoAsync(ServicesReference.MesaAlertasExternosService.AlertaResolvido alertaResolvido)
        {
            return base.Channel.SetResolucaoAsync(alertaResolvido);
        }
    }
}
