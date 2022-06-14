import DisplayProfilePage from "../DisplayProfilePage/DisplayProfilePage";

export default function DisplayFriends({ user, toggleShow }) {
    console.log(user, "displayfriends")
    let friends = user.friends.map((p) => (
        <DisplayProfilePage p={p} key={p._id} toggleShow={toggleShow}/>
    ));

    return (
        <>
        <h1>My friends</h1>
            {friends}
        </>
    )
}