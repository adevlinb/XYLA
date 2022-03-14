import SearchBar from '../../components/SearchBar/SearchBar';
import DisplayResults from '../../components/DisplayResults/DisplayResults';
import * as booksAPI from '../../utilities/books-api';
import { useState } from 'react';

export default function SearchBooksPage({ addBook }) {

  const [queryResults, setQueryResults] = useState([]);

  async function searchForBooks(query) {
    const bookSearchResult = await booksAPI.searchBooks(query);
    setQueryResults(bookSearchResult.items);
  }

  return (
    <>
    <div className="horizontal">
      <div className="verticalOne">
        <h3>QUICK LINKS</h3>
        <h5><a href="https://www.google.com/search?q=local+bookstore" target="_blank">Find Local Bookstores</a></h5>
        <h5><a href="https://www.goodreads.com/" target="_blank">Goodreads</a></h5>
        <h5><a href="https://books.google.com/" target="_blank">Google Books</a></h5>
        <h5><a href="https://www.nytimes.com/books/best-sellers/" target="_blank">NYT Best Sellers</a></h5>
        <h5><a href="https://apps.npr.org/best-books/#view=covers&year=2021" target="_blank">NPR Favorites</a></h5>
      </div>
      <div className="verticalTwo">
        <h1>Search for new books!</h1>
        <SearchBar searchForBooks={searchForBooks} />
        <DisplayResults queryResults={queryResults} addBook={addBook} />
      </div>
    </div>
    <footer>ALL RIGHTS RESERVED</footer>
   
    </>
  );
}

