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
    public class RecommendsController : Controller
    {
        private IRecommendService _service;

        public RecommendsController(IRecommendService service)
        {
            this._service = service;
        }

        [HttpGet]
        public IEnumerable<Recommend> Get()
        {
            var look = _service.GetAllRecBooks();
            return look;

        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_service.GetRecBookById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody]Recommend recommend)
        {
            _service.SaveRecBook(recommend);
            return Ok(recommend);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _service.DeleteRecBook(id);
            return Ok();
        }


    }
}
