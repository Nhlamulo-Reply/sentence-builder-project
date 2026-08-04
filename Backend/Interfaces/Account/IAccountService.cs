using Backend.Models.Entities;

namespace Backend.Interfaces.Account;

public interface IAccountService
{
    Task<User?> LoginAsync(string email, string password);
}