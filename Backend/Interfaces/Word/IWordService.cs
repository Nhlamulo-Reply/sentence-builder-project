using Backend.Models.Entities;

namespace Backend.Interfaces.word
{
    public interface IWordService
    {
        Task<List<Word>> GetWordsByWordTypeId(int wordTypeId);
    }
}