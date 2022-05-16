using Lean_To_Green.Core.DataAccess;
using Lean_To_Green.Core.Entities;
using Lean_To_Green.Helpers;
using Lean_To_Green.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Lean_To_Green.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly FillDbContext _context;
        private Core.Logic.UserLogic _logic;
        private JwtService _jwtService;
        public UserController(Core.Logic.UserLogic logic, JwtService jwtService, FillDbContext context)
        {
            _context = context;
            _logic = logic;
            _jwtService = jwtService;
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterDto userData)
        {
            var newuser = new User
            {
                Username = userData.Username,
                Email = userData.Email,
                Password = BCrypt.Net.BCrypt.HashPassword(userData.Password)
            };

            return Created("Success", _logic.Create(newuser));
        }

        [HttpPost("Login")]
        public IActionResult Login(LoginDto dto)
        {
            var user = _logic.GetByEmail(dto.Email);

            if (user == null) return BadRequest(new { message = "Invalid Credentials" });

            if (!BCrypt.Net.BCrypt.Verify(dto.Password, user.Password))
            {
                return BadRequest(new { message = "Invalid Credentials" });
            }

            var jwt = _jwtService.Generate(user.Id);

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true
            });

            return Ok(new
            {
                message = "succes"
            });
        }

        [HttpGet("user")]
        public async Task<IActionResult> User()
        {
            try
            {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);

                var user = await _logic.GetById(userId);

                return Ok(user);
            }
            catch (Exception _)
            {
                return Unauthorized();
            }
        }

        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");

            return Ok(new
            {
                message = "success"
            });
        }

        [HttpGet("allusers")]
        public IActionResult GetAllUsers()
        {
            var userData = _logic.GetAllUsers();

            Response.Headers.Add("Access-Control-Expose-Headers", "Content-Range");
            Response.Headers.Add("X-Total-Count", userData.Count().ToString());
            Response.Headers.Add("Content-Range", "api/user/allusers 0-20/20");

            return Ok(userData);
        }

        [HttpGet("getAllUsers")]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers(){
            Response.Headers.Add("Access-Control-Expose-Headers", "Content-Range");
            return _context.User.ToList();
        }
            
    }
}
