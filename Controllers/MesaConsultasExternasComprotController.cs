using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasComprotService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasComprot")]
    public class MesaConsultasExternasComprotController : Controller
    {
        private MesaConsultasExternasComprotServiceClient service;

        public MesaConsultasExternasComprotController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasComprotServiceClient>("MesaConsultasExternasComprotService");
        }

        // api/MesaConsultasExternasComprot/v1/GetComprot/MFK9U/1
        [HttpGet]
        [Route("v1/GetComprot/{idProposta}/{tipoPessoa}")]
        public async Task<IActionResult> GetComprot(string idProposta, TipoPessoaEnum tipoPessoa)
        {
            var model = await service.GetComprotAsync(idProposta, tipoPessoa);
            return Ok(model);
        }
    }
}