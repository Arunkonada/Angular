using System.Collections.Generic;
using System.Web.Http;
using Angular.BussinessLogic;
using Angular.Data;
using Angular.Dtos.MasterData;
using Angular.Models;
using Angular.UnitOfWork;

namespace Angular.Api.Controllers
{
    [RoutePrefix("dealers")]
    public class DealersController : ApiController
    {
        private readonly DealersProvider _dealersProvider;

        /// <summary>
        ///     The class constructor.
        /// </summary>
        public DealersController()
        {
            _dealersProvider = new DealersProvider(new DealersUnitofWork(new SalesCrmDb()));
        }

        /// <summary>
        ///     The class constructor with parameters.
        /// </summary>
        /// <param name="dealersProvider">intializing the context.</param>
        public DealersController(DealersProvider dealersProvider)
        {
            _dealersProvider = dealersProvider;
        }

        /// <summary>
        ///     Provides information for a Dealers
        /// </summary>
        /// <param name="requestRevenueFilter">Revenue filter request object contains region,rmd,client</param>
        /// <returns></returns>
        /// <example>GET api/dealers/get</example>
        [HttpGet]
        [Route("get")]
        public IHttpActionResult Get([FromUri] RequestRevenueFilter requestRevenueFilter)
        {
            IEnumerable<DealerDto> reponse = new List<DealerDto>();
            reponse = _dealersProvider.GetDealers(requestRevenueFilter);
            return Ok(reponse);
        }
    }
}