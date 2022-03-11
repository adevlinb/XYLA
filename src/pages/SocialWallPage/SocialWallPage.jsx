import './SocialWallPage.css'
import * as postsAPI from '../../utilities/posts-api';
import * as profilesAPI from '../../utilities/profiles-api';
import DisplayAllPosts from '../../components/DisplayAllPosts/DisplayAllPosts';
import DisplayFindFriends from '../../components/DisplayFindFriends/DisplayFindFriends';
import { useState, useEffect } from 'react'

export default function SocialWallPage() {
    const [allPosts, setAllPosts] = useState([])
    const [allProfiles, setAllProfiles] = useState([])

    const [show, setShow] = useState({
        displayAllPosts: true,
        findFriends: false,
    })

    function toggleShow(shelf) {
        const newShowState = { ...show };
        for (let key in newShowState) {
            newShowState[key] = false;
        }
        newShowState[shelf] = true;
        setShow(newShowState);
    }

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
            console.log(profiles)
            setAllProfiles(profiles);
        }
        getProfiles();
    }, []);

    async function addComment(commentData) {
        const updatePosts = await postsAPI.addCommentToPost(commentData);
        setAllPosts(updatePosts);
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
                {show.findFriends && <DisplayFindFriends allProfiles={allProfiles}/>}

            </div>
        </div>
    );
}

