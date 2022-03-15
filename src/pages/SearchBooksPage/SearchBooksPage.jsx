import SearchBar from '../../components/SearchBar/SearchBar';
import DisplayResults from '../../components/DisplayResults/DisplayResults';
import SearchBooksScroll from "../../components/SearchBooksScroll/SearchBooksScroll"
import * as booksAPI from '../../utilities/books-api';
import { useState, useEffect } from 'react';

export default function SearchBooksPage({ addBook, user }) {
  const [library, setLibrary] = useState([]);
  const [queryResults, setQueryResults] = useState([]);

  async function searchForBooks(query) {
    const bookSearchResult = await booksAPI.searchBooks(query);
    setQueryResults(bookSearchResult.items);
  }

  useEffect(() => {
    async function getMyShelf() {
      const books = await booksAPI.getLibrary();
      setLibrary(books);
    }
    getMyShelf();
  }, []);

  const book = library.map((b) => (
    <SearchBooksScroll b={b} key={b._id} />
  ));


  return (
    <>
    <div className="horizontal">
      <div className="verticalOne">
          <i className="material-icons" id="landingIcons1">auto_stories</i>
          <h3>{user.name}'s BOOKS:</h3>
          {book}
      </div>
      <div className="verticalTwo">
        <h1>Search for new books!</h1>
        <SearchBar searchForBooks={searchForBooks} />
        <DisplayResults queryResults={queryResults} addBook={addBook} />
      </div>
      <div className="verticalThree">
          <h3>QUICK LINKS</h3>
          <h5><a href="https://www.google.com/search?q=local+bookstore" rel="noreferrer" target="_blank">Find Local Bookstores</a></h5>
          <h5><a href="https://www.goodreads.com/" rel="noreferrer" target="_blank">Goodreads</a></h5>
          <h5><a href="https://books.google.com/" rel="noreferrer" target="_blank">Google Books</a></h5>
          <h5><a href="https://www.nytimes.com/books/best-sellers/" rel="noreferrer" target="_blank">NYT Best Sellers</a></h5>
          <h5><a href="https://apps.npr.org/best-books/#view=covers&year=2021" rel="noreferrer" target="_blank">NPR Favorites</a></h5>
      </div>
    </div>
    <footer>ALL RIGHTS RESERVED</footer>
   
    </>
  );
}

