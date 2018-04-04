using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasConselhoRegionalService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasConselhoRegional")]
    public class MesaConsultasExternasConselhoRegionalController : Controller
    {
        private MesaConsultasExternasConselhoRegionalServiceClient service;

        public MesaConsultasExternasConselhoRegionalController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasConselhoRegionalServiceClient>("MesaConsultasExternasConselhoRegionalService");
        }

        // api/MesaConsultasExternasConselhoRegional/v1/GetConselhoRegional/MFK9U/1
        [HttpGet]
        [Route("v1/GetConselhoRegional/{idProposta}/{tipoPessoa}")]
        public async Task<IActionResult> GetConselhoRegional(string idProposta, TipoPessoaEnum tipoPessoa)
        {
            var model = await service.GetConselhoRegionalAsync(idProposta, tipoPessoa);
            return Ok(model);
        }
    }
}