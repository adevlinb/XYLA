import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import LibraryPage from '../LibraryPage/LibraryPage';
import SearchBooksPage from '../SearchBooksPage/SearchBooksPage';
import SocialWallPage from '../SocialWallPage/SocialWallPage';
import ClubPage from '../ClubPage/ClubPage';
import ChatPage from '../ChatPage/ChatPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import * as booksAPI from '../../utilities/books-api';
// import * as usersAPI from '../../utilities/users-api';
import { io } from "socket.io-client";
const socket = io.connect();
socket.on('connect', () => {
  console.log('connected to server');
});
socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});





export default function App() {
  const [user, setUser] = useState(getUser());
  const [library, setLibrary] = useState([]);
  const [userLocation, setUserLocation] = useState({
    currLocation: "",
    currChat: "",
  });
  

  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    console.log(location);
    setUserLocation({
      currLocation: location.pathName,
      currChat: "",
    });
  }, [location]);

  socket.on("disconnect", () => {
    setUserLocation({
      currLocation: "",
      currChat: "",
    });
    console.log(userLocation, "disconnect")
  });

  async function addBook(newBook) {
    const books = await booksAPI.addNewBook(newBook);
    setLibrary(books.userBooks);
    navigate('/library');
  }

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/library" element={<LibraryPage library={library} setLibrary={setLibrary} setUser={setUser} user={user}/>} />
              <Route path="/search" element={<SearchBooksPage addBook={addBook} user={user} />}  />
              <Route path="/wall" element={<SocialWallPage library={library} user={user} setUser={setUser}/>} />
              <Route path="/clubs" element={<ClubPage user={user} />} />
              <Route path="/chat" element={<ChatPage user={user} />} />
              <Route path="/*" element={<Navigate to="/library" />} />
            </Routes>
          </>
          :
          <>
          <LandingPage setUser={setUser} />
          </>
      }
    </main>
  
  );
}
