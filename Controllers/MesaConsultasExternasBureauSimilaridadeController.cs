using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasBureauSimilaridadeService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasBureauSimilaridade")]
    public class MesaConsultasExternasBureauSimilaridadeController : Controller
    {
        private MesaConsultasExternasBureauSimilaridadeServiceClient service;

        public MesaConsultasExternasBureauSimilaridadeController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasBureauSimilaridadeServiceClient>("MesaConsultasExternasBureauSimilaridadeService");
        }

        // api/MesaConsultasExternasBureauSimilaridade/v1/GetBureauSimilaridades/MFK9U/1
        [HttpGet]
        [Route("v1/GetBureauSimilaridades/{idProposta}/{tipoPessoa}")]
        public async Task<IActionResult> GetBureauSimilaridades(string idProposta, TipoPessoaEnum tipoPessoa)
        {
            var model = await service.GetBureauSimilaridadesAsync(idProposta, tipoPessoa);
            return Ok(model);
        }
    }
}