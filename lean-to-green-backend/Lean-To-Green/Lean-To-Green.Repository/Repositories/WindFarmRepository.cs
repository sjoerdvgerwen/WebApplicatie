using Lean_To_Green.Core.DataAccess;
using Lean_To_Green.Core.Entities;
using Lean_To_Green.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lean_To_Green.Repository.Repositories
{
    public class WindFarmRepository : IWindFarmRepository
    {
        private readonly FillDbContext _context;

        public WindFarmRepository(FillDbContext context)
        {
            _context = context;
        }

        public List<WindFarm> GetAllWindFarms()
        {
            List<WindFarm> windFarms = new List<WindFarm>();

            windFarms = _context.WindFarm.ToList();

            return windFarms;
        }
    }
}
