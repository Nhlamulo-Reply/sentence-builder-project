using Backend.DTOs;
using Backend.Interfaces.Account;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

public class AccountController : BaseController
{
    private readonly IAccountService _accountService;

    public AccountController(IAccountService accountService)
    {
        _accountService = accountService;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(LoginDto loginDto)
    {
        var existingUser = await _accountService.LoginAsync(loginDto.Email,loginDto.Password);

        if (existingUser == null)
        {
            return Unauthorized(new{message = "Invalid email or password."});
        
        }

        return Ok(existingUser);
    }
}