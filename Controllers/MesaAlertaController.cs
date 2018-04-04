using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaAlertaService;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaAlerta")]
    public class MesaAlertaController : Controller
    {
        private MesaAlertaServiceClient service;

        public MesaAlertaController() {
            this.service = ServiceFactory.Get<MesaAlertaServiceClient>("MesaAlertaService");
        }
        
        // api/MesaAlerta/v1/GetComparacaoPropostas/LT9NB/LTF8D,LTF7E,LTEDH
        [Route("v1/GetComparacaoPropostas/{idProposta}/{propostas}")]
        [HttpGet]
        public async Task<IActionResult> GetComparacaoPropostas(string idProposta, string[] propostas)
        {
            var arrayPropostas = propostas[0].Split(',');
            var model = await service.CompararPropostasAsync(idProposta, arrayPropostas);
            return Ok(model);
        }

        // api/MesaAlerta/v1/GetHistoricoAlerta/LT9NB
        [Route("v1/GetHistoricoAlerta/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetHistoricoAlerta(string idProposta)
        {            
            var model = await service.ObterHistoricosAlertaAsync(idProposta);
            return Ok(model);
        }
    }
}