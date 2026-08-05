using Backend.Data;
using Backend.DTOs.Sentence;
using Backend.Interfaces.Sentences;
using Backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services.Sentence
{
    public class SentenceService(ApplicationDbContext context) : ISentenceService
    {
        private readonly ApplicationDbContext _context = context;

        public async Task<Backend.Models.Entities.Sentence> SaveSentence(SaveSentenceDto dto)
        {
            var words = await _context.Words.Where(x => dto.WordIds.Contains(x.Id)).ToListAsync();

            var sentence = new Backend.Models.Entities.Sentence
            {
                UserId = dto.UserId,
                Text = string.Join(" ", words.Select(x => x.Text)),
                CreatedAt = DateTime.UtcNow
            };

            _context.Sentences.Add(sentence);

            await _context.SaveChangesAsync();

            foreach (var wordId in dto.WordIds)
            {
                _context.SentenceWords.Add(new SentenceWord
                {
                    SentenceId = sentence.Id,
                    WordId = wordId,
                    CreatedAt = DateTime.UtcNow
                });
            }

            await _context.SaveChangesAsync();

            return sentence;
        }
    }
}
