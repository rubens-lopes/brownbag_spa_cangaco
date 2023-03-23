using Microsoft.AspNetCore.Mvc;

namespace SpaCangaço.Demonstração.Controllers;

public class HomeController : Controller
{
	public IActionResult Index()
	{
		return View();
	}
}