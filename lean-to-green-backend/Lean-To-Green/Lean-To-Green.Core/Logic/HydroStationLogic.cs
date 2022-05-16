using FastMember;
using Lean_To_Green.Core.Entities;
using Lean_To_Green.Core.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;

namespace Lean_To_Green.Core.Logic
{
    public class HydroStationLogic
    {
        private readonly IHydroStationRepository _hydroStationRepository;

        public HydroStationLogic(IHydroStationRepository hydroStationRepository)
        {
            _hydroStationRepository = hydroStationRepository;
        }
        
        public List<HydroStation> getAllStations()
        {
            List<HydroStation> hydroStations = new List<HydroStation>();
            hydroStations = _hydroStationRepository.GetAllStations();

            return hydroStations;
        }

        public async Task<HydroStation> CreateStation(HydroStation station)
        {
            HydroStation hydroStation = new HydroStation();
            var result = _hydroStationRepository.CreateStation(station);
            return hydroStation;
        }

        public HydroStation GetStation (int id)
        {
            return _hydroStationRepository.GetStation(id);
        }
    }
}
