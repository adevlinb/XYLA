import './HomePage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import DisplayResults from '../../components/DisplayResults/DisplayResults'
import DisplayLibrary from '../../components/DisplayLibrary/DisplayLibrary'
import * as booksAPI from '../../utilities/books-api';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const API_KEY = process.env.REACT_APP_API_KEY
  const [queryResults, setQueryResults] = useState([]);
  const [library, setLibrary] = useState([]);

  async function searchForBooks(query) {
    try{
      let results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        setQueryResults(result.items)
      });
      console.log('setResults')
    } catch (error) {
      console.log(error);
    }
  }

    async function addBook(newBook){
      const books = await booksAPI.addNewBook(newBook)
      // const shelf = books[0].library
      console.log(books.library)
      setLibrary(books.library)
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