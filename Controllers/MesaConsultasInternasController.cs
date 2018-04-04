using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasInternasService;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/ConsultasInternas")]

    public class ConsultasInternasController : Controller
    {
        private MesaConsultasInternasServiceClient service;

        public ConsultasInternasController()
        {
           this.service = ServiceFactory.Get<MesaConsultasInternasServiceClient>("MesaConsultasInternasService");
        }

        // api/ConsultasInternas/v1/GetConsultasInternas/LT9NB
        [Route("v1/GetConsultasInternas/{idProposta}")]
        [HttpGet]
         public async Task<IActionResult> GetConsultasInternas(string idProposta)
         {
             var model = await service.ListarConsultasInternasAsync(idProposta);
             return Ok(model);
         }


        // api/ConsultasInternas/v1/GetRiscosOperacoes/MFKXN
        [Route("v1/GetRiscosOperacoes/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetRiscosOperacoes(string idProposta)
        {
            var lista = await service.ListarRiscosOperacoesAsync(idProposta);
            return Ok(lista);
        }   

        // api/ConsultasInternas/v1/GetContratosCdcLeasing/LT9NB
        [Route("v1/GetContratosCdcLeasing/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetContratosCdcLeasing(string idProposta)
        {
            var lista = await service.ListarContratosCdcLeasingAsync(idProposta);
            return Ok(lista);
        }

        // api/ConsultasInternas/v1/GetDetalhesContratosCdcLeasing/LT9NB
        [Route("v1/GetDetalhesContratosCdcLeasing/{idContrato}")]
        [HttpGet]
        public async Task<IActionResult> GetDetalhesContratosCdcLeasing(string idContrato)
        {
            var lista = await service.ListarDetalhesContratosCdcLeasingAsync(idContrato);
            return Ok(lista);
        }

        // api/ConsultasInternas/v1/GetTotalContratosCdcLeasing/LT9NB
        [Route("v1/GetTotalContratosCdcLeasing/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetTotalContratosCdcLeasing(string idProposta)
        {
            var lista = await service.ObterTotalContratosCdcLeasingAsync(idProposta);
            return Ok(lista);
        }

        // api/ConsultasInternas/v1/GetInformacoesCCL/MFHS9
        [Route("v1/GetInformacoesCCL/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetInformacoesCCL(string idProposta)
        {
            var model = await service.ObterInformacoesCCLAsync(idProposta);
            return Ok(model);
        }

        // api/ConsultasInternas/v1/GetResumoCCL/MFHS9
        [Route("v1/GetResumoCCL/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetResumoCCL(string idProposta)
        {
            var model = await service.ObterResumoCCLAsync(idProposta);
            return Ok(model);
        }
 
        // api/ConsultasInternas/v1/GetPoc/MFHS9
        [Route("v1/GetPoc/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetPoc(string idProposta)
        {
            var model = await service.ObterPocAsync(idProposta);
            return Ok(model);
        }
     }
}