import './HomePage.css'
import SearchBar from '../../components/SearchBar/SearchBar'
import DisplayResults from '../../components/DisplayResults/DisplayResults'
import * as booksAPI from '../../utilities/books-api';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const API_KEY = process.env.REACT_APP_API_KEY
  const [queryResults, setQueryResults] = useState([]);

  async function searchForBooks(query) {
    let results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(result => {
      console.log(result)
      setQueryResults(result.items)
    });
    console.log('setResults')
  }

    async function addBook(newBook){
      const book = await booksAPI.addNewBook(newBook)
      console.log('homepage')
    }

  return (
    <>
    <h1>HomePage</h1>
      <SearchBar searchForBooks={searchForBooks}/>
      <DisplayResults queryResults={queryResults} addBook={addBook} />
    </>
  );
}