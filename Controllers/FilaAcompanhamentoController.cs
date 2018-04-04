using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaFilaService;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/Acompanhamento")]
    public class FilaAcompanhamentoController : Controller
    {
        private MesaFilasServiceClient service;

        public FilaAcompanhamentoController() {
            this.service = ServiceFactory.Get<MesaFilasServiceClient>("MesaFilaService");
        }

        // api/Acompanhamento/v1/GetFilaGeral/S/NM/12345678901
        [Route("v1/GetFilaGeral/{tipoLista}/{idCatalogo?}/{idCliente?}")]
        [HttpGet]
        public async Task<IActionResult> GetFilaGeral(string tipoLista, string idCatalago = "", string idCliente = "")
        {
            var idUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value; 
            var lista = await service.ObterFilaGeralAsync(idUsuario, tipoLista, idCatalago, idCliente, "", "");
            return Ok(lista);
        }      

        // api/Acompanhamento/v1/GetFilaDecidida/31069748854
        [Route("v1/GetFilaDecidida/{idCliente?}/{idProposta?}")]
        [HttpGet]
        public async Task<IActionResult> GetFilaDecidida(string idCliente = "", string idProposta = "")
        {            
            var lista = await service.ObterFilaDecididaAsync(idCliente, idProposta);
            return Ok(lista);
        }   
        
        // api/Acompanhamento/v1/GetFilaPessoal/NM
        [Route("v1/GetFilaPessoal/{idCatalogo?}")]
        [HttpGet]
        public async Task<IActionResult> GetFilaPessoal(string idCatalago = "")
        {
            var idUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value; 
            var lista = await service.ObterFilaPessoalAsync(idUsuario, idCatalago);
            return Ok(lista);
        }

        // api/Acompanhamento/v1/GetFilaComite/NM
        [Route("v1/GetFilaComite/{idCatalogo?}")]
        [HttpGet]
        public async Task<IActionResult> GetFilaComite(string idCatalago = "")
        {
            var idUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value; 
            var lista = await service.ObterFilaComiteAsync(idUsuario, idCatalago);
            return Ok(lista);
        }

        // api/Acompanhamento/v1/GetDetalheFilaGeral/1053/true/12345678901
        [Route("v1/GetDetalheFilaGeral/{idFila}/{captura:bool}/{idCliente?}")]
        [HttpGet]
        public async Task<IActionResult> GetDetalheFilaGeral(int idFila, bool captura, string idCliente = "")
        {
            var idUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value; 
            var lista = await service.DetalheFilaGeralAsync(idFila, idUsuario, captura, idCliente);
            return Ok(lista);
        }

        // api/Acompanhamento/v1/GetPropostaDecididaDetalhe/3/0/""/31069748854
        [Route("v1/GetPropostaDecididaDetalhe/{idDecisao}/{idFila}/{idProposta?}/{idCliente?}")]
        [HttpGet]
        public async Task<IActionResult> GetPropostaDecididaDetalhe(int idDecisao, int idFila, string idProposta = "", string idCliente = "")
        {            
            idProposta = idProposta.Replace("-","");
            var lista = await service.DetalheFilaDecididaAsync(idDecisao, idFila, idProposta, idCliente);
            return Ok(lista);
        }


        // api/Acompanhamento/v1/GetPropostaAcompanhamento/MFJUV
        [Route("v1/GetPropostaAcompanhamento/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetPropostaAcompanhamento(string idProposta)
        {
            var lista = await service.ListarAcompanhamentosAsync(idProposta);
            return Ok(lista);
        }  
    }
}