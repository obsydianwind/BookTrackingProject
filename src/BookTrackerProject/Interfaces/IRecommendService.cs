using System.Collections.Generic;
using BookTrackerProject.Models;

namespace BookTrackerProject.Interfaces
{
    public interface IRecommendService
    {
        void DeleteRecBook(int id);
        IList<Recommend> GetAllRecBooks();
        Recommend GetRecBookById(int id);
        void SaveRecBook(Recommend recommend);
        List<Recommend> SearchByRecAuthor(string searchTerm);
    }
}