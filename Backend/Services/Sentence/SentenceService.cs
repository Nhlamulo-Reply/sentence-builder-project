using Backend.Data;
using Backend.DTOs.Sentence;
using Backend.Interfaces.Sentences;
using Backend.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Backend.Models.Entities;

namespace Backend.Services.Sentence
{
    public class SentenceService(ApplicationDbContext context) : ISentenceService
    {
        private readonly ApplicationDbContext _context = context;


        public async Task<List<Backend.Models.Entities.Sentence>> GetAllSentences()
        {
          var results =  await _context.Sentences.OrderByDescending(x => x.CreatedAt).ToListAsync();
          return results;
        }

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




        public async Task<Backend.Models.Entities.Sentence?> GetSentenceById(int id)
        {
            return await _context.Sentences
                .Include(x => x.SentenceWords)
                .ThenInclude(x => x.Word)
                .FirstOrDefaultAsync(x => x.Id == id);
        }


        public async Task<Backend.Models.Entities.Sentence?> UpdateSentence(int id, SaveSentenceDto dto)
        {
            var sentence = await _context.Sentences.FirstOrDefaultAsync(x => x.Id == id);

            if (sentence == null)
                return null;

            var words = await _context.Words.Where(x => dto.WordIds.Contains(x.Id)).ToListAsync();

            sentence.Text = string.Join(" ", words.Select(x => x.Text));
            sentence.UpdatedAt = DateTime.UtcNow;

            await _context.SaveChangesAsync();

            return sentence;
        }

    }
}
