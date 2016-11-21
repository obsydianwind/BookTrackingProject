using BookTrackerProject.Interfaces;
using BookTrackerProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookTrackerProject.Services
{
    public class WishService : IWishService
    {
        private IGenericRepository _repo;

        //Get all Books for Wishlist
        public IList<Wish> GetAllWishBooks()
        {
            return _repo.Query<Wish>().ToList();
        }

        //Get single wishlist book by id
        public Wish GetWishBookById(int id)
        {
            return _repo.Query<Wish>().Where(b => b.Id == id).FirstOrDefault();
        }

        //Post single book to wishlist database
        public void SaveWishBook(Wish wish)
        {
            if(wish.Id == 0)
            {
                _repo.Add(wish);
            }
            else
            {
                _repo.Update(wish);
            }
        }

        //Delete single book from wishlist database by Id
        public void DeleteWishBook(int id)
        {
            Wish bookToDelete = _repo.Query<Wish>().Where(b => b.Id == id).FirstOrDefault();
            _repo.Delete(bookToDelete);
        }

        //Query the wishlist database by Author
        public List<Wish> SearchByWishAuthor(string searchTerm)
        {
            var books = _repo.Query<Wish>();
            return (from b in books
                    where b.Author == searchTerm
                    select new Wish
                    {
                        Title = b.Title,
                        Author = b.Author
                    }).ToList();
        }

        public WishService(IGenericRepository repo)
        {
            this._repo = repo;
        }
    }
}
