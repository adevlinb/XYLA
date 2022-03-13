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
          <Link to="/library">My Bookshelf</Link>
          &nbsp; | &nbsp;
          <Link to="/search">Find Books</Link>
          &nbsp; | &nbsp;
          <Link to="/wall">Social Wall</Link>
          &nbsp; | &nbsp;
          <Link to="/clubs">Clubs!</Link>
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