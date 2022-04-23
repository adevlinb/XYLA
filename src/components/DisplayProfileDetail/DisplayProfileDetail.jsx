import { useState, useEffect } from "react";
import DisplayLibraryItem from '../DisplayLibraryItem/DisplayLibraryItem';
import DisplayRecItems from '../DisplayRecItems/DisplayRecItems';

import "./DisplayProfileDetail.css"

export default function DisplayProfileDetail({ profile, userRecs, userLibrary, myLibrary, addRecommendation, toggleShow, user, addFriendRequest}) {

    const [friendRequested, setFriendRequested] = useState(false);
    const [friends, setFriends] = useState(false);
    console.log(user, "hi", profile)

    useEffect(() => {
        async function checkFriends() {
            if(profile.requests.includes(user._id)) setFriendRequested(true);
            if(profile.friends.includes(user._id)) setFriends(true);
        }
        checkFriends();
    }, []);

    const recData = {
        recommendation: "",
        personRecommending: ""
    };

    const book = userLibrary.map((b) => (
        <DisplayLibraryItem b={b} key={b._id} user={profile._id} toggleShow={toggleShow}/>
    ));

    const rec = userRecs.map((r) => (
        <DisplayRecItems r={r} key={r._id} />
    ));

    let bookOptions = myLibrary.map((b) => (
        { value: b.book._id, label: b.book.title }
    ));



    function handleRecChange(evt) {
        recData.recommendation = bookOptions[evt.target.options.selectedIndex].value
    }

    function handleAddRec(evt) {
        evt.preventDefault()
        if (recData.recommendation === "" || recData.recommendation === undefined) {
            if (bookOptions[0] === null) return;
            else recData.recommendation = bookOptions[0].value
        }
        addRecommendation(recData, profile._id)
    }

    function requestFriend(e){
        e.preventDefault();
        console.log("request friendship");
        addFriendRequest(user._id, profile._id)
    }

    return (
        <>

        <h1>{profile.name}'s Books</h1>
        <div id="profilePano">
            <img className="bookshelfPic" id="profileSplash" src="/images/profilePano.jpeg" alt="BooksLandingPhoto" />
        </div>
            {profile.profilePublicOrPrivate ? <h3>profile private</h3> : <h3>profile public</h3>}
            
        {/* {friendRequested ? <h3>You already Requested</h3> : <form onSubmit={requestFriend}><label htmlFor="requestFriend">Request Friendship</label><button type="submit"></button></form>} */}

        {friends ? 
        <>
                    <div className="grid">
                        {book}
                    </div>
                    <h1>Books Recommended to {profile.name}</h1>
                    <form onSubmit={handleAddRec} id="recForm">
                        <label >
                        <h5>Recommend a book to {profile.name}:</h5>
                            <select onChangeCapture={handleRecChange}>
                                {bookOptions.map((option, ind) => {
                                    return <option value={option.value} key={option.value} name={option.value}>{option.label}</option>;
                                })}
                            </select>
                        </label>
                        <button type="submit">Recommend!</button>
                    </form>
                    <div className="grid">
                        {rec}
                    </div>
                    </>
        : 

                friendRequested ? <h3>You already Requested</h3> : <form onSubmit={requestFriend}><label htmlFor="requestFriend"></label><button id="requestFriend" type="submit">Request Friendship</button></form>
                    //  <h5>Request Friend</h5>
                     }
        </>


    )
    
}