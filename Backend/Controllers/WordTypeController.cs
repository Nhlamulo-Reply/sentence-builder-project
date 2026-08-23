using Backend.Interfaces.wordtype;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
    [Route("api/word-types")]

    public class WordTypeController(IWordTypeService wordTypeService) :BaseController
    {
       
        private readonly IWordTypeService _wordTypeService = wordTypeService;

        [HttpGet]
        public async Task<IActionResult> GetAllWordTypes()
        {
            var wordTypes = await _wordTypeService.GetAllWordTypesAsync();

            return Ok(wordTypes);
        }
    }
}
