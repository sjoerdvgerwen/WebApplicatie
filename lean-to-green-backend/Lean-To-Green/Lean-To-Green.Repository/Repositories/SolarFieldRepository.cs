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
    public class SolarFieldRepository : ISolarFieldRepository
    {
        private readonly FillDbContext _context;

        public SolarFieldRepository(FillDbContext context)
        {
            _context = context;
        }
       
        public List<SolarField> GetAllSolarFields()
        {
            List<SolarField> solarFields = new List<SolarField>();

            solarFields = _context.SolarField.ToList();

            return solarFields;
        }
    }
}
