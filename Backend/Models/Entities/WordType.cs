

namespace Backend.Models.Entities
{
    public class WordType
    {
      public int Id { get; set; }

    public string Name { get; set; } = string.Empty;

        // Navigation Property
        public ICollection<Word> Words { get; set; } = [];
    }
}