using System.Collections.Generic;
using BookTrackerProject.Models;

namespace BookTrackerProject.Interfaces
{
    public interface IBookService
    {
        void DeleteBook(int id);
        IList<Book> GetAllBooks(string userName);
        Book GetBookById(int id);
        void SaveBook(Book book, string userName);
        List<Book> SearchByAuthor(string searchTerm);
    }
}