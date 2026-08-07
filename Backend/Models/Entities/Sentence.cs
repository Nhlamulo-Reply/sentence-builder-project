
using Backend.Models.Entities;


namespace Backend.Models.Entities
{
    public class Sentence 
    {
        public int Id { get; set; }
        public string? Text { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public int UserId { get; set; }

        public User? User { get; set; }

        public ICollection<SentenceWord> SentenceWords { get; set; } = new List<SentenceWord>();

    }

   
}