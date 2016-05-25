using Angular.Dtos;
using Angular.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular.BussinessLogic
{
    public class RegionProvider
    {
        private readonly RegionUnitOfWork _regionUnitOfWork;
        public RegionProvider(RegionUnitOfWork regionUnitofWork)
        {
            _regionUnitOfWork = regionUnitofWork;
        }
        public IEnumerable<RegionDto> GetAllRegion()
        {
            return _regionUnitOfWork.RegionRepository.GetAllRegion();
        }
        public RegionDto GetRegionById(int id)
        {
            return _regionUnitOfWork.RegionRepository.GetRegionById(id);
        }
        public void AddRegion(RegionDto regionDto)
        {
            _regionUnitOfWork.RegionRepository.AddRegion(regionDto);
        }
    }
}
