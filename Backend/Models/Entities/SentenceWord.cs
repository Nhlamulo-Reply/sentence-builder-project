using Microsoft.EntityFrameworkCore;
using Backend.Data;


namespace Backend.Models.Entities
{
    public class SentenceWord
    {
        public int Id { get; set; }
        public int SentenceId { get; set; }

        public int WordId { get; set; }

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public Word? Word { get; set; }

        public Sentence? Sentence { get; set; }

    }
}