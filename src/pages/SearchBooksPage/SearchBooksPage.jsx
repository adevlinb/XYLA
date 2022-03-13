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
    <div className="horizontal">
      <div className="verticalOne">
          <h3>QUICK SEARCHES</h3>
          <h5>Shortcut Link</h5>
          <h5>Shortcut Link</h5>
          <h5>Shortcut Link</h5>
          <h5>Shortcut Link</h5>
          <h5>Shortcut Link</h5>
        </div>
        <div className="verticalTwo">
          <h1>Search for new books!</h1>
          <SearchBar searchForBooks={searchForBooks} />
          <DisplayResults queryResults={queryResults} addBook={addBook} />
      </div>
    </div>
  
  );
}
