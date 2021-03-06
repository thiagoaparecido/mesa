﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ServicesReference.MesaConsultasExternasConselhoRegionalService
{
    using System.Runtime.Serialization;
    
    
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
    [System.Runtime.Serialization.DataContractAttribute(Name="ConselhoRegional", Namespace="http://schemas.datacontract.org/2004/07/SCDRetaguarda.Mesa.Interfaces.Model.Consu" +
        "ltasExternas.ConselhoRegional")]
    public partial class ConselhoRegional : object, System.Runtime.Serialization.IExtensibleDataObject
    {
        
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        private string ConselhoField;
        
        private string RegistroField;
        
        private string SituacaoField;
        
        private string UFField;
        
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
        public string Conselho
        {
            get
            {
                return this.ConselhoField;
            }
            set
            {
                this.ConselhoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Registro
        {
            get
            {
                return this.RegistroField;
            }
            set
            {
                this.RegistroField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Situacao
        {
            get
            {
                return this.SituacaoField;
            }
            set
            {
                this.SituacaoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string UF
        {
            get
            {
                return this.UFField;
            }
            set
            {
                this.UFField = value;
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="ServicesReference.MesaConsultasExternasConselhoRegionalService.IMesaConsultasExte" +
        "rnasConselhoRegionalService")]
    public interface IMesaConsultasExternasConselhoRegionalService
    {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaConsultasExternasConselhoRegionalService/GetConselhoRegio" +
            "nal", ReplyAction="http://tempuri.org/IMesaConsultasExternasConselhoRegionalService/GetConselhoRegio" +
            "nalResponse")]
        ServicesReference.MesaConsultasExternasConselhoRegionalService.ConselhoRegional[] GetConselhoRegional(string idProposta, ServicesReference.MesaConsultasExternasConselhoRegionalService.TipoPessoaEnum tipoPessoa);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaConsultasExternasConselhoRegionalService/GetConselhoRegio" +
            "nal", ReplyAction="http://tempuri.org/IMesaConsultasExternasConselhoRegionalService/GetConselhoRegio" +
            "nalResponse")]
        System.Threading.Tasks.Task<ServicesReference.MesaConsultasExternasConselhoRegionalService.ConselhoRegional[]> GetConselhoRegionalAsync(string idProposta, ServicesReference.MesaConsultasExternasConselhoRegionalService.TipoPessoaEnum tipoPessoa);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IMesaConsultasExternasConselhoRegionalServiceChannel : ServicesReference.MesaConsultasExternasConselhoRegionalService.IMesaConsultasExternasConselhoRegionalService, System.ServiceModel.IClientChannel
    {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class MesaConsultasExternasConselhoRegionalServiceClient : System.ServiceModel.ClientBase<ServicesReference.MesaConsultasExternasConselhoRegionalService.IMesaConsultasExternasConselhoRegionalService>, ServicesReference.MesaConsultasExternasConselhoRegionalService.IMesaConsultasExternasConselhoRegionalService
    {
        
        public MesaConsultasExternasConselhoRegionalServiceClient()
        {
        }
        
        public MesaConsultasExternasConselhoRegionalServiceClient(string endpointConfigurationName) : 
                base(endpointConfigurationName)
        {
        }
        
        public MesaConsultasExternasConselhoRegionalServiceClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress)
        {
        }
        
        public MesaConsultasExternasConselhoRegionalServiceClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress)
        {
        }
        
        public MesaConsultasExternasConselhoRegionalServiceClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress)
        {
        }
        
        public ServicesReference.MesaConsultasExternasConselhoRegionalService.ConselhoRegional[] GetConselhoRegional(string idProposta, ServicesReference.MesaConsultasExternasConselhoRegionalService.TipoPessoaEnum tipoPessoa)
        {
            return base.Channel.GetConselhoRegional(idProposta, tipoPessoa);
        }
        
        public System.Threading.Tasks.Task<ServicesReference.MesaConsultasExternasConselhoRegionalService.ConselhoRegional[]> GetConselhoRegionalAsync(string idProposta, ServicesReference.MesaConsultasExternasConselhoRegionalService.TipoPessoaEnum tipoPessoa)
        {
            return base.Channel.GetConselhoRegionalAsync(idProposta, tipoPessoa);
        }
    }
}
