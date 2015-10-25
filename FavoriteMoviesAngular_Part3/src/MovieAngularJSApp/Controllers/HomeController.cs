using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;
using System.Security.Claims;

namespace MovieAngularJSApp.Controllers
{
	[Authorize]
	public class HomeController : Controller
    {
        
        public IActionResult Index()
        {
			var user = (ClaimsIdentity)User.Identity;
			ViewBag.Name = user.Name;
            var v = user.FindFirst(ClaimTypes.Role);
            if ( v != null )
                ViewBag.CanEdit = user.FindFirst(ClaimTypes.Role).Value == "CanEdit" ? "true" : "false";
            else
                ViewBag.CanEdit = "false";
            return View();
        }
    }
}
