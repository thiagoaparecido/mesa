using System.IO;
using Microsoft.Extensions.Configuration;

namespace Mesa
{
    public static class ConfigManager
    {
        public static IConfigurationRoot Configuration { get; set; }

        static ConfigManager()
        {
            var builder = new ConfigurationBuilder()
                        .SetBasePath(Directory.GetCurrentDirectory())
                        .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true);

            Configuration = builder.Build();
        }
    }
}