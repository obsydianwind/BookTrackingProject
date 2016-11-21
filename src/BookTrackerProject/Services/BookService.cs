using BookTrackerProject.Interfaces;
using BookTrackerProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookTrackerProject.Services
{
    public class BookService : IBookService
    {
        private IGenericRepository _repo;


        //Get all Books
        public IList<Book> GetAllBooks(string userName)
        {
            var user = _repo.Query<ApplicationUser>().Where(u => u.UserName == userName).FirstOrDefault();
            user.BooksOwned = new List<Book>();
            IList<Book> allBooks = _repo.Query<Book>().ToList();
            IList<Book> ownedBooks = user.BooksOwned;
            //return _repo.Query<Book>().ToList();
            return user.BooksOwned;
        }

        //Get Single Book by Id
        public Book GetBookById(int id)
        {
            return _repo.Query<Book>().Where(b => b.Id == id).FirstOrDefault();
        }

        //Post single book to database
        public void SaveBook(Book book, string userName)
        {
            var user = _repo.Query<ApplicationUser>().Where(u => u.UserName == userName).FirstOrDefault();
            //book.Owner.Id = user.Id;


            if(book.Id == 0)
            {

                _repo.Add(book);
                
                //var test = book.Id;
            }
            else
            {
                _repo.Update(book);
            }

            user.BooksOwned = new List<Book>();
            user.BooksOwned.Add(book);
            _repo.SaveChanges();

        }

        //Delete single book from database by id
        public void DeleteBook(int id)
        {
            Book bookToDelete = _repo.Query<Book>().Where(b => b.Id == id).FirstOrDefault();
            _repo.Delete(bookToDelete);
        }

        //Query the database by Author
        public List<Book> SearchByAuthor(string searchTerm)
        {
            var books = _repo.Query<Book>();
            return (from b in books
                    where b.Author == searchTerm
                    select new Book
                    {
                        Title = b.Title,
                        Author = b.Author
                    }).ToList();
        }

        public BookService(IGenericRepository repo)
        {
            this._repo = repo;
        }
    }
}
