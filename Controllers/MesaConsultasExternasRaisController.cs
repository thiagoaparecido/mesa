using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasRaisService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasRais")]
    public class MesaConsultasExternasRaisController : Controller
    {
        private MesaConsultasExternasRaisServiceClient service;

        public MesaConsultasExternasRaisController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasRaisServiceClient>("MesaConsultasExternasRaisService");
        }

        // api/MesaConsultasExternasRais/v1/GetRais/MFK9U/1
        [HttpGet]
        [Route("v1/GetRais/{idProposta}/{tipoPessoa}")]
        public async Task<IActionResult> GetRais(string idProposta, TipoPessoaEnum tipoPessoa)
        {
            var model = await service.GetRaisAsync(idProposta, tipoPessoa);
            return Ok(model);
        }
    }
}