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


        [HttpGet("get_all_sentences")]
        public async Task<IActionResult> GetAllSentences()
        {
            var sentences = await _sentenceService.GetAllSentences();

            return Ok(sentences);
        }


        [HttpPost("save_sentence")]
        public async Task<IActionResult> SaveSentence([FromBody] SaveSentenceDto dto)
        {
            var result = await _sentenceService.SaveSentence(dto);

            return Ok(new
            {
                result.Id,
                result.Text,
                result.CreatedAt,
                result.UserId
            });
        }


        [HttpGet("{id}")]
        public async Task<IActionResult> GetSentenceById(int id)
        {
            var sentence = await _sentenceService.GetSentenceById(id);

            if (sentence == null)
            {
                return NotFound();
            }

            return Ok(new
            {
                sentence.Id,
                sentence.UserId,
                Words = sentence.SentenceWords.Select(x => new
                {
                    x.Word!.Id,
                    x.Word.Text,
                    x.Word.WordTypeId
                })
            });
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateSentence(int id,[FromBody] SaveSentenceDto dto)
        {
            var sentence = await _sentenceService.UpdateSentence(id, dto);

            if (sentence == null)
            {
                return NotFound();
            }

            return Ok(new
            {
                sentence.Id,
                sentence.Text,
                sentence.UpdatedAt
            });
        }



    }
}
