using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasBureauRendaService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasBureauRenda")]
    public class MesaConsultasExternasBureauRendaController : Controller
    {
        private MesaConsultasExternasBureauRendaServiceClient service;

        public MesaConsultasExternasBureauRendaController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasBureauRendaServiceClient>("MesaConsultasExternasBureauRendaService");
        }

        // api/MesaConsultasExternasBureauRenda/v1/GetBureauRenda/MFK9U
        [HttpGet]
        [Route("v1/GetBureauRenda/{idProposta}")]
        public async Task<IActionResult> GetBureauRenda(string idProposta)
        {
            var model = await service.GetBureauRendaAsync(idProposta);
            return Ok(model);
        }
    }
}