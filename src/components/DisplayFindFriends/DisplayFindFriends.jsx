import DisplayProfilePage from "../DisplayProfilePage/DisplayProfilePage"



export default function DisplayFindFriends({ allProfiles, toggleShow, user }) {
    const profiles = allProfiles.map((p) => (
        <DisplayProfilePage p={p} key={p._id} toggleShow={toggleShow} user={user}/>
    ));

    return (
        <>
            <h3><span>XYLA</span> FRIENDS</h3>
            <img className="bookshelfPic" src="/images/SocialWall.png" alt="BooksLandingPhoto" />
            <div id="profilePageGrid">
                {profiles}
            </div>
        </>

    )

}