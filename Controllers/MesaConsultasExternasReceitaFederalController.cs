using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaConsultasExternasReceitaFederalService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaConsultasExternasReceitaFederal")]
    public class MesaConsultasExternasReceitaFederalController : Controller
    {
        private MesaConsultasExternasReceitaFederalServiceClient service;

        public MesaConsultasExternasReceitaFederalController()
        {
            this.service = ServiceFactory.Get<MesaConsultasExternasReceitaFederalServiceClient>("MesaConsultasExternasReceitaFederalService");
        }

        // api/MesaConsultasExternasReceitaFederal/v1/GetReceitaFederal/MFK9U/1
        [HttpGet]
        [Route("v1/GetReceitaFederal/{idProposta}/{tipoPessoa}")]
        public async Task<IActionResult> GetReceitaFederal(string idProposta, TipoPessoaEnum tipoPessoa)
        {
            var model = await service.GetReceitaFederalAsync(idProposta, tipoPessoa);
            return Ok(model);
        }
    }
}