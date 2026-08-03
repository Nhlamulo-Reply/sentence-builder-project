
using Microsoft.EntityFrameworkCore;

using Backend.Data;

namespace Backend.Models.Entities
{
public class User { 
    
     public int Id { get; set; }

    public string Username { get; set; } = string.Empty;

    public string Email { get; set; } = string.Empty;

    public string PasswordHash { get; set; } = string.Empty;

    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

    public DateTime? UpdatedAt { get; set; }

    // Navigation Property
    public ICollection<Sentence> Sentences { get; set; } = new List<Sentence>();
}
}