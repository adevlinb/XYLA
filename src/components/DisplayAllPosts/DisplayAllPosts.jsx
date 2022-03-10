import DisplayPostCard from "../DisplayPostCard/DisplayPostCard"

export default function DisplayAllPosts({allPosts}) {
    const allUsersPosts = allPosts.map((post) => (
        <DisplayPostCard post={post} key={post._id} />
    )); 

    return (

        <div className="grid">
            {allUsersPosts}
        </div>

    );
}