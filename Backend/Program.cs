using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// builder.Services.AddOpenApi();



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

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI( options =>
    {
        options.DocumentTitle = "Sentence Builder API";
        options.SwaggerEndpoint("/swagger/v1/swagger.json", "v1");
        options.RoutePrefix = string.Empty;
    });
    // app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
