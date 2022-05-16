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
    public class ElectricController : ControllerBase
    {
        private Core.Logic.ElectricStationLogic _logic;

        public ElectricController(Core.Logic.ElectricStationLogic logic)
        {
            _logic = logic;
        }

        [HttpGet]
        public IActionResult GetAllData()
        {
            var electricStations = _logic.GetAllStations();
            Response.Headers.Add("Access-Control-Expose-Headers", "Content-Range");
            Response.Headers.Add("X-Total-Count", "20");
            Response.Headers.Add("Content-Range", "api/user/allusers 0-20/20");
            return Ok(electricStations);
        }
    }
}
