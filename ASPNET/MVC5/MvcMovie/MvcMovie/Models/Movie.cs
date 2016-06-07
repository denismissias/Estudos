using System;
using System.Data.Entity;

namespace MvcMovie.Models
{
    public class Movie
    {
        public Int32 ID { get; set; }
        public String Title { get; set; }
        public DateTime ReleaseDate { get; set; }
        public String Genre { get; set; }
        public Decimal Price { get; set; }
    }

    public class MovieDBContext : DbContext
    {
        public DbSet<Movie> Movies { get; set; }
    }
}