import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import LibraryPage from '../LibraryPage/LibraryPage';
import SearchBooksPage from '../SearchBooksPage/SearchBooksPage';
import SocialWallPage from '../SocialWallPage/SocialWallPage';
import ClubPage from '../ClubPage/ClubPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import * as booksAPI from '../../utilities/books-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [queryResults, setQueryResults] = useState([]);
  const [library, setLibrary] = useState([]);

  

  async function addBook(newBook) {
    const books = await booksAPI.addNewBook(newBook)
    console.log(books.userBooks, "im home")
    setLibrary(books.userBooks)
  }

  async function searchForBooks(query) {
    const bookSearchResult = await booksAPI.searchBooks(query);
    setQueryResults(bookSearchResult.items)
  }


  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/library" element={<LibraryPage library={library} setLibrary={setLibrary} />} />
              <Route path="/search" element={<SearchBooksPage queryResults={queryResults} setQueryResults={setQueryResults} searchForBooks={searchForBooks} addBook={addBook}/>} />
              <Route path="/wall" element={<SocialWallPage />} />
              <Route path="/clubs" element={<ClubPage />} />
              <Route path="/*" element={<Navigate to="/library" />} />
            </Routes>
          </>
          :
          <>
          <LandingPage setUser={setUser} />
          <img src="/images/XYLA_LOGO.png" alt="XYLA" id='logo' />
          </>
      }
      <footer>ALL RIGHTS RESERVED</footer>
    </main>
  );
}
