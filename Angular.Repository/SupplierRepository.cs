using Angular.Data;

namespace Angular.Repository
{
    public class SupplierRepository
    {
        private readonly sampleEntities _sampleEntities;

        public SupplierRepository(sampleEntities sampleEntities)
        {
            _sampleEntities = sampleEntities;
        }
    }
}