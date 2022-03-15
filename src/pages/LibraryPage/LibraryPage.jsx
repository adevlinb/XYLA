import './LibraryPage.css'
import DisplayLibrary from '../../components/DisplayLibrary/DisplayLibrary';
import * as booksAPI from '../../utilities/books-api';
import * as postsAPI from '../../utilities/posts-api';
import { useState, useEffect } from 'react';
import DisplayFavorites from '../../components/DisplayFavorites/DisplayFavorites';
import DisplayRecs from '../../components/DisplayRecs/DisplayRecs';
import DisplayPosts from '../../components/DisplayPosts/DisplayPosts';

export default function LibraryPage({library, setLibrary, user}) {
  const [show, setShow] = useState({
    myShelf: true, 
    recShelf: false,
    favShelf: false,
    postShelf: false,
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
          <div id="profileStats">
          <h3>{user.name}'s <span>XYLA</span></h3>
          <i className="material-icons" id="landingIcons1">account_circle</i>
            <h5># of books: <span>21</span></h5>
            <h5># of recs: <span>21</span></h5>
            <h5># of posts: <span>21</span></h5>
          </div>
        <button onClick={() => toggleShow('myShelf')}> My Books</button>
        <button onClick={() => toggleShow('recShelf')}> Recommendations</button>
        <button onClick={() => toggleShow('favShelf')}> My Favorites</button>
        <button onClick={() => toggleShow('postShelf')}>  Make a post!</button>
      </div>
      <div className="verticalTwo">
        {show.myShelf && <DisplayLibrary library={library} user={user}/>}
          {show.recShelf && <DisplayRecs myRecs={myRecs} user={user}/>}
          {show.favShelf && <DisplayFavorites user={user}/>}
          {show.postShelf && <DisplayPosts library={library} createPost={createPost} userPosts={userPosts} addComment={addComment} user={user}/>}
      </div>
      <div className="space"></div>
      <div className="verticalThree">
          <h3>QUICK LINKS</h3>
          <h5><a href="https://www.google.com/search?q=local+bookstore" target="_blank">Find Local Bookstores</a></h5>
          <h5><a href="https://www.goodreads.com/" target="_blank">Goodreads</a></h5>
          <h5><a href="https://books.google.com/" target="_blank">Google Books</a></h5>
          <h5><a href="https://www.nytimes.com/books/best-sellers/" target="_blank">NYT Best Sellers</a></h5>
          <h5><a href="https://apps.npr.org/best-books/#view=covers&year=2021" target="_blank">NPR Favorites</a></h5>
      </div>
    </div>
      <footer>ALL RIGHTS RESERVED</footer>
      </>
  );
}