import './LibraryPage.css'
import DisplayLibrary from '../../components/DisplayLibrary/DisplayLibrary';
import * as booksAPI from '../../utilities/books-api';
import * as postsAPI from '../../utilities/posts-api';
import * as profilesAPI from '../../utilities/profiles-api';
import { useState, useEffect } from 'react';
import DisplayFavorites from '../../components/DisplayFavorites/DisplayFavorites';
import DisplayRecs from '../../components/DisplayRecs/DisplayRecs';
import DisplayPosts from '../../components/DisplayPosts/DisplayPosts';
import DisplayLibraryItemDetail from '../../components/DisplayLibraryItemDetail/DisplayLibraryItemDetail';
import UserSettings from '../../components/UserSettings/UserSettings';
import { getUser } from '../../utilities/users-service';

export default function LibraryPage({ library, setLibrary, setUser, user}) {
  const [show, setShow] = useState({
    myShelf: true, 
    recShelf: false,
    favShelf: false,
    postShelf: false,
    bookDetail: false,
    userSettings: false,
  })
  
  //array of user posts..
  const [userPosts, setUserPosts] = useState(false);
  const [myRecs, setMyRecs] = useState(false);

  function toggleShow(shelf, userId, bookId) {
    const newShowState = {...show};
    for (let key in newShowState) {
      newShowState[key] = false;
    }
    newShowState[shelf] = true;
    setShow(newShowState);
  }


  useEffect(() => {
      async function getMyShelf () {
        const books = await booksAPI.getLibrary();
        setLibrary(books);
        const userPosts = await postsAPI.getUserPosts();
        setUserPosts(userPosts);
        const recs = await booksAPI.getMyRecs();
        setMyRecs(recs);
      }
      getMyShelf();  
    }, []);

  async function createPost(formData) {
    if(formData.book === undefined) return;
    const posts = await postsAPI.addNewPost(formData)
    setUserPosts(posts);
    console.log(posts);
  }

  async function addComment(commentData) {
    await postsAPI.addCommentToPost(commentData);
    const userPosts = await postsAPI.getUserPosts();
    setUserPosts(userPosts);
  }

  async function updateSettings(settings){
    let updatedUser = await profilesAPI.updateUserSettings(user._id, settings);
    setUser(updatedUser)
  }

  

  return (
    <>
    <div className="horizontal">
      <div className="verticalOne">
          <div id="profileStats">
            <h3>{user.name}'s <span>XYLA</span></h3>
            <i className="material-icons" id="landingIcons1">account_circle</i>
            <h5># of books: <span>{library.length}</span></h5>
            <h5># of recs: <span>{myRecs.length}</span></h5>
            <h5># of posts: <span>{userPosts.length}</span></h5>
          </div>
        <button className="sideButtons" onClick={() => toggleShow('myShelf')}> My Books</button>
        <button className="sideButtons" onClick={() => toggleShow('recShelf')}> Recommendations</button>
        <button className="sideButtons" onClick={() => toggleShow('favShelf')}> My Favorites</button>
        <button className="sideButtons" onClick={() => toggleShow('postShelf')}>  Make a post!</button>
        <button className="sideButtons" onClick={() => toggleShow('userSettings')}>  User Settings</button>
      </div>
      <div className="verticalTwo">
          {show.myShelf && <DisplayLibrary library={library} user={user} toggleShow={toggleShow}/>}
          {show.recShelf && <DisplayRecs myRecs={myRecs} user={user}/>}
          {show.favShelf && <DisplayFavorites user={user}/>}
          {show.postShelf && <DisplayPosts library={library} createPost={createPost} userPosts={userPosts} addComment={addComment} user={user}/>}
          {show.userSettings && <UserSettings updateSettings={updateSettings} user={user} />}
          {show.bookDetail && <DisplayLibraryItemDetail />}
      </div>
      <div className="space"></div>
      <div className="verticalThree">
          <div className="quickLinks">
              <h3>QUICK LINKS</h3>
              <i className="material-icons" id="link">link</i>
              <h5><a href="https://www.google.com/search?q=local+bookstore" rel="noreferrer" target="_blank">Find Local Bookstores</a></h5>
              <h5><a href="https://www.goodreads.com/" rel="noreferrer" target="_blank">Goodreads</a></h5>
              <h5><a href="https://books.google.com/" rel="noreferrer" target="_blank">Google Books</a></h5>
              <h5><a href="https://www.nytimes.com/books/best-sellers/" rel="noreferrer" target="_blank">NYT Best Sellers</a></h5>
              <h5><a href="https://apps.npr.org/best-books/#view=covers&year=2021" rel="noreferrer" target="_blank">NPR Favorites</a></h5>
          </div>
      </div>
    </div>
      <footer>ALL RIGHTS RESERVED</footer>
      </>
  );
}