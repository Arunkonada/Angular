using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Angular.Data;
using Angular.Dtos;


namespace Angular.Repository
{
    public class RegionRepository
    {
        private readonly NORTHWNDEntities _northWindDb;
        public RegionRepository(NORTHWNDEntities northWindDb)
        {
            _northWindDb = northWindDb;
        }
        public IEnumerable<RegionDto> GetAllRegion()
        {
            return _northWindDb.Regions.Select(s => new RegionDto { 
                RegionId=s.RegionID,
                RegionDescription=s.RegionDescription
            }).ToList();
        }
        public RegionDto GetRegionById(int id)
        {
            return _northWindDb.Regions.Select(s => new RegionDto
            {
                RegionId = s.RegionID,
                RegionDescription = s.RegionDescription
            }).FirstOrDefault(s => s.RegionId == id);
        }
        public void AddRegion(RegionDto regionDto)
        {
            _northWindDb.Regions.Add(new Region { RegionDescription=regionDto.RegionDescription});
            _northWindDb.SaveChanges();
        }

    }
}
