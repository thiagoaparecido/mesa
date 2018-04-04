using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasSerasaService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasSerasa")]
    public class MesaConsultasExternasSerasaController : Controller
    {
        private MesaConsultasExternasSerasaServiceClient service;

        public MesaConsultasExternasSerasaController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasSerasaServiceClient>("MesaConsultasExternasSerasaService");
        }

        // api/MesaConsultasExternasSerasa/v1/GetSerasa/MFK9U/1
        [HttpGet]
        [Route("v1/GetSerasa/{idProposta}/{tipoPessoa}")]
        public async Task<IActionResult> GetSerasa(string idProposta, TipoPessoaEnum tipoPessoa)
        {
            var model = await service.GetSerasaAsync(idProposta, tipoPessoa);
            return Ok(model);
        }
    }
}