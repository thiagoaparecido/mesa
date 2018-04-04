using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasBureauEmpresasService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasBureauEmpresas")]
    public class MesaConsultasExternasBureauEmpresasController : Controller
    {
        private MesaConsultasExternasBureauEmpresasServiceClient service;

        public MesaConsultasExternasBureauEmpresasController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasBureauEmpresasServiceClient>("MesaConsultasExternasBureauEmpresasService");
        }

        // api/MesaConsultasExternasBureauEmpresas/v1/GetBureauEmpresas/MFK9U
        [HttpGet]
        [Route("v1/GetBureauEmpresas/{idProposta}")]
        public async Task<IActionResult> GetBureauEmpresas(string idProposta)
        {
            var model = await service.GetBureauEmpresasAsync(idProposta);
            return Ok(model);
        }
    }
}