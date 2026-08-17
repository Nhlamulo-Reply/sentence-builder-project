using Backend.Data;
using Backend.Data.Seeder;
using Backend.Interfaces.Account;
using Backend.Interfaces.Sentences;
using Backend.Interfaces.word;
using Backend.Interfaces.wordtype;
using Backend.Service;
using Backend.Services.Account;
using Backend.Services.Sentence;
using Backend.Services.WordService;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddScoped<IAccountService, AccountService>();
builder.Services.AddScoped<IWordTypeService, WordTypeService>();
builder.Services.AddScoped<IWordService, WordService>();
builder.Services.AddScoped<ISentenceService, SentenceService>();


// builder.Services.AddOpenApi();

//Register db context
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Sentence Builder API",
        Version = "v1",
        Description = "An API for building sentences from words.",
        Contact = new OpenApiContact
        {
            Name = "Nhlamulo Reply Shikweni",
            Email = "shikweninhlamulo@example.com",
            Url = new Uri("https://github.com/Nhlamulo-Reply/sentence-builder-project.git")
        }
    });
});


builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:4200")
                  .AllowAnyMethod()
                  .AllowAnyHeader()
                  .AllowCredentials();
        });
});

var app = builder.Build();


app.UseCors("AllowFrontend");

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI( options =>
//    {
//        options.DocumentTitle = "Sentence Builder API";
//        options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
//        options.RoutePrefix = string.Empty;
//    });
//    // app.MapOpenApi();
//}

app.UseSwagger();

app.UseSwaggerUI(options =>
{
    options.DocumentTitle = "Sentence Builder API";
    options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
    options.RoutePrefix = string.Empty;
});


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();



using (var scope = app.Services.CreateScope())
{
    try
    {
        var services = scope.ServiceProvider;
        var context = services.GetRequiredService<ApplicationDbContext>();

        // Apply any pending migrations
        await context.Database.MigrateAsync();
        await DatabaseSeeder.SeedAsync(context);
    }
    catch (Exception ex)
    {
        var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
        logger.LogError(ex, "An error occurred while seeding the database.");
    }
}
app.Run();
