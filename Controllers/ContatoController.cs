using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaContatoService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaContato")]
    public class MesaContatoController : Controller
    {
        private MesaContatoServiceClient service;

        public MesaContatoController()
        {
            this.service = ServiceFactory.Get<MesaContatoServiceClient>("MesaContatoService");
        }

        // api/MesaContato/v1/GetContato/MFK9U
        [HttpGet]
        [Route("v1/GetContato/{idProposta}")]
        public async Task<IActionResult> GetContato(string idProposta)
        {
            var model = await service.GetContatoAsync(idProposta);
            return Ok(model);
        }
    }
}