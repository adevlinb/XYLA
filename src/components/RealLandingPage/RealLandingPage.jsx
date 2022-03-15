import './RealLandingPage.css'

export default function RealLandingPage() {
    return (
        <>
            <h1>FINALLY!</h1>
            <h2>A <span>SOCIAL APP</span> FOR <strong><span>BOOKLOVERS</span></strong> IS HERE:</h2>
            <div className="landingInfo">
                <div>
                    <i className="material-icons" id="landingIcons1">auto_stories</i>
                    <h3>Your shelf!</h3>
                    <h5>Make searches via google books to find the books that belong on your shelves.
                    </h5>
                </div>
                <div>
                    <i className="material-icons" id="landingIcons2">recommend</i>
                    <h3>Recommendations!</h3>
                    <h5>With the books on your shelves you will be able to recommend a book to your friends!</h5>
                </div>
                <div>
                    <i className="material-icons" id="landingIcons3">record_voice_over</i>
                    <h3>Share Posts</h3>
                    <h5>You can also write posts about those books and share those experiences in the social feed.</h5>
                </div>
                <div>
                    <i className="material-icons" id="landingIcons4">group_add</i>
                    <h3>Join / Create Clubs</h3>
                    <h5>From there, you can join and create groups to meet with and have events within those groups that could meet as often as you like!</h5>
                </div>

            </div>
        
        </>
    )
}