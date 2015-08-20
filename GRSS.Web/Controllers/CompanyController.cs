using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace GRSS.Web.Controllers
{
    public class CompanyController : ApiController
    {
        public async Task<IHttpActionResult> Dashboard()
        {
            return Ok();
        }
    }
}
