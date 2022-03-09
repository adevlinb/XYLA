import './LibraryPage.css'
import DisplayLibrary from '../../components/DisplayLibrary/DisplayLibrary';
import * as booksAPI from '../../utilities/books-api';
import { useState, useEffect } from 'react';
import DisplayFavorites from '../../components/DisplayFavorites/DisplayFavorites';
import DisplayRecs from '../../components/DisplayRecs/DisplayRecs';
import DisplayPosts from '../../components/DisplayPosts/DisplayPosts';
import DisplayProfile from '../../components/DisplayProfile/DisplayProfile';
import DisplaySettings from '../../components/DisplaySettings/DisplaySettings';

export default function LibraryPage({ library, setLibrary }) {
  const [myShelf, setMyShelf] = useState(true);
  const [recShelf, setRecShelf] = useState(false);
  const [favShelf, setFavShelf] = useState(false);
  const [post, setPostShelf] = useState(false);
  const [profile, setProfileShelf] = useState(false);
  const [settings, setSettingsShelf] = useState(false);

  useEffect(() => {
      async function getData () {
        const books = await booksAPI.getLibrary();
        setLibrary(books);
      }
      getData();  
    }, []);

    function handleSetBooks() {
      setMyShelf(true)
      setRecShelf(false)
      setFavShelf(false)
      setPostShelf(false)
      setProfileShelf(false)
      setSettingsShelf(false)
    }

    function handleSetRecs() {
      setMyShelf(false)
      setRecShelf(true)
      setFavShelf(false)
      setPostShelf(false)
      setProfileShelf(false)
      setSettingsShelf(false)
    }
    function handleSetFavs() {
      setMyShelf(false)
      setRecShelf(false)
      setFavShelf(true)
      setPostShelf(false)
      setProfileShelf(false)
      setSettingsShelf(false)
    }
    function handleSetPosts() {
      setMyShelf(false)
      setRecShelf(false)
      setFavShelf(false)
      setPostShelf(true)
      setProfileShelf(false)
      setSettingsShelf(false)
    }
    function handleSetProfile() {
      setMyShelf(false)
      setRecShelf(false)
      setFavShelf(false)
      setPostShelf(false)
      setProfileShelf(true)
      setSettingsShelf(false)
    }
    function handleSetSettings() {
      setMyShelf(false)
      setRecShelf(false)
      setFavShelf(false)
      setPostShelf(false)
      setProfileShelf(false)
      setSettingsShelf(true)
    }


  return (
    <div className="horizontal">
      <div className="verticalOne">
        {/* <img src="/images/XYLA_LOGO.png" alt="XYLA" className='logo' /> */}
        <h3>MY BOOKSHELF</h3>
        <button onClick={handleSetBooks}>My Books</button>
        <button onClick={handleSetRecs}>Recommendations</button>
        <button onClick={handleSetFavs}>My Favorites</button>
        <button onClick={handleSetPosts}>Make a post!</button>
        <button onClick={handleSetProfile}>My Profile</button>
        <button onClick={handleSetSettings}>Settings</button>
      </div>
      <div className="verticalTwo">
        {myShelf ? <DisplayLibrary library={library} /> : <></>}
        {recShelf ? <DisplayRecs library={library} /> : <></>}
        {favShelf ? <DisplayFavorites library={library} /> : <></>}
        {post ? <DisplayPosts library={library} /> : <></>}
        {profile ? <DisplayProfile library={library} /> : <></>}
        {settings ? <DisplaySettings library={library} /> : <></>}
      </div>
    </div>
  );
}