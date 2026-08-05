using Backend.DTOs.Sentence;
using Backend.Interfaces.Sentences;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers
{
  
    public class SentenceController : BaseController
    {
        private readonly ISentenceService _sentenceService;
        public SentenceController(ISentenceService sentenceService)
        {
            _sentenceService = sentenceService;
        }
        [HttpPost("save_sentence")]
        public async Task<IActionResult> SaveSentence([FromBody] SaveSentenceDto dto)
        {
            var result = await _sentenceService.SaveSentence(dto);
            return Ok(result);
        }
    }
}
