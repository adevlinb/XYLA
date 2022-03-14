import './LibraryPage.css'
import DisplayLibrary from '../../components/DisplayLibrary/DisplayLibrary';
import * as booksAPI from '../../utilities/books-api';
import * as postsAPI from '../../utilities/posts-api';
import { useState, useEffect } from 'react';
import DisplayFavorites from '../../components/DisplayFavorites/DisplayFavorites';
import DisplayRecs from '../../components/DisplayRecs/DisplayRecs';
import DisplayPosts from '../../components/DisplayPosts/DisplayPosts';
import DisplayProfile from '../../components/DisplayProfile/DisplayProfile';
import DisplaySettings from '../../components/DisplaySettings/DisplaySettings';

export default function LibraryPage({library, setLibrary}) {
  const [show, setShow] = useState({
    myShelf: true, 
    recShelf: false,
    favShelf: false,
    postShelf: false,
    profile: false,
    settings: false
  })
  
  //array of user posts..
  const [userPosts, setUserPosts] = useState(false);
  const [myRecs, setMyRecs] = useState(false);

  function toggleShow(shelf) {
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
        console.log(recs, "myshelf recs")
        setMyRecs(recs);

      }
      getMyShelf();  
    }, []);

    async function createPost(formData) {
      const posts = await postsAPI.addNewPost(formData)
      setUserPosts(posts);
      console.log(posts);
    }

  async function addComment(commentData) {
    await postsAPI.addCommentToPost(commentData);
  }

  return (
    <>
    <div className="horizontal">
      <div className="verticalOne">
        {/* <img src="/images/XYLA_LOGO.png" alt="XYLA" className='logo' /> */}
        <h3>MY BOOKSHELF</h3>
        <button onClick={() => toggleShow('myShelf')}> My Books</button>
        <button onClick={() => toggleShow('recShelf')}> Recommendations</button>
        <button onClick={() => toggleShow('favShelf')}> My Favorites</button>
        <button onClick={() => toggleShow('postShelf')}>  Make a post!</button>
        <button onClick={() => toggleShow('profile')}> My Profile</button>
        <button onClick={() => toggleShow('settings')}>  Settings</button>
      </div>
      <div className="verticalTwo">
        {show.myShelf && <DisplayLibrary library={library} />}
        {show.recShelf && <DisplayRecs myRecs={myRecs} />}
        {show.favShelf && <DisplayFavorites/>}
        {show.postShelf && <DisplayPosts library={library} createPost={createPost} userPosts={userPosts} addComment={addComment}/>}
        {show.profile && <DisplayProfile />}
        {show.settings && <DisplaySettings />}
      </div>
      <div className="space"></div>
      <div className="verticalThree">

      </div>
    </div>
      <footer>ALL RIGHTS RESERVED</footer>
      </>
  );
}