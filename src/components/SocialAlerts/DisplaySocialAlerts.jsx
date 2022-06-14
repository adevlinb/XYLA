import DisplayProfilePage from "../DisplayProfilePage/DisplayProfilePage";

export default function DisplaySocialAlerts({ user, toggleShow }) {
    let requests = user.requests.map((p) => (
        <DisplayProfilePage p={p} key={p._id} toggleShow={toggleShow} />
    ));

    return (
        <>
        
        <h1>social alerts</h1>
        <h5>Friend Requests:</h5>
        {requests}
        
        </>


    )
}