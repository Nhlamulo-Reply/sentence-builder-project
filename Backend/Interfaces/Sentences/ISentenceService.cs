using Backend.DTOs.Sentence;
using Backend.Models.Entities;


namespace Backend.Interfaces.Sentences
{
    public interface ISentenceService
    {

        Task<Backend.Models.Entities.Sentence> SaveSentence(SaveSentenceDto dto);
    }
    
}
