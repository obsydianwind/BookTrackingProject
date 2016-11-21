using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BookTrackerProject.Interfaces;
using BookTrackerProject.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace BookTrackerProject.Controllers
{
    [Route("api/[controller]")]
    public class WishesController : Controller
    {
        private IWishService _service;

        public WishesController(IWishService service)
        {
            this._service = service;
        }

        [HttpGet]
        public IEnumerable<Wish> Get()
        {
            return _service.GetAllWishBooks();
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_service.GetWishBookById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody]Wish wish)
        {
            _service.SaveWishBook(wish);
            return Ok(wish);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _service.DeleteWishBook(id);
            return Ok();
        }



    }
}
