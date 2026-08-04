using Backend.Models.Entities;
using Microsoft.AspNetCore.Identity;

namespace Backend.Helper;

public static class PasswordHelper
{
    private static readonly PasswordHasher<User> _passwordHasher = new();

    public static string HashPassword(string password)
    {
        return _passwordHasher.HashPassword(new User(), password);
    }

    public static bool VerifyPassword(User user, string password, string passwordHash)
    {
        var result = _passwordHasher.VerifyHashedPassword(user, passwordHash, password);

        return result == PasswordVerificationResult.Success;
    }
}