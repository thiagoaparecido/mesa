﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ServicesReference.MesaConsultasExternasBureauRendaService
{
    using System.Runtime.Serialization;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="BureauRenda", Namespace="http://schemas.datacontract.org/2004/07/SCDRetaguarda.Mesa.Interfaces.Model.Consu" +
        "ltasExternas.Bureaus.Renda")]
    public partial class BureauRenda : object, System.Runtime.Serialization.IExtensibleDataObject
    {
        
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        private ServicesReference.MesaConsultasExternasBureauRendaService.BureauFontePagadora[] FontePagadoraField;
        
        private ServicesReference.MesaConsultasExternasBureauRendaService.BureauFonteRenda[] FonteRendaField;
        
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
        public ServicesReference.MesaConsultasExternasBureauRendaService.BureauFontePagadora[] FontePagadora
        {
            get
            {
                return this.FontePagadoraField;
            }
            set
            {
                this.FontePagadoraField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public ServicesReference.MesaConsultasExternasBureauRendaService.BureauFonteRenda[] FonteRenda
        {
            get
            {
                return this.FonteRendaField;
            }
            set
            {
                this.FonteRendaField = value;
            }
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="BureauFontePagadora", Namespace="http://schemas.datacontract.org/2004/07/SCDRetaguarda.Mesa.Interfaces.Model.Consu" +
        "ltasExternas.Bureaus.Renda")]
    public partial class BureauFontePagadora : object, System.Runtime.Serialization.IExtensibleDataObject
    {
        
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        private string FonteField;
        
        private string FontePagadoraField;
        
        private System.Nullable<System.DateTime> ReferenciaField;
        
        private decimal RendaField;
        
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
        public string Fonte
        {
            get
            {
                return this.FonteField;
            }
            set
            {
                this.FonteField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string FontePagadora
        {
            get
            {
                return this.FontePagadoraField;
            }
            set
            {
                this.FontePagadoraField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public System.Nullable<System.DateTime> Referencia
        {
            get
            {
                return this.ReferenciaField;
            }
            set
            {
                this.ReferenciaField = value;
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
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="BureauFonteRenda", Namespace="http://schemas.datacontract.org/2004/07/SCDRetaguarda.Mesa.Interfaces.Model.Consu" +
        "ltasExternas.Bureaus.Renda")]
    public partial class BureauFonteRenda : object, System.Runtime.Serialization.IExtensibleDataObject
    {
        
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        private string FaixaRendaField;
        
        private string FonteField;
        
        private decimal RendaField;
        
        private decimal VariacaoField;
        
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
        public string FaixaRenda
        {
            get
            {
                return this.FaixaRendaField;
            }
            set
            {
                this.FaixaRendaField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Fonte
        {
            get
            {
                return this.FonteField;
            }
            set
            {
                this.FonteField = value;
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
        public decimal Variacao
        {
            get
            {
                return this.VariacaoField;
            }
            set
            {
                this.VariacaoField = value;
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="ServicesReference.MesaConsultasExternasBureauRendaService.IMesaConsultasExternasB" +
        "ureauRendaService")]
    public interface IMesaConsultasExternasBureauRendaService
    {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaConsultasExternasBureauRendaService/GetBureauRenda", ReplyAction="http://tempuri.org/IMesaConsultasExternasBureauRendaService/GetBureauRendaRespons" +
            "e")]
        ServicesReference.MesaConsultasExternasBureauRendaService.BureauRenda GetBureauRenda(string idProposta);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaConsultasExternasBureauRendaService/GetBureauRenda", ReplyAction="http://tempuri.org/IMesaConsultasExternasBureauRendaService/GetBureauRendaRespons" +
            "e")]
        System.Threading.Tasks.Task<ServicesReference.MesaConsultasExternasBureauRendaService.BureauRenda> GetBureauRendaAsync(string idProposta);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IMesaConsultasExternasBureauRendaServiceChannel : ServicesReference.MesaConsultasExternasBureauRendaService.IMesaConsultasExternasBureauRendaService, System.ServiceModel.IClientChannel
    {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class MesaConsultasExternasBureauRendaServiceClient : System.ServiceModel.ClientBase<ServicesReference.MesaConsultasExternasBureauRendaService.IMesaConsultasExternasBureauRendaService>, ServicesReference.MesaConsultasExternasBureauRendaService.IMesaConsultasExternasBureauRendaService
    {
        
        public MesaConsultasExternasBureauRendaServiceClient()
        {
        }
        
        public MesaConsultasExternasBureauRendaServiceClient(string endpointConfigurationName) : 
                base(endpointConfigurationName)
        {
        }
        
        public MesaConsultasExternasBureauRendaServiceClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress)
        {
        }
        
        public MesaConsultasExternasBureauRendaServiceClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress)
        {
        }
        
        public MesaConsultasExternasBureauRendaServiceClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress)
        {
        }
        
        public ServicesReference.MesaConsultasExternasBureauRendaService.BureauRenda GetBureauRenda(string idProposta)
        {
            return base.Channel.GetBureauRenda(idProposta);
        }
        
        public System.Threading.Tasks.Task<ServicesReference.MesaConsultasExternasBureauRendaService.BureauRenda> GetBureauRendaAsync(string idProposta)
        {
            return base.Channel.GetBureauRendaAsync(idProposta);
        }
    }
}
