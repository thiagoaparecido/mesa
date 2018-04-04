using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaPropostaService;
using System;
using Microsoft.AspNetCore.Authorization;

namespace Mesa.Controllers
{
    [Authorize]
    [Route("api/MesaProposta")]
    public class MesaPropostaController : Controller
    {
        private MesaPropostaServiceClient service;

        public MesaPropostaController()
        {
            this.service = ServiceFactory.Get<MesaPropostaServiceClient>("MesaPropostaService");
        }

        // api/MesaProposta/v1/GetAlertasProposta/MFK9U
        [Route("v1/GetAlertasProposta/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetAlertasProposta(string idProposta)
        {
            var model = await service.ObterAlertasPropostaAsync(idProposta);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetConceitoProposta/MFK9U
        [Route("v1/GetConceitoProposta/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetConceitoProposta(string idProposta)
        {
            var model = await service.ObterConceitoPropostaAsync(idProposta);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetStatusProposta/MFK9U
        [Route("v1/GetStatusProposta/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetStatusProposta(string idProposta)
        {
            var model = await service.ObterStatusPropostaAsync(idProposta);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetImagemProposta/MFK9U/1
        [Route("v1/GetImagemProposta/{idProposta}/{idModulo}")]
        [HttpGet]
        public async Task<IActionResult> GetImagemProposta(string idProposta, int idModulo)
        {
            var model = await service.ObterImagemPropostaAsync(idProposta, idModulo);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetFaixaPatrimonio
        [Route("v1/GetFaixaPatrimonio")]
        [HttpGet]
        public async Task<IActionResult> GetFaixaPatrimonio()
        {
            var model = await service.ListarFaixasPatrimonioAsync();
            return Ok(model);
        }

        // api/MesaProposta/v1/GetEstadoCivil/MFK9U
        [Route("v1/GetEstadoCivil/{idProposta?}")]
        [HttpGet]
        public async Task<IActionResult> GetEstadoCivil(string idProposta = "")
        {
            var model = await service.ListarEstadoCivilAsync(idProposta);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetSexo
        [Route("v1/GetSexo/{adicionarNaoIdentificado}")]
        [HttpGet]
        public async Task<IActionResult> GetSexo(bool adicionarNaoIdentificado)
        {
            var model = await service.ListarSexoAsync(adicionarNaoIdentificado);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetNaturezaOcupacao/MFK9U
        [Route("v1/GetNaturezaOcupacao/{idProposta?}")]
        [HttpGet]
        public async Task<IActionResult> GetNaturezaOcupacao(string idProposta = "")
        {
            var model = await service.ListarNaturezaOcupacaoAsync(idProposta);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetProfissao/6
        [Route("v1/GetProfissao/{idNatOcupacao}")]
        [HttpGet]
        public async Task<IActionResult> GetProfissao(int idNatOcupacao)
        {
            var model = await service.ListarProfissoesAsync(idNatOcupacao);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetNacionalidade/
        [Route("v1/GetNacionalidade/")]
        [HttpGet]
        public async Task<IActionResult> GetNacionalidade()
        {
            var model = await service.ListarNacionalidadesAsync();
            return Ok(model);
        }

        // api/MesaProposta/v1/GetEstados/
        [Route("v1/GetEstados/")]
        [HttpGet]
        public async Task<IActionResult> GetEstados()
        {
            var model = await service.ListarEstadosAsync();
            return Ok(model);
        }

        // api/MesaProposta/v1/GetCargos/0/0
        [Route("v1/GetCargos/{idOcupacao}/{idProfissao}")]
        [HttpGet]
        public async Task<IActionResult> GetCargos(int idOcupacao, int idProfissao)
        {
            var model = await service.ListarCargosAsync(idOcupacao, idProfissao);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetParecerAcoes
        [Route("v1/GetParecerAcoes/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetParecerAcoes(string idProposta)
        {
            var model = await service.ListarParecerAcaoAsync(idProposta);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetParecerMotivos
        [Route("v1/GetParecerMotivos/{idAcao}")]
        [HttpGet]
        public async Task<IActionResult> GetParecerMotivos(int idAcao)
        {
            var model = await service.ListarParecerMotivoAsync(idAcao);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetParecerMotivosEncaminhar
        [Route("v1/GetParecerMotivosEncaminhar/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetParecerMotivosEncaminhar(string idProposta)
        {
            var codUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value;
            var model = await service.ListarParecerMotivoEncaminharAsync(idProposta, codUsuario);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetParecerPendencias/MFKK3
        [Route("v1/GetParecerPendencias/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetParecerPendencias(string idProposta)
        {
            var model = await service.ListarParecerPendenciaAsync(idProposta);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetParecerPrioridades
        [Route("v1/GetParecerPrioridades")]
        [HttpGet]
        public async Task<IActionResult> GetParecerPrioridades()
        {
            var model = await service.ListarParecerPrioridadesAsync();
            return Ok(model);
        }

        // api/MesaProposta/v1/GetParecerUsuario/
        [Route("v1/GetParecerUsuario/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetParecerUsuario(string idProposta)
        {
            var model = await service.ListarParecerUsuarioAsync(new ParecerUsuario{
                IdProposta = idProposta,
                CodUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value
            });
            return Ok(model);
        }

        // api/MesaProposta/v1/GetParecerComite/
        [Route("v1/GetParecerComite/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetParecerComite(string idProposta)
        {
            var model = await service.ListarParecerComiteAsync(new ParecerComite{
                IdProposta = idProposta,
                CodUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value
            });
            return Ok(model);
        }

        // api/MesaProposta/v1/GetParecerUsuarioRemetente/
        [Route("v1/GetParecerUsuarioRemetente/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetParecerUsuarioRemetente(string idProposta)
        {
            var model = await service.ListarParecerUsuarioRemetenteAsync(new ParecerUsuario{
                IdProposta = idProposta,
                CodUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value
            });
            return Ok(model);
        }

        // api/MesaProposta/v1/GetParecerUsuarioAlcada/
        [Route("v1/GetParecerUsuarioAlcada/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetParecerUsuarioAlcada(string idProposta)
        {
            var model = await service.ListarParecerUsuarioAlcadaAsync(new ParecerUsuario{
                IdProposta = idProposta,
                CodUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value
            });
            return Ok(model);
        }

        // api/MesaProposta/v1/PostRecalcular
        [Route("v1/PostRecalcular")]
        [HttpPost]
        public async Task<IActionResult> PostRecalcular([FromBody] Recalcular recalcular)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (string.IsNullOrEmpty(recalcular.IdProposta))
            {
                return BadRequest(ModelState);
            }

            try
            {
                var codUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value;
                var resultado = await service.RecalcularAsync(recalcular, codUsuario);
                return Ok(resultado);
            }
            catch (System.ServiceModel.FaultException ex)
            {
                return Ok(ex.Message);
            }
            catch (System.Exception ex)
            {
                return Ok(ex.Message);
            }
        }

        // api/MesaProposta/v1/PostPendenciar
        [Route("v1/PostPendenciar")]
        [HttpPost]
        public async Task<IActionResult> PostPendenciar([FromBody] ParecerPendenciar parecer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var codUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value;
                parecer.CodUsuario = codUsuario;
                var resultado = await service.ParecerPendenciarAsync(parecer);
                return Ok(resultado);
            }
            catch (System.ServiceModel.FaultException ex)
            {
                return Ok(ex.Message);
            }
            catch (System.Exception ex)
            {
                return Ok(ex.Message);
            }
        }

        // api/MesaProposta/v1/PostRecusar
        [Route("v1/PostRecusar")]
        [HttpPost]
        public async Task<IActionResult> PostRecusar([FromBody] ParecerRecusar parecer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var codUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value;
                parecer.CodUsuario = codUsuario;
                var resultado = await service.ParecerRecusarAsync(parecer);
                return Ok(resultado);
            }
            catch (System.ServiceModel.FaultException ex)
            {
                return Ok(ex.Message);
            }
            catch (System.Exception ex)
            {
                return Ok(ex.Message);
            }
        }

        // api/MesaProposta/v1/PostAgendar
        [Route("v1/PostAgendar")]
        [HttpPost]
        public async Task<IActionResult> PostAgendar([FromBody] ParecerAgendar agendamento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var codUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value;
                agendamento.CodUsuario = codUsuario;
                var resultado = await service.ParecerAgendarAsync(agendamento);
                return Ok(resultado);
            }
            catch (System.ServiceModel.FaultException ex)
            {
                return Ok(ex.Message);
            }
            catch (System.Exception ex)
            {
                return Ok(ex.Message);
            }
        }

        // api/MesaProposta/v1/PutUsoProposta/MFJQT
        [Route("v1/PutUsoProposta/{idProposta}")]
        [HttpPut]
        public async Task<IActionResult> PutUsoProposta(string idProposta)
        {
            var codUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value;
            var model = await service.SetUsoPropostaAsync(idProposta, codUsuario);
            return Ok(model);
        }

        // api/MesaProposta/v1/PutAprovar
        [Route("v1/PutAprovar")]
        [HttpPut]
        public async Task<IActionResult> PutAprovar([FromBody] ParecerAprovar parecer)
        {
            parecer.CodUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value;
            var model = await service.ParecerAprovarAsync(parecer);
            return Ok(model);
        }

        // api/MesaProposta/v1/PutEncaminhar
        [Route("v1/PutEncaminhar")]
        [HttpPut]
        public async Task<ActionResult> PutEncaminhar([FromBody] ParecerEncaminhar parecerEncaminhar)
        {
            parecerEncaminhar.CodUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value;
            var model = await service.ParecerEncaminharAsync(parecerEncaminhar);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetProximaPropostaParaAnalise/MFJQT
        [Route("v1/GetProximaPropostaParaAnalise/{idPropostaAnterior}")]
        [HttpGet]
        public async Task<IActionResult> GetProximaPropostaParaAnalise(string idPropostaAnterior)
        {
            var codUsuario = HttpContext.User.Claims.Where(x => x.Type == ClaimTypes.Sid).FirstOrDefault().Value;
            var model = await service.GetProximaPropostaAsync(codUsuario, idPropostaAnterior);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetInfoAnalise/MFJQT
        [Route("v1/GetInfoAnalise/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetInfoAnalise(string idProposta)
        {
            var model = await service.GetInfoAnaliseAsync(idProposta);
            return Ok(model);
        }

        // api/MesaProposta/v1/GetCapturaObservacao/MF193
        [Route("v1/GetCapturaObservacao/{idProposta}")]
        [HttpGet]
        public async Task<IActionResult> GetCapturaObservacao(string idProposta)
        {
            var model = await service.GetCapturaObservacaoAsync(idProposta);
            return Ok(model);
        }
    }
}