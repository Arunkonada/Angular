using Angular.BussinessLogic;
using Angular.Data;
using Angular.Dtos;
using Angular.UnitOfWork;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Angular.Api.Controllers
{
    public class RegionController : ApiController
    {
        private readonly RegionProvider _regionProvider;
        public RegionController()
        {
             _regionProvider=new RegionProvider(new RegionUnitOfWork(new NORTHWNDEntities()));
        }
        public RegionController(RegionProvider regionProvider)
        {
            _regionProvider = regionProvider;
        }
        public IHttpActionResult GetAllRegion()
        {
            IEnumerable<RegionDto> obj = new List<RegionDto>();
            try
            {
                obj = _regionProvider.GetAllRegion();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(obj);
        }
        public IHttpActionResult GetRegionById(int id)
        {
            RegionDto obj = new RegionDto();
            try
            {
                obj = _regionProvider.GetRegionById(id);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(obj);
        }
        public IHttpActionResult AddRegion(RegionDto regionDto)
        {
            try
            {
               _regionProvider.AddRegion(regionDto);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok("Succesfully Added!");
        }
        

    }
}
