using Lean_To_Green.Core.Entities;
using Lean_To_Green.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lean_To_Green.Core.Logic
{
    public class WindFarmLogic
    {
        private readonly IWindFarmRepository _windFarmRepository;
        public WindFarmLogic(IWindFarmRepository windFarmRepository)
        {
            _windFarmRepository = windFarmRepository;
        }

        public List<WindFarm> getAllWindFarms()
        {
            List<WindFarm> windFarms = new List<WindFarm>();
            windFarms = _windFarmRepository.GetAllWindFarms();

            return windFarms;
        }
    }
}
