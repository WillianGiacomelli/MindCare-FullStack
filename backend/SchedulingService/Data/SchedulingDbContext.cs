using Microsoft.EntityFrameworkCore;
using SchedulingService.Models;

namespace SchedulingService.Data
{
    public class SchedulingDbContext : DbContext
    {
        public SchedulingDbContext(DbContextOptions<SchedulingDbContext> options) : base(options) { }

        public DbSet<Appointment> Appointments { get; set; }
    }
}
