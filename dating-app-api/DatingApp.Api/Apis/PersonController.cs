using Microsoft.AspNetCore.Mvc;
using DatingApp.Api.Models;

namespace DatingApp.Api.Apis
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonController : ControllerBase
    {
        private static List<Person> people = PersonDummyData.GetPeople();

        [HttpPost]
        public IActionResult CreatePerson([FromBody] Person person)
        {
            person.Id = people.Count > 0 ? people.Max(p => p.Id) + 1 : 1;
            people.Add(person);
            return CreatedAtAction(nameof(GetPerson), new { id = person.Id }, person);
        }

        [HttpGet("{id}")]
        public IActionResult GetPerson(int id)
        {
            var person = people.FirstOrDefault(p => p.Id == id);
            if (person == null) return NotFound();
            return Ok(person);
        }

        [HttpPut("{id}")]
        public IActionResult UpdatePerson(int id, [FromBody] Person updatedPerson)
        {
            var person = people.FirstOrDefault(p => p.Id == id);
            if (person == null) return NotFound();
            person.Name = updatedPerson.Name;
            person.LastName = updatedPerson.LastName;
            person.Photo = updatedPerson.Photo;
            return Ok(person);
        }

        [HttpDelete("{id}")]
        public IActionResult DeletePerson(int id)
        {
            var person = people.FirstOrDefault(p => p.Id == id);
            if (person == null) return NotFound();
            people.Remove(person);
            return NoContent();
        }
    }
}
