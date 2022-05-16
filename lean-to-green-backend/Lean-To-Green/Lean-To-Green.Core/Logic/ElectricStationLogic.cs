using Lean_To_Green.Core.Entities;
using Lean_To_Green.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lean_To_Green.Core.Logic
{
    public class ElectricStationLogic
    {
        private readonly IElectricStationRepository _electricStation;
        public ElectricStationLogic(IElectricStationRepository electricStation)
        {
            _electricStation = electricStation;
        }

        public List<ElectricStation> GetAllStations()
        {
            return  _electricStation.GetAllStations();
        }
    }
}
