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
    public class SolarFieldController : ControllerBase
    {
        private Core.Logic.SolarFieldLogic _logic;
        public SolarFieldController(Core.Logic.SolarFieldLogic logic)
        {
            _logic = logic;
        }

        [HttpGet]
        public IActionResult GetAllSolarFields()
        {
            var solarfields = _logic.getAllSolarFields();
            return Ok(solarfields);
        }

    }
}
