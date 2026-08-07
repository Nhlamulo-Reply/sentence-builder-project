using Backend.DTOs.Sentence;
using Backend.Models.Entities;


namespace Backend.Interfaces.Sentences
{
    public interface ISentenceService
    {

        Task<List<Sentence>> GetAllSentences();
        Task<Backend.Models.Entities.Sentence> SaveSentence(SaveSentenceDto dto);


        Task<Sentence?> GetSentenceById(int id);

        Task<Sentence?> UpdateSentence(int id, SaveSentenceDto dto);
    }
    
}
