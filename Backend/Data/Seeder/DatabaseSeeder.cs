using Backend.Helper;
using Backend.Models.Entities;
using Microsoft.EntityFrameworkCore;
using System.Text.Json;

namespace Backend.Data.Seeder;

public static class DatabaseSeeder
{
    private const string BasePath = "Data/Seeder/";

    public static async Task SeedAsync(ApplicationDbContext context)
    {
        
            Console.WriteLine("🌱 Starting database seeding...");

            await SeedWordTypes(context);
            await SeedWords(context);
            await SeedUsers(context);

            Console.WriteLine("✅ Database seeding completed successfully!");
        
     
    }

    private static async Task SeedWordTypes(ApplicationDbContext context)
    {
        if (await context.WordTypes.AnyAsync())
        {
            return;
        }

        var jsonPath = Path.Combine(BasePath, "wordType.json");

        if (!File.Exists(jsonPath))
        {

            return;
        }

        var json = await File.ReadAllTextAsync(jsonPath);
     

        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true,
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };

        var wordTypes = JsonSerializer.Deserialize<List<WordType>>(json, options);

        if (wordTypes == null || !wordTypes.Any())
        {
            return;
        }

        foreach (var item in wordTypes)
        {
     
            item.Id = 0; 
        }

  
        await context.WordTypes.AddRangeAsync(wordTypes);
        await context.SaveChangesAsync();

    }

    private static async Task SeedWords(ApplicationDbContext context)
    {
        if (await context.Words.AnyAsync())
        {
            return;
        }

        var jsonPath = Path.Combine(BasePath, "words.json");

        if (!File.Exists(jsonPath))
        {
          return;
        }

        var json = await File.ReadAllTextAsync(jsonPath);


        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true,
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };

        var words = JsonSerializer.Deserialize<List<Word>>(json, options);

        if (words == null || !words.Any())
        {
          
            return;
        }

        foreach (var item in words)
        {
            item.Id = 0;
        }
            

        await context.Words.AddRangeAsync(words);
        await context.SaveChangesAsync();

    }

    private static async Task SeedUsers(ApplicationDbContext context)
    {
        if (context.Users.Any())
            return;

        var json = await File.ReadAllTextAsync($"{BasePath}users.json");

        var options = new JsonSerializerOptions
        {
            PropertyNameCaseInsensitive = true,
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };
        var users = JsonSerializer.Deserialize<List<User>>(json, options);

        if (users == null)
            return;

        foreach (var user in users)

        {
            user.Id = 0;
            user.PasswordHash = PasswordHelper.HashPassword(user.PasswordHash);
            user.CreatedAt = DateTime.UtcNow;
        }

        await context.Users.AddRangeAsync(users);
        await context.SaveChangesAsync();
    }
}