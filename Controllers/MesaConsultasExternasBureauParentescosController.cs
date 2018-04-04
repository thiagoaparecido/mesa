using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasBureauParentescosService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasBureauParentescos")]
    public class MesaConsultasExternasBureauParentescosController : Controller
    {
        private MesaConsultasExternasBureauParentescosServiceClient service;

        public MesaConsultasExternasBureauParentescosController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasBureauParentescosServiceClient>("MesaConsultasExternasBureauParentescosService");
        }

        // api/MesaConsultasExternasBureau/v1/GetBureauParentescos/MFK9U
        [HttpGet]
        [Route("v1/GetBureauParentescos/{idProposta}")]
        public async Task<IActionResult> GetBureauParentescos(string idProposta)
        {
            var model = await service.GetBureauParentescosAsync(idProposta);
            return Ok(model);
        }
   }
}