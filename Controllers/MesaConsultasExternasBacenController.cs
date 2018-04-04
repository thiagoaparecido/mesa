using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasBacenService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasBacen")]
    public class MesaConsultasExternasBacenController : Controller
    {
        private MesaConsultasExternasBacenServiceClient service;

        public MesaConsultasExternasBacenController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasBacenServiceClient>("MesaConsultasExternasBacenService");
        }

        // api/MesaConsultasExternasBacen/v1/GetBacen/MFK9U/1/1
        [HttpGet]
        [Route("v1/GetBacen/{idProposta}/{tipoPessoa}/{situacaoPagamento}")]
        public async Task<IActionResult> GetBacen(string idProposta, TipoPessoaEnum tipoPessoa, SituacaoPagamento situacaoPagamento)
        {
            var model = await service.GetBacenAsync(idProposta, tipoPessoa, situacaoPagamento);
            return Ok(model);
        }
    }
}