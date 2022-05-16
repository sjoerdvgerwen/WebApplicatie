using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Lean_To_Green.Core.DataAccess;
using Lean_To_Green.Core.Interfaces;
using Lean_To_Green.Core.Entities;

namespace Lean_To_Green.Repository.Repositories
{
    public class HydroStationRepository : IHydroStationRepository
    {
        private readonly FillDbContext _context;

        public HydroStationRepository(FillDbContext context)
        {
            _context = context;
        }

        public List<HydroStation> GetAllStations()
        {
            List<HydroStation> hydroStations = new List<HydroStation>();
            
            hydroStations = _context.HydroStation.ToList();

            return hydroStations;
        }

        public HydroStation GetStation(int id)
        {
            HydroStation hydroStation = new();
            hydroStation = _context.HydroStation.Where(i => i.Id == id).FirstOrDefault();

            return hydroStation;
        }

        public HydroStation CreateStation(HydroStation station)
        {
            try
            {
                _context.HydroStation.Add(station);
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return station;

        }
    }
}

