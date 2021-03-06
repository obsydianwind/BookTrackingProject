﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookTrackerProject.Models
{
    public class Book
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Author { get; set; }

        public decimal Price { get; set; }

        public string Location { get; set; }

        public string Image { get; set; }

        [JsonIgnore]
        public ApplicationUser Owner { get; set; }

    }
}
