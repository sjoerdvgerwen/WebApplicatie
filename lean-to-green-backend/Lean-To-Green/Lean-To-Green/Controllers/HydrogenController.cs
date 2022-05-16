using FastMember;
using Lean_To_Green.Core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;

namespace Lean_To_Green.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HydrogenController : ControllerBase
    {
        private Core.Logic.HydroStationLogic _logic;

        public HydrogenController(Core.Logic.HydroStationLogic logic)
        {
            _logic = logic;
        }

        [HttpGet]
        public IActionResult GetAllData()
        {  
            var hydrostations = _logic.getAllStations();

            Response.Headers.Add("Access-Control-Expose-Headers", "Content-Range");
            Response.Headers.Add("X-Total-Count", hydrostations.Count().ToString());
            Response.Headers.Add("Content-Range", "api/user/allusers 0-20/20");
            return Ok(hydrostations);
        }

        [HttpGet("GetStation/{id}")]
        public IActionResult GetStationDetails(int id)
        {
            var hydrostation = _logic.GetStation(id);

            return Ok(hydrostation);
        }

        [HttpPost]
        public async Task<ActionResult<HydroStation>> CreateStation(HydroStation station)
        {
            try
            {
                if(station == null)
                {
                    return BadRequest();
                }

                var newStation = await _logic.CreateStation(station);
                return CreatedAtAction(nameof(GetAllData), new { id = newStation.Id }, newStation);
            }
            catch (Exception)
            {
                return StatusCode(StatusCodes.Status500InternalServerError,
                    "Error retrieving data from the database");
                throw;
            }
            return Ok();
        }
    }
}
