using Backend.Data;
using Backend.Helper;
using Backend.Interfaces.Account;
using Backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services.Account;

public class AccountService : IAccountService
{
    private readonly ApplicationDbContext _context;

    public AccountService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<User?> LoginAsync(string email, string password)
    {
        var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);

        if (existingUser == null)
            return null;

        var isValidPassword = PasswordHelper.VerifyPassword(existingUser, password, existingUser.PasswordHash);
             

        if (!isValidPassword)
            return null;

        return existingUser;


    }
}