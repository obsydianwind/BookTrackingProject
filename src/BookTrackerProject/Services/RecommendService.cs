using BookTrackerProject.Interfaces;
using BookTrackerProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookTrackerProject.Services
{
    public class RecommendService : IRecommendService
    {
        private IGenericRepository _repo;

        //Get all books in Recommended list
        public IList<Recommend> GetAllRecBooks()
        {
            var look = _repo.Query<Recommend>().ToList();
            return look;
        }


        //Get A single book
        public Recommend GetRecBookById(int id)
        {
            return _repo.Query<Recommend>().Where(r => r.Id == id).FirstOrDefault();
        }

        //Post a book to Recommended list
        public void SaveRecBook(Recommend recommend)
        {
            if(recommend.Id == 0)
            {
                _repo.Add(recommend);
            }
            else
            {
                _repo.Update(recommend);
            }
        }

        public void DeleteRecBook(int id)
        {
            Recommend bookToDelete = _repo.Query<Recommend>().Where(r => r.Id == id).FirstOrDefault();
            _repo.Delete(bookToDelete);
        }

        //Query database By Author
        public List<Recommend> SearchByRecAuthor(string searchTerm)
        {
            var recBook = _repo.Query<Recommend>();
            return (from r in recBook
                    where r.Author == searchTerm
                    select new Recommend
                    {
                        Title = r.Title,
                        Author = r.Author

                    }).ToList();
        }


        public RecommendService(IGenericRepository repo)
        {
            this._repo = repo;
        }
    }
}
