using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaBarraFixaService;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/Perfil")]
    public class PerfilController : Controller
    {
        private MesaBarraFixaServiceClient service;

        public PerfilController()
        {
            this.service = ServiceFactory.Get<MesaBarraFixaServiceClient>("MesaBarraFixaService");
        }

        // api/Perfil/v1/GetConjuge/MFK9U
        [Route("v1/GetConjuge/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetConjuge(string idProposta)
        {
            var model = await service.BuscarConjugeAsync(idProposta);
            return Ok(model);
        }

        // api/Perfil/v1/GetOperacao/MFK9U
        [Route("v1/GetOperacao/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetOperacao(string idProposta)
        {
            var model = await service.BuscarOperacaoAsync(idProposta);
            return Ok(model);
        }

        // api/Perfil/v1/GetPerfilCliente/MFK9U
        [Route("v1/GetPerfilCliente/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetPerfilCliente(string idProposta)
        {
            var model = await service.BuscarPerfilClienteAsync(idProposta);
            return Ok(model);
        }

        // api/Perfil/v1/GetPerfilProfissional/MFK9U
        [Route("v1/GetPerfilProfissional/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetPerfilProfissional(string idProposta)
        {
            var model = await service.BuscarPerfilProfissionalAsync(idProposta);
            return Ok(model);
        }

        // api/Perfil/v1/GetAvalistas/MFK9U
        [Route("v1/GetAvalistas/{idProposta}/{cpf?}")]
        [HttpGet]
        public async Task<IActionResult> GetAvalistas(string idProposta, string cpf = "")
        {
            var lista = await service.ListarAvalistasAsync(idProposta, cpf);
            return Ok(lista);
        }
         
        // api/Perfil/v1/GetPerfilClienteCorrespondencia/MFK9U
        [Route("v1/GetPerfilClienteCorrespondencia/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetPerfilClienteCorrespondencia(string idProposta)
        {
            var model = await service.BuscarPerfilEnderecoCorrespondenciaAsync(idProposta);
            return Ok(model);
        }

        // PUT: api/Perfil/v1/PutPerfilClienteCorrespondencia/MFK9U/guid
        [Route("v1/PutPerfilClienteCorrespondencia/{idProposta}/{guid}")]
        [HttpPut]
        public async Task<IActionResult> PutPerfilClienteCorrespondencia([FromRoute] string idProposta, [FromBody] PerfilEnderecoCorrespondencia perfilCorrespondencia, [FromRoute] string guid)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {   
                var idUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Name).FirstOrDefault().Value;              
                var resultado = await service.AtualizarPerfilEnderecoCorrespondenciaAsync(idProposta, perfilCorrespondencia, idUsuario, guid);
                return Ok(resultado);
            }
            catch(System.ServiceModel.FaultException ex){
                return Ok(ex.Message);
            }
            catch (System.Exception ex)
            {
                return Ok(ex.Message);
            }
        }

        // PUT: api/Perfil/v1/PutPerfilCliente/MFK9U/guid
        [Route("v1/PutPerfilCliente/{idProposta}/{guid}")]
        [HttpPut]
        public async Task<IActionResult> PutPerfilCliente([FromRoute] string idProposta, [FromBody] PerfilCliente perfilCliente, [FromRoute] string guid)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {   
                var idUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Name).FirstOrDefault().Value;              
                var resultado = await service.AtualizarPerfilClienteAsync(idProposta, perfilCliente, idUsuario, guid);
                return Ok(resultado);
            }
            catch(System.ServiceModel.FaultException ex){
                return Ok(ex.Message);
            }
            catch (System.Exception ex)
            {
                return Ok(ex.Message);
            }
        }

        // PUT: api/Perfil/v1/PutPerfilProfissional/MFK9U/guid
        [Route("v1/PutPerfilProfissional/{idProposta}/{guid}")]
        [HttpPut]
        public async Task<IActionResult> PutPerfilProfissional([FromRoute] string idProposta, [FromBody] PerfilProfissional perfilProfissional, [FromRoute] string guid)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var idUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Name).FirstOrDefault().Value; 
                var resultado = await service.AtualizarPerfilProfissionalAsync(idProposta, perfilProfissional, idUsuario, guid);
                return Ok(resultado);
            }
            catch(System.ServiceModel.FaultException ex){
                return Ok(ex.Message);
            }
            catch (System.Exception ex)
            {
                return Ok(ex.Message);
            }
        }

        // PUT: api/Perfil/v1/PutPerfilConjuge/MFK9U/guid
        [Route("v1/PutPerfilConjuge/{idProposta}/{guid}")]
        [HttpPut]
        public async Task<IActionResult> PutPerfilConjuge([FromRoute] string idProposta, [FromBody] Conjuge conjuge, [FromRoute] string guid)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var idUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Name).FirstOrDefault().Value; 
                var resultado = await service.AtualizarPerfilConjugeAsync(idProposta, conjuge, idUsuario, guid);
                return Ok(resultado);
            }
            catch(System.ServiceModel.FaultException ex){
                return Ok(ex.Message);
            }
            catch (System.Exception ex)
            {
                return Ok(ex.Message);
            }
        }

        // PUT: api/Perfil/v1/PutPerfilAvalista/MFK9U
        [Route("v1/PutPerfilAvalista/{idProposta}/{guid}")]
        [HttpPut]
        public async Task<IActionResult> PutPerfilAvalista([FromRoute] string idProposta, [FromBody] Avalista avalista, [FromRoute] string guid)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try 
            {
                var idUsuario =  HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Name).FirstOrDefault().Value;
                var resultado = await service.AtualizarPerfilAvalistaAsync(idProposta, avalista, idUsuario, guid);
                return Ok(resultado);
            }
            catch(System.ServiceModel.FaultException ex){
                return Ok(ex.Message);
            }
            catch (System.Exception ex)
            {
                return Ok(ex.Message);
            }
        }

        // api/Perfil/v1/GetPerfilProfissionalObrigatorio/1
        [Route("v1/GetPerfilProfissionalObrigatorio/{idOcupacao}")]
        [HttpGet]
        public async Task<IActionResult> GetPerfilProfissionalObrigatorio(int idOcupacao)
        {
            var lista = await service.PerfilProfissionalCamposObrigatoriosAsync(idOcupacao);
            return Ok(lista);
        }
    }
}