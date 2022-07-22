import './SocialWallPage.css'
import * as postsAPI from '../../utilities/posts-api';
import * as profilesAPI from '../../utilities/profiles-api';
import * as booksAPI from '../../utilities/books-api';
import DisplayAllPosts from '../../components/DisplayAllPosts/DisplayAllPosts';
import DisplayFindFriends from '../../components/DisplayFindFriends/DisplayFindFriends';
import DisplayProfileDetail from '../../components/DisplayProfileDetail/DisplayProfileDetail';
import DisplayLibraryItemDetail from '../../components/DisplayLibraryItemDetail/DisplayLibraryItemDetail';
import DisplaySocialAlerts from '../../components/SocialAlerts/DisplaySocialAlerts';
import DisplayFriends from '../../components/DisplayFriends/DisplayFriends';
import { useState, useEffect } from 'react'

export default function SocialWallPage({ user, setUser }) {
    const [allPosts, setAllPosts] = useState([]);
    const [allProfiles, setAllProfiles] = useState([]);
    const [profile, setProfile] = useState({});
    const [userLibrary, setUserLibrary] = useState([]);
    const [myLibrary, setMyLibrary] = useState([]);
    const [userRecs, setUserRecs] = useState([]);

    const [show, setShow] = useState({
        displayAllPosts: true,
        findFriends: false,
        profileDetail: false,
        socialAlerts: false,
        bookDetail: false,
    })

    //toggle component and get other users' profile / shelf info
    async function toggleShow(shelf, userId, bookId) {
        const newShowState = { ...show };
        for (let key in newShowState) {
            newShowState[key] = false;
        }
        if (userId) {
            const pro = await profilesAPI.findProfile(userId)
            const books = await booksAPI.getUserLibrary(userId);
            const recs = await booksAPI.getUserRecs(userId);
            setProfile(pro);
            setUserLibrary(books);
            setUserRecs(recs);
        }
        newShowState[shelf] = true;
        setShow(newShowState);
    }

    useEffect(() => {
        async function getMyBooks() {
            const books = await booksAPI.getLibrary();
            setMyLibrary(books);
            const allPosts = await postsAPI.getAllPosts();
            setAllPosts(allPosts);
            const profiles = await profilesAPI.getAllProfiles();
            setAllProfiles(profiles);
        }
        getMyBooks();
    }, []);

    // useEffect(() => {
    //     async function getPosts() {
    //         const allPosts = await postsAPI.getAllPosts();
    //         setAllPosts(allPosts);
    //     }
    //     getPosts();
    // }, []);

    // useEffect(() => {
    //     async function getProfiles() {
    //         const profiles = await profilesAPI.getAllProfiles();
    //         setAllProfiles(profiles);
    //     }
    //     getProfiles();
    // }, []);
    async function addFriendRequest(userId, profileId){
        const profiles = await profilesAPI.friendRequest(userId, profileId);
        console.log(profiles, "profiles here");
        setUser(profiles[0]);
        setProfile(profiles[1])
    }

    async function addComment(commentData) {
        const updatePosts = await postsAPI.addCommentToPost(commentData);
        console.log(updatePosts)
        setAllPosts(updatePosts);
    }

    async function addRecommendation(data, id) {
        const updateBooksShelf = await booksAPI.addRecToFriend(data, id)
        console.log(updateBooksShelf)
        setUserLibrary(updateBooksShelf.userBooks)
        setUserRecs(updateBooksShelf.recommended)
    }

    var dateTime = new Date();
    console.log(dateTime);
    return (
        <>
        <div className="horizontal">
            <div className="verticalOne">
                <div id="socialStats">
                    <h3>Social Links <i className="material-icons" id="landingIcons1">record_voice_over</i></h3>
                </div>
                <button className="sideButtons" onClick={() => toggleShow('displayAllPosts')}> Social Wall</button>
                <button className="sideButtons" onClick={() => toggleShow('findFriends')}> Find Friends</button>
                <button className="sideButtons" onClick={() => toggleShow('socialAlerts')}>Social Alerts</button>
                <button className="sideButtons" onClick={() => toggleShow('friendsList')}>My Friends</button>
            </div>
            <div className="verticalTwo">
                {show.displayAllPosts && <DisplayAllPosts allPosts={allPosts} addComment={addComment} />}
                {show.findFriends && <DisplayFindFriends allProfiles={allProfiles} toggleShow={toggleShow} user={user} />}
                {show.profileDetail && <DisplayProfileDetail profile={profile} userRecs={userRecs} userLibrary={userLibrary} myLibrary={myLibrary} addRecommendation={addRecommendation} toggleShow={toggleShow} user={user} addFriendRequest={addFriendRequest}/>}
                {show.socialAlerts && <DisplaySocialAlerts user={user} toggleShow={toggleShow}/>}
                {show.friendsList && <DisplayFriends user={user} toggleShow={toggleShow}/>}
                {show.bookDetail && <DisplayLibraryItemDetail />}
            </div>
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

