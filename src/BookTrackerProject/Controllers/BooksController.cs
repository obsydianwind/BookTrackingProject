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
    public class BooksController : Controller
    {
        private IBookService _service;

        public BooksController(IBookService service)
        {
            this._service = service;
        }

        [HttpGet]
        public IEnumerable<Book> Get()
        {
            string userName = this.User.Identity.Name;
            var test = _service.GetAllBooks(userName);
            return test;
            //return _service.GetAllBooks(userName);

        }



        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_service.GetBookById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody]Book book)
        {
            _service.SaveBook(book, this.User.Identity.Name); 
            return Ok(book);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _service.DeleteBook(id);
            return Ok();
        }

    }
}
