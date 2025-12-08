using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SchedulingService.Data;
using SchedulingService.Models;

namespace SchedulingService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentsController : ControllerBase
    {
        private readonly SchedulingDbContext _context;

        public AppointmentsController(SchedulingDbContext context)
        {
            _context = context;
        }

        // POST /api/appointments/slots
        [HttpPost("slots")]
        public async Task<IActionResult> CreateSlots([FromBody] CreateSlotRequest request)
        {
            // Na vida real, validaríamos se o token pertence ao PsychologistId
            var appointment = new Appointment
            {
                PsychologistId = request.PsychologistId,
                Date = request.Date,
                IsAvailable = true
            };

            _context.Appointments.Add(appointment);
            await _context.SaveChangesAsync();

            return Ok(appointment);
        }

        // GET /api/appointments/available
        [HttpGet("available")]
        public async Task<IActionResult> GetAvailableSlots()
        {
            // Retorna apenas slots futuros e disponíveis
            var slots = await _context.Appointments
                .Where(a => a.IsAvailable && a.Date > DateTime.Now)
                .OrderBy(a => a.Date)
                .ToListAsync();

            return Ok(slots);
        }

        // PUT /api/appointments/book/{id}
        [HttpPut("book/{id}")]
        public async Task<IActionResult> BookAppointment(int id, [FromBody] BookAppointmentRequest request)
        {
            var appointment = await _context.Appointments.FindAsync(id);

            if (appointment == null)
            {
                return NotFound("Horário não encontrado.");
            }

            if (!appointment.IsAvailable)
            {
                return BadRequest("Horário não está mais disponível.");
            }

            appointment.IsAvailable = false;
            appointment.PatientId = request.PatientId;
            appointment.PatientName = request.PatientName;

            await _context.SaveChangesAsync();

            return Ok(appointment);
        }

        // GET /api/appointments/my-schedule/{psychologistId}
        [HttpGet("my-schedule/{psychologistId}")]
        public async Task<IActionResult> GetPsychologistSchedule(string psychologistId)
        {
            var appointments = await _context.Appointments
                .Where(a => a.PsychologistId == psychologistId)
                .OrderBy(a => a.Date)
                .ToListAsync();

            return Ok(appointments);
        }
    }

    public class CreateSlotRequest
    {
        public string PsychologistId { get; set; } = string.Empty;
        public DateTime Date { get; set; }
    }

    public class BookAppointmentRequest
    {
        public string PatientId { get; set; } = string.Empty;
        public string PatientName { get; set; } = string.Empty;
    }
}
