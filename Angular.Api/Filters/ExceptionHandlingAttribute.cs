using System.Web.Http.Filters;


namespace Angular.Api.Filters
{
    public class ExceptionHandlingAttribute : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext context)
        {
           
        }
    }
}