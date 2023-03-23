using Microsoft.AspNetCore.Mvc;

namespace SpaCangaço.Demonstração.Controllers;

public class LegadoController : Controller
{
	public IActionResult Index()
	{
		return View();
	}
}