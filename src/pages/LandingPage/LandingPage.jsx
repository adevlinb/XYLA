import { useState } from 'react';
// import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import LoginForm from '../../components/LoginForm/LoginForm';
import AuthPage from '../../components/AuthPage/AuthPage';
import RealLandingPage from '../../components/RealLandingPage/RealLandingPage';

import './LandingPage.css'

export default function LandingPage({ setUser }) {
  // const [showLogin, setShowLogin] = useState(true);
  const [showLanding, setShowLanding] = useState(true);


  return (
    <main>
      {showLanding ? 
        <>
          <button onClick={() => setShowLanding(!showLanding)}>Join XYLA!</button>
          <RealLandingPage />
        </>
        :
        <>
          <button onClick={() => setShowLanding(!showLanding)}>Back to Landing Page</button>
          <AuthPage setUser={setUser} />
        </>
      }

    </main>
  );
}




{/* <button onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'Sign Up' : 'Log In'}</button>
  { showLogin ?
    <LoginForm setUser={setUser} />
    :
    <SignUpForm setUser={setUser} />
  } */}