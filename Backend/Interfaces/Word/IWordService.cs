namespace Backend.Interfaces.Word
{
    public interface IWordService
    {
        Task<List<Word>> GetWordsByWordTypeId(int wordTypeIsd);
    }
}
