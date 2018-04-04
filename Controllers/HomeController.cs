using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using ServicesReference.MesaCreditoTokenService;

namespace Mesa.Controllers
{
    public class HomeController : Controller
    {
        public async Task<IActionResult> Index()
        {
            if (HttpContext.User.Identity.IsAuthenticated == false)
            {
                var logado = await SingInAsync();
                if (logado == false)
                {
                    return RedirectToAction("AcessoNegado");
                }
            }
            return View();
        }

        public IActionResult AcessoNegado(){
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }        

        private async Task<bool> SingInAsync(){
            try
            {
                var token = HttpContext.Request.Query["token"].ToString();

                if (!string.IsNullOrEmpty(token)){                

                    MesaCreditoTokenServiceClient service = ServiceFactory.Get<MesaCreditoTokenServiceClient>("MesaCreditoTokenService");
                    var usuario = await service.ObterUsuarioTokenAsync(token);
    
                    if (usuario != null){
                        var claims = new List<Claim>
                        {
                            new Claim(ClaimTypes.Name, usuario.Usuario.ToString()),
                            new Claim(ClaimTypes.Sid, usuario.Codigo.ToString())
                        };            
                        var userIdentity = new ClaimsIdentity(claims, "token");            
                        ClaimsPrincipal principal = new ClaimsPrincipal(userIdentity);
                        await HttpContext.SignInAsync(principal);   
                        return true;                         
                    } else {
                        SingOut();                    
                        return false;
                    }
                } else {
                    SingOut();
                    return false;
                }
            }
            catch (Exception)
            {
                SingOut();
                return false;
            }
        }

        private async void SingOut(){
            await HttpContext.SignOutAsync();
        }
    }
}
