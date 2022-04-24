import DisplayProfilePage from "../DisplayProfilePage/DisplayProfilePage";

export default function DisplayFriends({ user, toggleShow }) {
    let friends = user.friends.map((p) => (
        <DisplayProfilePage p={p} key={p._id} toggleShow={toggleShow} user={user}/>
    ));

    return (
        <>
        <h1>My friends</h1>
            {friends}
        </>
    )
}