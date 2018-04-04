﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ServicesReference.MesaConsultasExternasBureauEmpresasService
{
    using System.Runtime.Serialization;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="BureauEmpresa", Namespace="http://schemas.datacontract.org/2004/07/SCDRetaguarda.Mesa.Interfaces.Model.Consu" +
        "ltasExternas.Bureaus.Empresa")]
    public partial class BureauEmpresa : object, System.Runtime.Serialization.IExtensibleDataObject
    {
        
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        private string CnpjField;
        
        private string EmpresaField;
        
        private string FonteField;
        
        private string QsaField;
        
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
        public string Cnpj
        {
            get
            {
                return this.CnpjField;
            }
            set
            {
                this.CnpjField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Empresa
        {
            get
            {
                return this.EmpresaField;
            }
            set
            {
                this.EmpresaField = value;
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
        public string Qsa
        {
            get
            {
                return this.QsaField;
            }
            set
            {
                this.QsaField = value;
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="ServicesReference.MesaConsultasExternasBureauEmpresasService.IMesaConsultasExtern" +
        "asBureauEmpresasService")]
    public interface IMesaConsultasExternasBureauEmpresasService
    {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaConsultasExternasBureauEmpresasService/GetBureauEmpresas", ReplyAction="http://tempuri.org/IMesaConsultasExternasBureauEmpresasService/GetBureauEmpresasR" +
            "esponse")]
        ServicesReference.MesaConsultasExternasBureauEmpresasService.BureauEmpresa[] GetBureauEmpresas(string idProposta);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaConsultasExternasBureauEmpresasService/GetBureauEmpresas", ReplyAction="http://tempuri.org/IMesaConsultasExternasBureauEmpresasService/GetBureauEmpresasR" +
            "esponse")]
        System.Threading.Tasks.Task<ServicesReference.MesaConsultasExternasBureauEmpresasService.BureauEmpresa[]> GetBureauEmpresasAsync(string idProposta);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IMesaConsultasExternasBureauEmpresasServiceChannel : ServicesReference.MesaConsultasExternasBureauEmpresasService.IMesaConsultasExternasBureauEmpresasService, System.ServiceModel.IClientChannel
    {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class MesaConsultasExternasBureauEmpresasServiceClient : System.ServiceModel.ClientBase<ServicesReference.MesaConsultasExternasBureauEmpresasService.IMesaConsultasExternasBureauEmpresasService>, ServicesReference.MesaConsultasExternasBureauEmpresasService.IMesaConsultasExternasBureauEmpresasService
    {
        
        public MesaConsultasExternasBureauEmpresasServiceClient()
        {
        }
        
        public MesaConsultasExternasBureauEmpresasServiceClient(string endpointConfigurationName) : 
                base(endpointConfigurationName)
        {
        }
        
        public MesaConsultasExternasBureauEmpresasServiceClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress)
        {
        }
        
        public MesaConsultasExternasBureauEmpresasServiceClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress)
        {
        }
        
        public MesaConsultasExternasBureauEmpresasServiceClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress)
        {
        }
        
        public ServicesReference.MesaConsultasExternasBureauEmpresasService.BureauEmpresa[] GetBureauEmpresas(string idProposta)
        {
            return base.Channel.GetBureauEmpresas(idProposta);
        }
        
        public System.Threading.Tasks.Task<ServicesReference.MesaConsultasExternasBureauEmpresasService.BureauEmpresa[]> GetBureauEmpresasAsync(string idProposta)
        {
            return base.Channel.GetBureauEmpresasAsync(idProposta);
        }
    }
}