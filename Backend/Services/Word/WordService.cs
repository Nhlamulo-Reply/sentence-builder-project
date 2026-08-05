using Backend.Data;
using Backend.Interfaces;
using Backend.Interfaces.wordtype;
using Backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Services.Word
{

    public class WordService : IWordService
    {    
        private readonly ApplicationDbContext _context;

        public WordService(ApplicationDbContext context)
        {
            this._context = context;
        }

        public Task<List<Word>> GetWordsByWordTypeId(int wordTypeId)
        {
           results = await _context.Words.Where(w => w.WordTypeId == wordTypeId).ToListAsync();
           return results;
        }
    }
}
