using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasCetipService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasCetip")]
    public class MesaConsultasExternasCetipController : Controller
    {
        private MesaConsultasExternasCetipServiceClient service;

        public MesaConsultasExternasCetipController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasCetipServiceClient>("MesaConsultasExternasCetipService");
        }

        // api/MesaConsultasExternasCetip/v1/GetCetip/MFK9U/1
        [HttpGet]
        [Route("v1/Getcetip/{idProposta}/{tipoPessoa}")]
        public async Task<IActionResult> GetCetip(string idProposta, TipoPessoaEnum tipoPessoa)
        {
            var model = await service.GetCetipAsync(idProposta, tipoPessoa);
            return Ok(model);
        }
    }
}