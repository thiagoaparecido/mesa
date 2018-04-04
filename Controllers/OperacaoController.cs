using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaOperacaoService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/Operacao")]
    public class OperacaoController : Controller
    {
        private MesaOperacaoServiceClient service;

        public OperacaoController() {
            this.service = ServiceFactory.Get<MesaOperacaoServiceClient>("MesaOperacaoService");
        }

        // api/Operacao/v1/GetDados/MFK9U
        [Route("v1/GetDados/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetDados(string idProposta)
        {
            var model = await service.ObterDadosOperacaoAsync(idProposta);
            return Ok(model);
        }

        // api/Operacao/v1/GetValores/MFK9U
        [Route("v1/GetValores/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetValores(string idProposta)
        {
            var model = await service.ObterValoresAsync(idProposta);
            return Ok(model);
        }

        // api/Operacao/v1/GetHistorico/02318538310/MFK9U
        [Route("v1/GetHistorico/{idCliente}/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetHistorico(Int64 idCliente, string idProposta)
        {
            var lista = await service.ListarHistoricoAsync(idCliente, idProposta);
            return Ok(lista);
        }

        // api/Operacao/v1/GetFluxoParcela/MFK9U
        [Route("v1/GetFluxoParcela/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetFluxoParcela(string idProposta)
        {
            var lista = await service.ListarFluxoParcelaAsync(idProposta);
            return Ok(lista);
        }

        // api/Operacao/v1/AlterarVlrCliente/MFK9U/20.000,59
        [Route("v1/PutValorCliente/{idProposta}/{valorCliente}")]
        [HttpGet]
        public async Task<IActionResult> PutValorCliente(string idProposta, decimal valorCliente)
        {
            var lista = await service.AlterarValorClienteAsync(idProposta, valorCliente);
            return Ok(lista);
        }

    }
}