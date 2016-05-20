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
        private SupplierRepository _RegionRepository;
        public RegionUnitOfWork(sampleEntities cartContext)
            : base(cartContext)
        {
 
        }
        public SupplierRepository RegionRepository
        {
            get {
                if (_RegionRepository == null)
                {
                    _RegionRepository = new SupplierRepository(Context);
                }
                return _RegionRepository;
            }
        }

    }
}
