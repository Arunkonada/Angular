using System.Net;

namespace Angular.Api.Models
{
    public class ResponseWrapper
    {
        public ResponseWrapper(HttpStatusCode statusCode, object result = null, string errorMessage = null)
        {
            StatusCode = (int) statusCode;
            Response = result;
            ErrorMessage = errorMessage;
        }

        public int StatusCode { get; set; }
        public string ErrorMessage { get; set; }
        public object Response { get; set; }
    }
}