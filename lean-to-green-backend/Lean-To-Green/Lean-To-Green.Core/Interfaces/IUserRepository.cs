using Lean_To_Green.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lean_To_Green.Core.Interfaces
{
    public interface IUserRepository
    {
        public bool TryLogin(User userData);
        public bool FindDuplicateMail(User userData);
        public User Create(User user);
        public User GetByEmail(string email);
        public Task<User> GetById(int id);
        public List<User> GetAllUsers();

    }
}
