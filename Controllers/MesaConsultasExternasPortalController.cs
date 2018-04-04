using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasPortalService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasPortal")]
    public class MesaConsultasExternasPortalController : Controller
    {
        private MesaConsultasExternasPortalServiceClient service;

        public MesaConsultasExternasPortalController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasPortalServiceClient>("MesaConsultasExternasPortalService");
        }

        // api/MesaConsultasExternasPortal/v1/GetPortal/MFK9U/1
        [HttpGet]
        [Route("v1/GetPortal/{idProposta}/{tipoPessoa}")]
        public async Task<IActionResult> GetPortal(string idProposta, TipoPessoaEnum tipoPessoa)
        {
            var model = await service.GetPortalAsync(idProposta, tipoPessoa);
            return Ok(model);
        }
    }
}