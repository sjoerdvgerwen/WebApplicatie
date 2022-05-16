using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Lean_To_Green.Core.Entities
{
    public class User
    { 
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        [JsonIgnore] public string Password { get; set; }
        public bool IsAdmin { get; set; }
    }
}
