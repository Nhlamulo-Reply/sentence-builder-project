using Microsoft.EntityFrameworkCore;
using Backend.Models.Entities;

namespace Backend.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

      
      public DbSet<WordType> WordTypes { get; set; }
      public DbSet<Word> Words { get; set; }
      public DbSet<User> Users { get; set; }    

      public DbSet<Sentence> Sentences { get; set; }
    public DbSet<SentenceWord> SentenceWords { get; set; }

    }
}