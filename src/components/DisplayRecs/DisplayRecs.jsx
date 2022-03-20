import DisplayRecItems from '../DisplayRecItems/DisplayRecItems'

export default function DisplayRecs({ myRecs, user }) {
    const rec = myRecs.map((r) => (
        <DisplayRecItems r={r} key={r._id} />
    ));

    // console.log(r)
    return (
        <>
            <h3>{user.name}'s' Recommendations from Friends</h3>
            <img className="bookshelfPic" src="/images/Bookshelf_Pano.png" alt="BooksLandingPhoto" />
            <div className="grid">
                {rec}
            </div>


        </>
    );
}