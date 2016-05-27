using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace Angular.Api.Filters
{
    public class AuthorizeRequestAttribute : AuthorizeAttribute
    {
        /// <summary>
        ///     Overriding OnAuthorization method that checks for Authentication
        /// </summary>
        /// <param name="actionContext">Holds current  HttpActionContext</param>
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            //if (!HttpContext.Current.User.Identity.IsAuthenticated)
            //{
            //    actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Forbidden);
            //}
        }
    }
}