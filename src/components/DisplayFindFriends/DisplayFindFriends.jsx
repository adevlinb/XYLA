import DisplayProfilePage from "../DisplayProfilePage/DisplayProfilePage"



export default function DisplayFindFriends({ allProfiles }) {
    const profiles = allProfiles.map((p) => (
        <DisplayProfilePage p={p} key={p._id}/>
    ));

    return (
        <>
            < h1 > I'm a Profile</h1>
            {profiles}

        </>

    )

}