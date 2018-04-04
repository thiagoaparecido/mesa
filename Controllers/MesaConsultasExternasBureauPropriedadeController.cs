using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasBureauPropriedadeService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasBureauPropriedade")]
    public class MesaConsultasExternasBureauPropriedadeController : Controller
    {
        private MesaConsultasExternasBureauPropriedadeServiceClient service;

        public MesaConsultasExternasBureauPropriedadeController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasBureauPropriedadeServiceClient>("MesaConsultasExternasBureauPropriedadeService");
        }

        // api/MesaConsultasExternasBureau/v1/GetBureauPropriedade/MFK9U
        [HttpGet]
        [Route("v1/GetBureauPropriedade/{idProposta}")]
        public async Task<IActionResult> GetBureauPropriedade(string idProposta)
        {
            var model = await service.GetBureauPropriedadeAsync(idProposta);
            return Ok(model);
        }
   }
}