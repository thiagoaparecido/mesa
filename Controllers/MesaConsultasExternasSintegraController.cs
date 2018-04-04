using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasSintegraService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasSintegra")]
    public class MesaConsultasExternasSintegraController : Controller
    {
        private MesaConsultasExternasSintegraServiceClient service;

        public MesaConsultasExternasSintegraController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasSintegraServiceClient>("MesaConsultasExternasSintegraService");
        }

        // api/MesaConsultasExternasSintegra/v1/GetSintegra/MFK9U/1
        [HttpGet]
        [Route("v1/GetSintegra/{idProposta}/{tipoPessoa}")]
        public async Task<IActionResult> GetSintegra(string idProposta, TipoPessoaEnum tipoPessoa)
        {
            var model = await service.GetSintegraAsync(idProposta, tipoPessoa);
            return Ok(model);
        }
    }
}