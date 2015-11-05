using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using FavoriteMoviesAngular.Models;



namespace FavoriteMoviesAngular.API
{
    [Route("api/[controller]")]
    public class MoviesController : Controller
    {
        static private List<Movie> movielist = new List<Movie>();

        public MoviesController()
        {
            if(movielist.Count == 0){
                movielist.Add(new Movie { Id = 0, Title = "Star Wars", Director = "Lucas" });
                movielist.Add(new Movie { Id = 1, Title = "King Kong", Director = "Jackson" });
                movielist.Add(new Movie { Id = 2, Title = "Memento", Director = "Nolan" });
            }
        }

        [HttpGet]
        public IEnumerable<Movie> Get()
        {
            return movielist;
        }


        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            return new ObjectResult(movielist[id]);
        }

        [HttpPut("{id:int}")]
        public IActionResult Put(int id, [FromBody]Movie movie)
        {
            movielist[movie.Id] = movie;
            return new ObjectResult(movie);
        }

        [HttpPost]
        public IActionResult Post([FromBody]Movie movie)
        {
            movie.Id = movielist.Count;
            movielist.Add(movie);
            return new ObjectResult(movie);
        }


        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            movielist.RemoveAt(id);
            return new HttpStatusCodeResult(200);
        }
    }
}