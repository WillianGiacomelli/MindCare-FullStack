using System;

namespace NotesService.Models
{
    public class Note
    {
        public int Id { get; set; }
        public required string PatientId { get; set; }
        public required string PsychologistId { get; set; }
        public required string Content { get; set; }
        public string? ImageUrl { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
