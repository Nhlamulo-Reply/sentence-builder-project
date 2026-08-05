using Backend.Data;
using Backend.Interfaces.word;
using Backend.Models.Entities;
using Microsoft.EntityFrameworkCore;


namespace Backend.Services.WordService
{

    public class WordService : IWordService
    {    
        private readonly ApplicationDbContext _context;

        public WordService(ApplicationDbContext context)
        {
            this._context = context;
        }

        public async Task<List<Word>> GetWordsByWordTypeId(int wordTypeId)
        {
            var results = await _context.Words.Where(w => w.WordTypeId == wordTypeId).OrderBy(w => w.Id).ToListAsync();

            return results;
        }
    }
}
