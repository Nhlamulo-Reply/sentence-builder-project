using System.Text.Json;
using Backend.Models.Entities;

namespace Backend.Data.Seeders;

public static class DatabaseSeeder
{
   private const string BasePath = "Data/Seeder/";

    public static async Task SeedAsync(ApplicationDbContext context)
    {
        await SeedWordTypes(context);
        await SeedWords(context);
        await SeedUsers(context);
    }

    private static async Task SeedWordTypes(ApplicationDbContext context)
    {
        if (context.WordTypes.Any())
            return;

        var json = await File.ReadAllTextAsync($"{BasePath}wordType.json");

        var wordTypes = JsonSerializer.Deserialize<List<WordType>>(json);

        if (wordTypes == null)
            return;

        await context.WordTypes.AddRangeAsync(wordTypes);
        await context.SaveChangesAsync();
    }

    private static async Task SeedWords(ApplicationDbContext context)
    {
        if (context.Words.Any())
            return;

            //Read the JSON file containing the words

        var json = await File.ReadAllTextAsync($"{BasePath}words.json");
        
        var words = JsonSerializer.Deserialize<List<Word>>(json);

        if (words == null)
            return;

        await context.Words.AddRangeAsync(words);
        await context.SaveChangesAsync();
    }

    private static async Task SeedUsers(ApplicationDbContext context)
    {
        if (context.Users.Any())
            return;

        var json = await File.ReadAllTextAsync($"{BasePath}User.json");

        var users = JsonSerializer.Deserialize<List<User>>(json);

        if (users == null)
            return;

        await context.Users.AddRangeAsync(users);
        await context.SaveChangesAsync();
    }
}