using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaUsuarioService;
using System.Security.Claims;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaUsuario")]
    public class MesaUsuarioController: Controller
    {
        private MesaUsuarioServiceClient service;

        public MesaUsuarioController(){
            this.service = ServiceFactory.Get<MesaUsuarioServiceClient>("MesaUsuarioService");
        }

        // api/MesaUsuario/v1/GetUsuario
        [Route("v1/GetUsuario")]
        [HttpGet]
        public async Task<IActionResult> GetUsuario()
        {
            var idUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value;    
            var usuario = await service.ObterUsuarioAsync(idUsuario);
            return Ok(usuario);
        }
    }
}