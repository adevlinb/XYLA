import DisplayPostCard from "../DisplayPostCard/DisplayPostCard"

export default function DisplayAllPosts({allPosts}) {
    const allUsersPosts = allPosts.map((post) => (
        <DisplayPostCard post={post} key={post._id} />
    )); 

    return (

        <>
        <h1>Hello All Posts</h1>
        { allUsersPosts }
        </>

    );
}