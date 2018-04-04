using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaBarraFixaService;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/BarraFixa")]
    public class BarraFixaController : Controller
    {
        private MesaBarraFixaServiceClient service;

        public BarraFixaController() {
            this.service = ServiceFactory.Get<MesaBarraFixaServiceClient>("MesaBarraFixaService");
        }
        
        // api/BarraFixa/v1/GetConjuge/MFK9U
        [Route("v1/GetConjuge/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetConjuge(string idProposta)
        {
            var model = await service.BuscarConjugeAsync(idProposta);
            return Ok(model);
        }

        // api/BarraFixa/v1/GetOperacao/MFK9U
        [Route("v1/GetOperacao/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetOperacao(string idProposta)
        {
            var model = await service.BuscarOperacaoAsync(idProposta);
            return Ok(model);
        }

        // api/BarraFixa/v1/GetPerfilCliente/MFK9U
        [Route("v1/GetPerfilCliente/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetPerfilCliente(string idProposta)
        {
            var model = await service.BuscarPerfilClienteAsync(idProposta);
            return Ok(model);
        }

        // api/BarraFixa/v1/GetPerfilProfissional/MFK9U
        [Route("v1/GetPerfilProfissional/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetPerfilProfissional(string idProposta)
        {
            var model = await service.BuscarPerfilProfissionalAsync(idProposta);
            return Ok(model);
        }

        // api/BarraFixa/v1/GetAvalistas/MFK9U
        [Route("v1/GetAvalistas/{idProposta}/{cpf?}")]                               
        [HttpGet]
        public async Task<IActionResult> GetAvalistas(string idProposta, string cpf = "")
        {            
            var lista = await service.ListarAvalistasAsync(idProposta, cpf);
            return Ok(lista);
        }       
    }
}