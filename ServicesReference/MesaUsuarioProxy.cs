﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace ServicesReference.MesaUsuarioService
{
    using System.Runtime.Serialization;
    
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Runtime.Serialization", "4.0.0.0")]
    [System.Runtime.Serialization.DataContractAttribute(Name="MesaUsuario", Namespace="http://schemas.datacontract.org/2004/07/SCDRetaguarda.Mesa.Interfaces.Model")]
    public partial class MesaUsuario : object, System.Runtime.Serialization.IExtensibleDataObject
    {
        
        private System.Runtime.Serialization.ExtensionDataObject extensionDataField;
        
        private string CodigoField;
        
        private string NomeField;
        
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
        public string Codigo
        {
            get
            {
                return this.CodigoField;
            }
            set
            {
                this.CodigoField = value;
            }
        }
        
        [System.Runtime.Serialization.DataMemberAttribute()]
        public string Nome
        {
            get
            {
                return this.NomeField;
            }
            set
            {
                this.NomeField = value;
            }
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(ConfigurationName="ServicesReference.MesaUsuarioService.IMesaUsuarioService")]
    public interface IMesaUsuarioService
    {
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaUsuarioService/ObterUsuario", ReplyAction="http://tempuri.org/IMesaUsuarioService/ObterUsuarioResponse")]
        ServicesReference.MesaUsuarioService.MesaUsuario ObterUsuario(string codigo);
        
        [System.ServiceModel.OperationContractAttribute(Action="http://tempuri.org/IMesaUsuarioService/ObterUsuario", ReplyAction="http://tempuri.org/IMesaUsuarioService/ObterUsuarioResponse")]
        System.Threading.Tasks.Task<ServicesReference.MesaUsuarioService.MesaUsuario> ObterUsuarioAsync(string codigo);
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public interface IMesaUsuarioServiceChannel : ServicesReference.MesaUsuarioService.IMesaUsuarioService, System.ServiceModel.IClientChannel
    {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "4.0.0.0")]
    public partial class MesaUsuarioServiceClient : System.ServiceModel.ClientBase<ServicesReference.MesaUsuarioService.IMesaUsuarioService>, ServicesReference.MesaUsuarioService.IMesaUsuarioService
    {
        
        public MesaUsuarioServiceClient()
        {
        }
        
        public MesaUsuarioServiceClient(string endpointConfigurationName) : 
                base(endpointConfigurationName)
        {
        }
        
        public MesaUsuarioServiceClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress)
        {
        }
        
        public MesaUsuarioServiceClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress)
        {
        }
        
        public MesaUsuarioServiceClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress)
        {
        }
        
        public ServicesReference.MesaUsuarioService.MesaUsuario ObterUsuario(string codigo)
        {
            return base.Channel.ObterUsuario(codigo);
        }
        
        public System.Threading.Tasks.Task<ServicesReference.MesaUsuarioService.MesaUsuario> ObterUsuarioAsync(string codigo)
        {
            return base.Channel.ObterUsuarioAsync(codigo);
        }
    }
}
