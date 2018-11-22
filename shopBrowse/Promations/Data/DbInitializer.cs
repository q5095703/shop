using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Promations.Models;

namespace Promations.Data
{
    public class DbInitializer
    {
        public static void Initialize(DBContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Products.Any())
            {
                return;   // DB has been seeded
            }

            var Products = new List<Product>()
                {
                   new Product { Name = "item2", isPromoted = true, Price=1.95, Count=3, URL = "http://www.columbiactlibrary.org/wp-content/uploads/2012/10/books.png"},
                   new Product { Name = "item3",  isPromoted = false, Price=4.5, Count=5, URL = "http://www.columbiactlibrary.org/wp-content/uploads/2012/10/books.png"}
            };
            foreach (Product s in Products)
            {
                context.Products.Add(s);
            }
            context.SaveChanges();

          

        }
    }
}
