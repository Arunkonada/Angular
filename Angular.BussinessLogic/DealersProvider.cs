using System.Collections.Generic;
using Angular.Dtos.MasterData;
using Angular.Models;
using Angular.UnitOfWork;

namespace Angular.BussinessLogic
{
    public class DealersProvider
    {
        private readonly DealersUnitofWork _dealersUnitofWork;

        /// <summary>
        ///     The class constructor with parameters.
        /// </summary>
        /// <param name="dealersUnitofWork">intializing the conetext to DealersUnitofWork</param>
        public DealersProvider(DealersUnitofWork dealersUnitofWork)
        {
            _dealersUnitofWork = dealersUnitofWork;
        }

        /// <summary>
        ///     Provides information for a Dealers
        /// </summary>
        /// <param name="requestRevenueFilter">Revenue filter request object contains region,rmd,client</param>
        /// <returns>list of Dealer data</returns>
        public IEnumerable<DealerDto> GetDealers(RequestRevenueFilter requestRevenueFilter)
        {
            return _dealersUnitofWork.DealersRepository.GetDealers(requestRevenueFilter);
        }
    }
}