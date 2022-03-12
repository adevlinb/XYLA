import DisplayProfilePage from "../DisplayProfilePage/DisplayProfilePage"



export default function DisplayFindFriends({ allProfiles, toggleShow, library }) {
    const profiles = allProfiles.map((p) => (
        <DisplayProfilePage p={p} key={p._id} toggleShow={toggleShow} library={library}/>
    ));

    return (
        <>
            < h1 > I'm a Profile</h1>
            {profiles}

        </>

    )

}