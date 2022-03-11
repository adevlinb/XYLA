import DisplayProfilePage from "../DisplayProfilePage/DisplayProfilePage"



export default function DisplayFindFriends({ allProfiles, toggleShow }) {
    const profiles = allProfiles.map((p) => (
        <DisplayProfilePage p={p} key={p._id} toggleShow={toggleShow}/>
    ));

    return (
        <>
            < h1 > I'm a Profile</h1>
            {profiles}

        </>

    )

}