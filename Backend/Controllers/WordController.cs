using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Backend.Interfaces.word;

namespace Backend.Controllers
{ 
    [Route("api/words")]
    public class WordController : BaseController
    {

        private readonly IWordService _wordService;

        public WordController(IWordService wordService)
     {
        _wordService = wordService;
     }

     [HttpGet("/api/word-types/{wordTypeId:int}/words")]
     public async Task<IActionResult> GetWordsByWordTypeId(int wordTypeId)
        {
            var words = await _wordService.GetWordsByWordTypeId(wordTypeId);
            return Ok(words);
        }

    }
}
