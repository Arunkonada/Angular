using Angular.Data;
using Angular.Repository;
using Angular.UnitOfWork.Common;

namespace Angular.UnitOfWork
{
    public class DealersUnitofWork : BaseUnitOfWork
    {
        /// <summary>
        ///     _dealersRepository property
        /// </summary>
        private DealersRepository _dealersRepository;

        /// <summary>
        ///     The class constructor is used to pass context for base unit of work.
        /// </summary>
        public DealersUnitofWork(SalesCrmDb context)
            : base(context)
        {
        }

        /// <summary>
        ///     DealersRepository property
        /// </summary>
        /// <value>
        ///     A value tag is used to describe the property value
        /// </value>
        public DealersRepository DealersRepository
        {
            get
            {
                if (_dealersRepository == null)
                {
                    _dealersRepository = new DealersRepository(Context);
                }
                return _dealersRepository;
            }
        }
    }
}