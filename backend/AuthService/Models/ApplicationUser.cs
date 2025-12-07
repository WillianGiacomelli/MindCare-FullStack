using Microsoft.AspNetCore.Identity;

namespace AuthService.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string NomeCompleto { get; set; } = string.Empty;
        public string TipoUsuario { get; set; } = string.Empty; // "Psicologo" or "Paciente"
        public string? CRP { get; set; }
    }
}
