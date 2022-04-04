import { useState } from 'react';
import AuthPage from '../../components/AuthPage/AuthPage';
import RealLandingPage from '../../components/RealLandingPage/RealLandingPage';
import * as usersService from '../../utilities/users-service';
import './LandingPage.css'

export default function LandingPage({ setUser }) {
  const [showLanding, setShowLanding] = useState(true);
  const [error, setError] = useState('');
  const guestCredentials = {
    email: 'guest@guest.com',
    password: 'guestAccount1!'
  }

  async function guestLogin() {
    console.log('click');
    // Prevent form from being submitted to the server
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(guestCredentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <main>
        <div className="mainDiv">
            {showLanding ? 
              <>
                <img className="landingPic" src="/images/Landing1.png" alt="BooksLandingPhoto" />
                <RealLandingPage setShowLanding={setShowLanding} showLanding={showLanding} guestLogin={guestLogin}/>
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