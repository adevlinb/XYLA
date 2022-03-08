import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <img src="/images/XYLA_LOGO.png" alt="XYLA" className='logo' />
      <Link to="/home">My Bookshelf</Link>
      &nbsp; | &nbsp;
      <Link to="/search">Find Books</Link>
      &nbsp; | &nbsp;
      <Link to="/wall">Social Wall</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  );
}