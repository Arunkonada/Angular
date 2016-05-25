namespace Angular.UnitOfWork.Common
{
	public interface IBaseUnitOfWork
	{
		void Save();
		void Dispose();
	}
}