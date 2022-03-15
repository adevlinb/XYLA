import { useState } from 'react';
import AuthPage from '../../components/AuthPage/AuthPage';
import RealLandingPage from '../../components/RealLandingPage/RealLandingPage';

import './LandingPage.css'

export default function LandingPage({ setUser }) {
  // const [showLogin, setShowLogin] = useState(true);
  const [showLanding, setShowLanding] = useState(true);


  return (
    <main>
        <div className="mainDiv">
            {showLanding ? 
              <>
                <img className="landingPic" src="/images/Landing1.png" alt="BooksLandingPhoto" />
                <RealLandingPage />
                <button onClick={() => setShowLanding(!showLanding)}>Join XYLA!</button>
                <img src="/images/XYLA_LOGO.png" alt="XYLA" id='logo' />
           
              </>
              :
              <>
                <img className="landingPic" src="/images/Landing1.png" alt="BooksLandingPhoto" />
                <RealLandingPage />
                <button onClick={() => setShowLanding(!showLanding)}>Back to Landing Page</button>
                <AuthPage setUser={setUser} />
           
              </>
            }
        </div>
    </main>
  );
}




{/* <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
  { showLogin ?
    <LoginForm setUser={setUser} />
    :
    <SignUpForm setUser={setUser} />
  } */}