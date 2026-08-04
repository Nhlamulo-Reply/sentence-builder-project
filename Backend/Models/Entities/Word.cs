


namespace Backend.Models.Entities;
public class Word 
{
      public int Id { get; set; }

    public string Text { get; set; } = string.Empty;


    // Foreign Key
    public int WordTypeId { get; set; }

    public WordType? WordType { get; set; }

    public ICollection<SentenceWord> SentenceWords { get; set; } = [];

}