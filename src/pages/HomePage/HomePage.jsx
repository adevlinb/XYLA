import './HomePage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import DisplayResults from '../../components/DisplayResults/DisplayResults'
import DisplayLibrary from '../../components/DisplayLibrary/DisplayLibrary'
import * as booksAPI from '../../utilities/books-api';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [queryResults, setQueryResults] = useState([]);
  const [library, setLibrary] = useState([]);

  async function searchForBooks(query) {
    const bookSearchResult = await booksAPI.searchBooks(query);
    setQueryResults(bookSearchResult.items)
  }

    async function addBook(newBook){
      const books = await booksAPI.addNewBook(newBook)
      console.log(books.userBookSchema, "im home")
      setLibrary(books.userBookSchema)
    }

  return (
    <>
    <h1>HomePage</h1>
      <SearchBar searchForBooks={searchForBooks}/>
      <DisplayResults queryResults={queryResults} addBook={addBook} />
      <DisplayLibrary library={library} />
    </>
  );
}