import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
      <nav>
        <div>
          <img src="/images/XYLA_LOGO.png" alt="XYLA" className='logo' />
        </div>
        <div>
        <Link to="/library">HOME</Link>
          &nbsp; | &nbsp;
          <Link to="/search">FIND BOOKS</Link>
          &nbsp; | &nbsp;
          <Link to="/wall">SOCIALIZE</Link>
          &nbsp; | &nbsp;
          <Link to="/clubs">CLUBS!</Link>
          &nbsp; | &nbsp;
          <Link to="/chat">CHAT!</Link>
          &nbsp; | &nbsp;
          <span>Welcome, {user.name}</span>
          &nbsp; | &nbsp;
        </div>
        <div>
          <Link onClick={handleLogOut} to="">Log Out</Link>
        </div> 
      </nav>
  );
}