using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Backend.Interfaces.Word;

namespace Backend.Controllers
{ 
    public class WordController : BaseController
    {
        
     public WordController(IWordService wordService)
     {
        _wordService = wordService;
     }

     [HttpGet("wordtype/{wordTypeId}")]
     public async Task<IActionResult> GetWordsByWordTypeId(int wordTypeId)
        {
            var words = await _wordService.GetWordsByWordTypeId(wordTypeId);
            return Ok(words);
        }

    }
}
