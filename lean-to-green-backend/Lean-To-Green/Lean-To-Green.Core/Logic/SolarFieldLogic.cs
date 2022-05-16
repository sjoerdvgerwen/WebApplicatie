using Lean_To_Green.Core.Entities;
using Lean_To_Green.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lean_To_Green.Core.Logic
{
    public class SolarFieldLogic
    {
        private readonly ISolarFieldRepository _solarFieldRepository;
        public SolarFieldLogic(ISolarFieldRepository solarFieldRepository)
        {
            _solarFieldRepository = solarFieldRepository;
        }

        public List<SolarField> getAllSolarFields()
        {
            List<SolarField> solarFields = new List<SolarField>();
            solarFields = _solarFieldRepository.GetAllSolarFields();

            return solarFields;
        }
    }
}
