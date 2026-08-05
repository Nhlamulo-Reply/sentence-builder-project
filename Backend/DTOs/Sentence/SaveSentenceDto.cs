

namespace Backend.DTOs.Sentence
{
    public class SaveSentenceDto
    {
        public int UserId { get; set; }

        public List<int> WordIds { get; set; } = [];
    }
}
