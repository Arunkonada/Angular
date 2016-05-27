using Angular.Data;
using Angular.Repository;
using Angular.UnitOfWork.Common;

namespace Angular.UnitOfWork
{
    public class RegionUnitOfWork : SampleBaseUnitOfWork
    {
        private SupplierRepository _RegionRepository;

        public RegionUnitOfWork(sampleEntities cartContext)
            : base(cartContext)
        {
        }

        public SupplierRepository RegionRepository
        {
            get
            {
                if (_RegionRepository == null)
                {
                    _RegionRepository = new SupplierRepository(Context);
                }
                return _RegionRepository;
            }
        }
    }
}