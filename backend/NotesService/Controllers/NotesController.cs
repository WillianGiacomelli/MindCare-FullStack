using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NotesService.Data;
using NotesService.Models;

namespace NotesService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotesController : ControllerBase
    {
        private readonly NotesDbContext _context;
        private readonly IWebHostEnvironment _environment;

        public NotesController(NotesDbContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        [HttpPost]
        public async Task<IActionResult> CreateNote([FromForm] NoteDto noteDto)
        {
            string? imageUrl = null;

            if (noteDto.Image != null)
            {
                var uploadsFolder = Path.Combine(_environment.WebRootPath, "uploads");
                if (!Directory.Exists(uploadsFolder))
                {
                    Directory.CreateDirectory(uploadsFolder);
                }

                var uniqueFileName = Guid.NewGuid().ToString() + "_" + noteDto.Image.FileName;
                var filePath = Path.Combine(uploadsFolder, uniqueFileName);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await noteDto.Image.CopyToAsync(fileStream);
                }

                // URL acessível pelo frontend
                imageUrl = $"/uploads/{uniqueFileName}";
            }

            var note = new Note
            {
                PatientId = noteDto.PatientId,
                PsychologistId = noteDto.PsychologistId,
                Content = noteDto.Content,
                ImageUrl = imageUrl
            };

            _context.Notes.Add(note);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetNotesByPatient), new { patientId = note.PatientId }, note);
        }

        [HttpGet("{patientId}")]
        public async Task<ActionResult<IEnumerable<Note>>> GetNotesByPatient(string patientId)
        {
            return await _context.Notes
                .Where(n => n.PatientId == patientId)
                .OrderByDescending(n => n.CreatedAt)
                .ToListAsync();
        }
    }

    public class NoteDto
    {
        public required string PatientId { get; set; }
        public required string PsychologistId { get; set; }
        public required string Content { get; set; }
        public IFormFile? Image { get; set; }
    }
}
