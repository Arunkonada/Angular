using System;
using Angular.Data;

namespace Angular.UnitOfWork.Common
{
	public class BaseUnitOfWork : IDisposable, IBaseUnitOfWork
	{
		private bool _disposed;
		protected NORTHWNDEntities Context;

        public BaseUnitOfWork(NORTHWNDEntities context)
		{
			Context = context;
		}

		public void Save()
		{
			Context.SaveChanges();
		}

		#region IDisposable's method implementation.

		protected virtual void Dispose(bool disposing)
		{
			if (!_disposed)
			{
				if (disposing)
				{
					Context.Dispose();
				}
			}
			_disposed = true;
		}

		public void Dispose()
		{
			Dispose(true);
			GC.SuppressFinalize(this);
		}

		#endregion
	}
}