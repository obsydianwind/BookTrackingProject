using System.Collections.Generic;
using BookTrackerProject.Models;

namespace BookTrackerProject.Interfaces
{
    public interface IWishService
    {
        void DeleteWishBook(int id);
        IList<Wish> GetAllWishBooks();
        Wish GetWishBookById(int id);
        void SaveWishBook(Wish wish);
        List<Wish> SearchByWishAuthor(string searchTerm);
    }
}