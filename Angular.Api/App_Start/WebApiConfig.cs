using System.Web.Http;
using System.Web.Http.Cors;
using Angular.Api.Filters;
using Angular.Api.Handlers;

namespace Angular.Api
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();
            var cors = new EnableCorsAttribute("*", "*", "*");
            config.EnableCors(cors);
            config.Filters.Add(new AuthorizeRequestAttribute());
            config.Filters.Add(new ExceptionHandlingAttribute());
            config.Routes.MapHttpRoute("DefaultApi", "{controller}/{id}", new { id = RouteParameter.Optional });
            config.MessageHandlers.Add(new WrappingHandler());
        }
    }
}