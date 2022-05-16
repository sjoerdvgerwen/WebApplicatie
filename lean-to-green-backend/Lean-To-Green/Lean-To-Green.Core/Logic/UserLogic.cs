using Lean_To_Green.Core.Entities;
using Lean_To_Green.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lean_To_Green.Core.Logic
{
    public class UserLogic
    {
        private readonly IUserRepository _userRepository;
        public UserLogic(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public bool TryLogin (User userData)
        {
            bool Result = _userRepository.TryLogin(userData);

            return true;
        }

        public bool DoesMailAlreadyExist(User user)
        {
            var Result = _userRepository.FindDuplicateMail(user);
            if (user.Email != null && Result == false)
            {
                    return true;
            }
            return false;
        }

        public bool CanNewUserBeCreated(User user) {
            if (DoesMailAlreadyExist(user))
            {
                _userRepository.Create(user);
            }
            else { return false; }
            return true;
        }

        public User Create(User user)
        {
            _userRepository.Create(user);
            return user;
        }

        public User GetByEmail (string email)
        {
            return _userRepository.GetByEmail(email);
        }

        public async Task<User> GetById(int id)
        {
            return await _userRepository.GetById(id);
        }

        public List<User> GetAllUsers()
        {
            return _userRepository.GetAllUsers();
        }
    }
}
