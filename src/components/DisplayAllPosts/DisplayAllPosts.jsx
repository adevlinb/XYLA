import DisplayPostCard from "../DisplayPostCard/DisplayPostCard"
import './DisplayAllPosts.css'

export default function DisplayAllPosts({allPosts, addComment}) {
    const allUsersPosts = allPosts.map((post) => (
        <DisplayPostCard post={post} key={post._id} addComment={addComment} />
    )); 

    return (
        <>
        <h3>SOCIAL FEED</h3>
        <img className="bookshelfPic" src="/images/SocialWall.png" alt="BooksLandingPhoto" />
        <div className="allPostsGrid">
            {allUsersPosts}
        </div>
        </>

    );
}