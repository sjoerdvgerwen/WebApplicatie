using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lean_To_Green.Core.Entities
{
    public class SolarField
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string Address { get; set; }
        public string Zipcode { get; set; }
        public string City { get; set; }
        public bool IsActive { get; set; }
        public string EnergyProduced { get; set; }
        public string Photo { get; set; }
    }
}
