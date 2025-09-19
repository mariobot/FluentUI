using System.ComponentModel.DataAnnotations;

namespace DatingApp.Api.Models
{
    public class Person
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Photo { get; set; }
    }
}
