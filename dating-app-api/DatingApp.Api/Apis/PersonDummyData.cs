using System.Collections.Generic;
using DatingApp.Api.Models;

namespace DatingApp.Api.Apis
{
    public static class PersonDummyData
    {
        public static List<Person> GetPeople()
        {
            return new List<Person>
            {
                new Person { Id = 1, Name = "Alice", LastName = "Smith", Photo = "https://randomuser.me/api/portraits/women/1.jpg" },
                new Person { Id = 2, Name = "Bob", LastName = "Johnson", Photo = "https://randomuser.me/api/portraits/men/2.jpg" },
                new Person { Id = 3, Name = "Carol", LastName = "Williams", Photo = "https://randomuser.me/api/portraits/women/3.jpg" },
                new Person { Id = 4, Name = "David", LastName = "Brown", Photo = "https://randomuser.me/api/portraits/men/4.jpg" },
                new Person { Id = 5, Name = "Eve", LastName = "Jones", Photo = "https://randomuser.me/api/portraits/women/5.jpg" },
                new Person { Id = 6, Name = "Frank", LastName = "Garcia", Photo = "https://randomuser.me/api/portraits/men/6.jpg" },
                new Person { Id = 7, Name = "Grace", LastName = "Martinez", Photo = "https://randomuser.me/api/portraits/women/7.jpg" },
                new Person { Id = 8, Name = "Henry", LastName = "Rodriguez", Photo = "https://randomuser.me/api/portraits/men/8.jpg" },
                new Person { Id = 9, Name = "Ivy", LastName = "Lee", Photo = "https://randomuser.me/api/portraits/women/9.jpg" },
                new Person { Id = 10, Name = "Jack", LastName = "Walker", Photo = "https://randomuser.me/api/portraits/men/10.jpg" },
                new Person { Id = 11, Name = "Kathy", LastName = "Hall", Photo = "https://randomuser.me/api/portraits/women/11.jpg" },
                new Person { Id = 12, Name = "Leo", LastName = "Allen", Photo = "https://randomuser.me/api/portraits/men/12.jpg" },
                new Person { Id = 13, Name = "Mona", LastName = "Young", Photo = "https://randomuser.me/api/portraits/women/13.jpg" },
                new Person { Id = 14, Name = "Nick", LastName = "Hernandez", Photo = "https://randomuser.me/api/portraits/men/14.jpg" },
                new Person { Id = 15, Name = "Olivia", LastName = "King", Photo = "https://randomuser.me/api/portraits/women/15.jpg" },
                new Person { Id = 16, Name = "Paul", LastName = "Wright", Photo = "https://randomuser.me/api/portraits/men/16.jpg" },
                new Person { Id = 17, Name = "Quinn", LastName = "Lopez", Photo = "https://randomuser.me/api/portraits/women/17.jpg" },
                new Person { Id = 18, Name = "Ray", LastName = "Hill", Photo = "https://randomuser.me/api/portraits/men/18.jpg" },
                new Person { Id = 19, Name = "Sara", LastName = "Scott", Photo = "https://randomuser.me/api/portraits/women/19.jpg" },
                new Person { Id = 20, Name = "Tom", LastName = "Green", Photo = "https://randomuser.me/api/portraits/men/20.jpg" },
                new Person { Id = 21, Name = "Uma", LastName = "Adams", Photo = "https://randomuser.me/api/portraits/women/21.jpg" },
                new Person { Id = 22, Name = "Victor", LastName = "Baker", Photo = "https://randomuser.me/api/portraits/men/22.jpg" },
                new Person { Id = 23, Name = "Wendy", LastName = "Gonzalez", Photo = "https://randomuser.me/api/portraits/women/23.jpg" },
                new Person { Id = 24, Name = "Xavier", LastName = "Nelson", Photo = "https://randomuser.me/api/portraits/men/24.jpg" },
                new Person { Id = 25, Name = "Yara", LastName = "Carter", Photo = "https://randomuser.me/api/portraits/women/25.jpg" },
                new Person { Id = 26, Name = "Zane", LastName = "Mitchell", Photo = "https://randomuser.me/api/portraits/men/26.jpg" },
                new Person { Id = 27, Name = "Amy", LastName = "Perez", Photo = "https://randomuser.me/api/portraits/women/27.jpg" },
                new Person { Id = 28, Name = "Brian", LastName = "Roberts", Photo = "https://randomuser.me/api/portraits/men/28.jpg" },
                new Person { Id = 29, Name = "Cindy", LastName = "Turner", Photo = "https://randomuser.me/api/portraits/women/29.jpg" },
                new Person { Id = 30, Name = "Derek", LastName = "Phillips", Photo = "https://randomuser.me/api/portraits/men/30.jpg" }
            };
        }
    }
}
