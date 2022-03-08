import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import HomePage from '../HomePage/HomePage';
import SearchBooksPage from '../SearchBooksPage/SearchBooksPage';
import SocialWallPage from '../SocialWallPage/SocialWallPage';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/home" element={<HomePage />} />
              <Route path="/search" element={<SearchBooksPage />} />
              <Route path="/wall" element={<SocialWallPage />} />
              <Route path="/*" element={<Navigate to="/home" />} />
            </Routes>
          </>
          :
          <>
          <LandingPage setUser={setUser} />
          <img src="/images/XYLA_LOGO.png" alt="XYLA" id='logo' />
          </>
      }
    </main>
  );
}
