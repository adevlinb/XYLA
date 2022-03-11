import DisplayPostCard from "../DisplayPostCard/DisplayPostCard"

export default function DisplayAllPosts({allPosts, addComment}) {
    const allUsersPosts = allPosts.map((post) => (
        <DisplayPostCard post={post} key={post._id} addComment={addComment} />
    )); 

    return (
        <>
        <h1>SOCIAL WALL</h1>
        <div className="grid">
            {allUsersPosts}
        </div>
        </>

    );
}