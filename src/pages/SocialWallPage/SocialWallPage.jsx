import './SocialWallPage.css'
import * as postsAPI from '../../utilities/posts-api';
import DisplayAllPosts from '../../components/DisplayAllPosts/DisplayAllPosts';
import { useState, useEffect } from 'react'

export default function SocialWallPage() {
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            const allPosts = await postsAPI.getAllPosts();
            setAllPosts(allPosts);
        }
        getPosts();
    }, []);




    return (
        <div className="horizontal">
            <div className="verticalOne">
                {/* <img src="/images/XYLA_LOGO.png" alt="XYLA" className='logo' /> */}
                <h3>Quick Links</h3>
                <h5>My Posts</h5>
                <h5>Find Friends</h5>
            </div>
            <div className="verticalTwo">
                <h1>Social Feed</h1>
                <DisplayAllPosts allPosts={allPosts} />

            </div>
        </div>
    );
}