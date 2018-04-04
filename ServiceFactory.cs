using System.ServiceModel;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Options;

namespace Mesa
{
    public static class ServiceFactory
    {
        public static T Get<T>(string name)
            where T : class
        {
            // todo: talvez exista uma forma mais correta de acessar a configuração global da aplicação
            var configuration = ConfigManager.Configuration;

            var bindingConfigName = string.Format("services:client:{0}:binding", name.Trim());
            var addressConfigName = string.Format("services:client:{0}:address", name.Trim());

            var configSection = configuration.GetValue<string>(bindingConfigName);
            var address = new EndpointAddress(configuration.GetValue<string>(addressConfigName));

            var binding = new NetTcpBinding();
            new ConfigureFromConfigurationOptions<NetTcpBinding>(configuration.GetSection("services:bindings:" + configSection)).Configure(binding);

            return (T)System.Activator.CreateInstance(typeof(T), binding, address);
        }
    }
}