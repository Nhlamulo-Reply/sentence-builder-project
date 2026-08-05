using Backend.Data;
using Backend.Interfaces;
using Backend.Interfaces.wordtype;
using Backend.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Service;

public class WordTypeService : IWordTypeService
{
    private readonly ApplicationDbContext _context;

    public WordTypeService(ApplicationDbContext context)
    {
        _context = context;
    }

    public async Task<List<WordType>> GetAllWordTypesAsync()
    {
        return await _context.WordTypes.OrderBy(w => w.Id).ToListAsync();
    }
}