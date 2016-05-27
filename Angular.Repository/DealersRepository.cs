using System.Collections.Generic;
using System.Linq;
using Angular.Data;
using Angular.Dtos.MasterData;
using Angular.Models;

namespace Angular.Repository
{
    public class DealersRepository
    {
        private readonly SalesCrmDb _salesCrmDb;

        /// <summary>
        ///     The class constructor with parameters.
        /// </summary>
        /// <param name="salesCrmDb"></param>
        public DealersRepository(SalesCrmDb salesCrmDb)
        {
            _salesCrmDb = salesCrmDb;
        }

        /// <summary>
        ///     Provides information for a Dealers
        /// </summary>
        /// <param name="requestRevenueFilter">Revenue filter request object contains region,rmd,client</param>
        /// <returns>list of dealers data</returns>
        public IEnumerable<DealerDto> GetDealers(RequestRevenueFilter requestRevenueFilter)
        {
            var request = requestRevenueFilter ?? new RequestRevenueFilter();
            return
                _salesCrmDb.GetDealers(request.Region, request.Rmd,
                    request.Client)
                    .Select(d => new DealerDto {AccountId = d.AccountId, DealershipName = d.DealershipName})
                    .ToList();
        }
    }
}