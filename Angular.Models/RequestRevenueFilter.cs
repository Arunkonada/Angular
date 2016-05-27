namespace Angular.Models
{
    public class RequestRevenueFilter
    {
        /// <summary>
        ///     The class constructor.Intialized null value for all properties.
        /// </summary>
        public RequestRevenueFilter()
        {
            Region = null;
            Rmd = null;
            Client = null;
        }

        /// <summary>
        ///     Region property
        /// </summary>
        /// <value>
        ///     A value tag is used to describe the region name
        /// </value>
        public string Region { get; set; }

        /// <summary>
        ///     Rmd property
        /// </summary>
        /// <value>
        ///     A value tag is used to describe the rmd name
        /// </value>
        public string Rmd { get; set; }

        /// <summary>
        ///     Client property
        /// </summary>
        /// <value>
        ///     A value tag is used to describe the client name
        /// </value>
        public string Client { get; set; }
    }
}