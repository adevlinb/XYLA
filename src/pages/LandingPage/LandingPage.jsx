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
                <RealLandingPage setShowLanding={setShowLanding} showLanding={showLanding} />
                <div id="mainLogo">
                  <img src="/images/XYLA_LOGO.png" alt="XYLA" id='logo' />
                </div>
              </>
              :
              <>
                <img className="landingPic" src="/images/Landing1.png" alt="BooksLandingPhoto" />
                <RealLandingPage setShowLanding={setShowLanding} showLanding={showLanding} />
                <div id="horizontal">
                    <img src="/images/XYLA_LOGO.png" alt="XYLA" id='logo' />
                    <AuthPage setUser={setUser} />
                </div>
           
              </>
            }
        </div>
    </main>
  );
}