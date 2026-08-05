
using Backend.Models.Entities;

namespace Backend.Interfaces.wordtype
{
    public interface IWordTypeService
    {
        Task<List<WordType>> GetAllWordTypesAsync();
    }
}
