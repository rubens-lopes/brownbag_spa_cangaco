using Microsoft.AspNetCore.Mvc;

namespace SpaCangaço.Demonstração.Controllers;

public class CangacoController : Controller
{
	public IActionResult Index()
	{
		return View();
	}
}