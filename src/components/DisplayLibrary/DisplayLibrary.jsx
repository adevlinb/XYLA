import DisplayLibraryItem from '../DisplayLibraryItem/DisplayLibraryItem'
import "./DisplayLibrary.css"

export default function DisplayLibrary({ library, user }) {
    const book = library.map((b) => (
        <DisplayLibraryItem b={b} key={b._id}/>
    ));

    return (
        <>
        <h3>{user.name}'s' BOOKSHELF</h3>
        <img className="bookshelfPic" src="/images/Bookshelf_Pano.png" alt="BooksLandingPhoto" />
        <div className="grid" id="libraryGrid">
            {book}
        </div>
        </>
    );
}