using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaAlertasExternosService;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaAlertasExternos")]
    public class MesaAlertasExternosController : Controller
    {
        private MesaAlertasExternosServiceClient service;

        public MesaAlertasExternosController() {
            this.service = ServiceFactory.Get<MesaAlertasExternosServiceClient>("MesaAlertasExternosService");
        }
        
        // api/MesaAlertasExternos/v1/GetAlertas/MFLTE
        [Route("v1/GetAlertas/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetAlertas(string idProposta)
        {            
            var model = await service.GetAlertasAsync(idProposta);
            return Ok(model);
        }

        [HttpPost("v1/SetResolucao/{idProposta}/{tipoPessoa}")]
        public async Task<IActionResult> SetResolucao([FromRoute] string idProposta, [FromRoute] int tipoPessoa, [FromBody] AlertaResolvido alerta)
        {            
            alerta.CodUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value;
            alerta.IdProposta = idProposta;
            alerta.CodCompromisso = tipoPessoa;
            var model = await service.SetResolucaoAsync(alerta);
            return Ok(model);
        }
    }
}