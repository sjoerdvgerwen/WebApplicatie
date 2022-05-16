using Lean_To_Green.Core.DataAccess;
using Lean_To_Green.Core.Entities;
using Lean_To_Green.Core.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lean_To_Green.Repository.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly FillDbContext _context;

        public UserRepository(FillDbContext context)
        {
            _context = context;
        }

        public bool FindDuplicateMail(User userData)
        {
            throw new NotImplementedException();
        }

        public bool TryLogin(User userData)
        {
            return true;
        }

        public User Create(User newUser)
        {
            try
            {
                _context.User.Add(newUser);
                newUser.Id = _context.SaveChanges();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            return newUser;
        }

        public User GetByEmail(string email)
        {
            return _context.User.FirstOrDefault(u => u.Email == email);
        }

        public async Task<User> GetById(int id)
        {
            return await _context.User.FirstOrDefaultAsync(u => u.Id == id);
        }

        public List<User> GetAllUsers()
        {
            List<User> users = new List<User>();

            users = _context.User.ToList();

            return users;
        }
    }
}
