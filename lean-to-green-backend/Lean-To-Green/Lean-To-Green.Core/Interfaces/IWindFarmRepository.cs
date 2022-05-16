using Lean_To_Green.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lean_To_Green.Core.Interfaces
{
    public interface IWindFarmRepository
    {
        public List<WindFarm> GetAllWindFarms();
    }
}
