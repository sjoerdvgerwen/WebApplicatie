using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lean_To_Green.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WindFarmController : ControllerBase
    {
        private Core.Logic.WindFarmLogic _logic;
        public WindFarmController(Core.Logic.WindFarmLogic logic)
        {
            _logic = logic;
        }

        [HttpGet]
        public IActionResult GetAllWindFarms()
        {
            var windFarms = _logic.getAllWindFarms();
            return Ok(windFarms);
        }

    }
}
