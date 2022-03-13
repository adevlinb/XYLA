import './SocialWallPage.css'
import * as postsAPI from '../../utilities/posts-api';
import * as profilesAPI from '../../utilities/profiles-api';
import * as booksAPI from '../../utilities/books-api';
import DisplayAllPosts from '../../components/DisplayAllPosts/DisplayAllPosts';
import DisplayFindFriends from '../../components/DisplayFindFriends/DisplayFindFriends';
import DisplayProfileDetail from '../../components/DisplayProfileDetail/DisplayProfileDetail';
import { useState, useEffect } from 'react'

export default function SocialWallPage() {
    const [allPosts, setAllPosts] = useState([]);
    const [allProfiles, setAllProfiles] = useState([]);
    const [profile, setProfile] = useState({});
    const [userLibrary, setUserLibrary] = useState([]);
    const [library, setLibrary] = useState([]);
    const [userRecs, setUserRecs] = useState([]);

    const [show, setShow] = useState({
        displayAllPosts: true,
        findFriends: false,
        profileDetail: false
    })

    async function toggleShow(shelf, id) {
        const newShowState = { ...show };
        for (let key in newShowState) {
            newShowState[key] = false;
        }
        newShowState[shelf] = true;
        setShow(newShowState);
        if (id) {
            const pro = await profilesAPI.findProfile(id)
            const books = await booksAPI.getUserLibrary(id);
            // const recs = await booksAPI.getUserRecs(id);
            setProfile(pro);
            setUserLibrary(books);
        }
    }

    useEffect(() => {
        async function getUserBooks() {
            const books = await booksAPI.getLibrary();
            setLibrary(books);
        }
        getUserBooks();
    }, []);

    useEffect(() => {
        async function getPosts() {
            const allPosts = await postsAPI.getAllPosts();
            setAllPosts(allPosts);
        }
        getPosts();
    }, []);

    useEffect(() => {
        async function getProfiles() {
            const profiles = await profilesAPI.getAllProfiles();
            setAllProfiles(profiles);
        }
        getProfiles();
    }, []);

    async function addComment(commentData) {
        const updatePosts = await postsAPI.addCommentToPost(commentData);
        setAllPosts(updatePosts);
    }

    async function addRecommendation(data, id) {
        const updateBooks = await booksAPI.addRecToFriend(data, id)
        console.log(updateBooks)
        // console.log(recs)
        setUserLibrary(updateBooks.userBooks)
        setUserRecs(updateBooks.recommended)
    }


    return (
        <div className="horizontal">
            <div className="verticalOne">
                {/* <img src="/images/XYLA_LOGO.png" alt="XYLA" className='logo' /> */}
                <h3>QUICK LINKS</h3>

                <button onClick={() => toggleShow('displayAllPosts')}> Social Wall</button>
                <button onClick={() => toggleShow('findFriends')}> Find Friends</button>
            </div>
            <div className="verticalTwo">
                {show.displayAllPosts && <DisplayAllPosts allPosts={allPosts} addComment={addComment} />}
                {show.findFriends && <DisplayFindFriends allProfiles={allProfiles} toggleShow={toggleShow} library={library}/>}
                {show.profileDetail && <DisplayProfileDetail profile={profile} userRecs={userRecs} userLibrary={userLibrary} library={library} addRecommendation={addRecommendation}/>}
            </div>
        </div>
    );
}

