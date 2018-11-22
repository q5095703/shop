using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Promations.Models
{
    public class Product
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public Boolean isPromoted { get; set; }
        public double Price { get; set; }
        public int Count { get; set; }
        public string URL { get; set; }
    }
}
