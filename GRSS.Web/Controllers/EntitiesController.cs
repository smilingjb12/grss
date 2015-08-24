using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Breeze.ContextProvider;
using Breeze.ContextProvider.EF6;
using Breeze.WebApi2;
using GRSS.Web.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using Newtonsoft.Json.Linq;

namespace GRSS.Web.Controllers
{
    [BreezeController]
    public class EntitiesController : ApiController
    {
        private readonly EFContextProvider<ApplicationDbContext> contextProvider =
            new EFContextProvider<ApplicationDbContext>();

        [HttpGet]
        public string Metadata()
        {
            return contextProvider.Metadata();
        }

        [HttpGet]
        public IQueryable<IdentityUser> Users()
        {
            return contextProvider.Context.Users;
        }

        [HttpPost]
        public SaveResult SaveChanges(JObject saveBundle)
        {
            return contextProvider.SaveChanges(saveBundle);
        }
    }
}
