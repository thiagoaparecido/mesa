using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaUtilService;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaUtil")]
    public class MesaUtilController : Controller
    {
        private MesaUtilServiceClient service;

        public MesaUtilController() {
            this.service = ServiceFactory.Get<MesaUtilServiceClient>("MesaUtilService");
        }

        // api/MesaUtil/GetEndereco/040289030
        [Route("v1/GetEndereco/{cep}")]
        [HttpGet]
        public async Task<IActionResult> GetEndereco(string cep)
        {
            var model = await service.ObterEnderecoAsync(cep);
            return Ok(model);
        }

        // api/MesaUtil/GetHorasMesa/29012018
        [Route("v1/GetHorasMesa/{dtAgendamento}")]
        [HttpGet]
        public async Task<IActionResult> GetHorasMesa(string dtAgendamento)
        {
            DateTime data;
            if (DateTime.TryParse(dtAgendamento, out data)){
                var model = await service.ObterHorasMesaAsync(dtAgendamento);
                return Ok(model);
            }

            return null;
        }

        // api/MesaUtil/GetHoraAgendamento/10
        [Route("v1/GetHoraAgendamento/{tempo}")]
        [HttpGet]
        public async Task<IActionResult> GetHoraAgendamento(int tempo)
        {
            var model = await service.ObterHoraAgendamentoAsync(tempo);
            return Ok(model);
        }
    }
}