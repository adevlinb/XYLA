import './LibraryPage.css'
import DisplayLibrary from '../../components/DisplayLibrary/DisplayLibrary';
import * as booksAPI from '../../utilities/books-api';
import { useEffect } from 'react';

export default function LibraryPage({ library, setLibrary }) {

useEffect(() => {
    async function getData () {
      const books = await booksAPI.getLibrary();
      setLibrary(books);
    }
    getData();  
  }, []);

  return (
    <div className="horizontal">
      <div className="verticalOne">
        {/* <img src="/images/XYLA_LOGO.png" alt="XYLA" className='logo' /> */}
        <h3>MY BOOKSHELF</h3>
        <h5>My Books</h5>
        <h5>Recommendations</h5>
        <h5>My Favorites</h5>
      </div>
      <div className="verticalTwo">
        <h1>My Bookshelf</h1>
        <DisplayLibrary library={library} />
      </div>
    </div>
  );
}