using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using GRSS.Web.Models;

namespace GRSS.Web.Controllers
{
    public class HomeController : Controller
    {
        private const string LayoutFilePath = "~/App/index.cshtml";

        public ActionResult Index()
        {
            var appConstants = GenerateAppConstants();
            return View(LayoutFilePath, appConstants);
        }

        private AppConstants GenerateAppConstants()
        {
            var constants = new AppConstants();
            return constants;
        }
    }
}
