using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookTrackerProject.Models
{
    public class AllBook
    {
        public string Id { get; set; }

        public ICollection<Book> Books { get; set; }

        //public ICollection<Wish> Wishes { get; set; }

        //public ICollection<Recommend> Recommends { get; set; }

    }
}
