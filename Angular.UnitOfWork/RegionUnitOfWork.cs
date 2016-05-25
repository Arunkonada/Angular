using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Angular.UnitOfWork.Common;
using Angular.Data;
using Angular.Repository;

namespace Angular.UnitOfWork
{
    public class RegionUnitOfWork:BaseUnitOfWork
    {
        private RegionRepository _RegionRepository;
        public RegionUnitOfWork(NORTHWNDEntities northWindDb)
            : base(northWindDb)
        {
 
        }
        public RegionRepository RegionRepository
        {
            get {
                if (_RegionRepository == null)
                {
                    _RegionRepository = new RegionRepository(Context);
                }
                return _RegionRepository;
            }
        }

    }
}
