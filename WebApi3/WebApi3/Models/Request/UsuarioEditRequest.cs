using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace WebApi3.Models.Request
{
    public class UsuarioEditRequest
    {
        public int ID_USUARIO { get; set; }
        public string CEDULA { get; set; }
        public string NOMBRES { get; set; }
        public string APELLIDOS { get; set; }
        public string TELEFONO { get; set; }
        public string CORREO { get; set; }
        public string CIUDAD { get; set; }
    }
}
