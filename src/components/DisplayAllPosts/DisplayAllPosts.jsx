import DisplayPostCard from "../DisplayPostCard/DisplayPostCard"
import './DisplayAllPosts.css'

export default function DisplayAllPosts({allPosts, addComment}) {
    const allUsersPosts = allPosts.map((post) => (
        <DisplayPostCard post={post} key={post._id} addComment={addComment} />
    )); 

    return (
        <>
        <div className="allPostsGrid">
        <h1>SOCIAL WALL</h1>
            {allUsersPosts}
        </div>
        </>

    );
}