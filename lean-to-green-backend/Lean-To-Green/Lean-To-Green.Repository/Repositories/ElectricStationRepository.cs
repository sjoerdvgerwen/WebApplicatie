using Lean_To_Green.Core.DataAccess;
using Lean_To_Green.Core.Entities;
using Lean_To_Green.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lean_To_Green.Repository.Repositories
{
    public class ElectricStationRepository : IElectricStationRepository
    {
        private readonly FillDbContext _context;
        public ElectricStationRepository(FillDbContext context)
        {
            _context = context;
        }

        public List<ElectricStation> GetAllStations()
        {
            List<ElectricStation> electricStations = new List<ElectricStation>();
           
            electricStations = _context.ElectricStation.ToList();

            return electricStations;
        }
    }
}
