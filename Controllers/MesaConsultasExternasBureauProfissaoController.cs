using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasBureauProfissaoService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasBureauProfissao")]
    public class MesaConsultasExternasBureauProfissaoController : Controller
    {
        private MesaConsultasExternasBureauProfissaoServiceClient service;

        public MesaConsultasExternasBureauProfissaoController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasBureauProfissaoServiceClient>("MesaConsultasExternasBureauProfissaoService");
        }

        // api/MesaConsultasExternasBureauProfissao/v1/GetBureauProfissao/MFK9U
        [HttpGet]
        [Route("v1/GetBureauProfissao/{idProposta}")]
        public async Task<IActionResult> GetBureauProfissao(string idProposta)
        {
            var model = await service.GetBureauProfissaoAsync(idProposta);
            return Ok(model);
        }
    }
}