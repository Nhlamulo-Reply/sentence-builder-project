using Backend.Interfaces.wordtype;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    public class WordTypeController : BaseController
    {
        private readonly IWordTypeService _wordTypeService;

        public WordTypeController(IWordTypeService wordTypeService)
        {
            _wordTypeService = wordTypeService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllWordTypes()
        {
            var wordTypes = await _wordTypeService.GetAllWordTypesAsync();

            return Ok(wordTypes);
        }
    }
}
