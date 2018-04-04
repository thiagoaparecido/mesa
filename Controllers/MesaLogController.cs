using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaLogService;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaLog")]
    public class MesaLogController : Controller
    {
        private MesaLogServiceClient service;

        public MesaLogController()
        {
            this.service = ServiceFactory.Get<MesaLogServiceClient>("MesaLogService");
        }

        // api/MesaLog/v1/GetHistorico/MF193/guid
        [Route("v1/GetHistorico/{idProposta}/{guid}")]
        [HttpGet]
        public async Task<IActionResult> GetHistorico(string idProposta, string guid)
        {
            var model = await service.ListarHistoricoAsync(idProposta, guid);
            return Ok(model);
        }
    }
}