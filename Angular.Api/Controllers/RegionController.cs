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
    [RoutePrefix("regions")]
    public class RegionController : ApiController
    {
        //private readonly RegionProvider _regionProvider;
        //public RegionController()
        //{
        //    _regionProvider = new RegionProvider(new RegionUnitOfWork(new CartContext()));
        //}
        //public RegionController(RegionProvider regionProvider)
        //{
        //    _regionProvider = regionProvider;
        //}
        //[HttpGet]
        //[Route("All")]
        //public IHttpActionResult GetAllRegion()
        //{
        //    IEnumerable<SupplierDto> obj = new List<SupplierDto>();
        //    try
        //    {
        //        obj = _regionProvider.GetAllRegion();
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }
        //    return Ok(obj);
        //}
        //public IHttpActionResult GetRegionById(int id)
        //{
        //    SupplierDto obj = new SupplierDto();
        //    try
        //    {
        //        obj = _regionProvider.GetRegionById(id);
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }
        //    return Ok(obj);
        //}
        //public IHttpActionResult AddRegion(SupplierDto regionDto)
        //{
        //    try
        //    {
        //       _regionProvider.AddRegion(regionDto);
        //    }
        //    catch (Exception ex)
        //    {
        //        throw ex;
        //    }
        //    return Ok("Succesfully Added!");
        //}
        

    }
}
