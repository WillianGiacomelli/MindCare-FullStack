using System;

namespace SchedulingService.Models
{
    public class Appointment
    {
        public int Id { get; set; }
        public string PsychologistId { get; set; } = string.Empty;
        public string? PatientId { get; set; }
        public DateTime Date { get; set; }
        public bool IsAvailable { get; set; }
        public string? PatientName { get; set; }
    }
}
