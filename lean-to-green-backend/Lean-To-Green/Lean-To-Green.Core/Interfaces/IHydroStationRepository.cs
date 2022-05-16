using Lean_To_Green.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lean_To_Green.Core.Interfaces
{
    public interface IHydroStationRepository
    {
        public List<HydroStation> GetAllStations();
        public HydroStation CreateStation(HydroStation station);
        public HydroStation GetStation(int id);
    }
}
