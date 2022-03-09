import DisplayLibraryItem from '../DisplayLibraryItem/DisplayLibraryItem'
import "./DisplayLibrary.css"

export default function DisplayLibrary({ library }) {
    const book = library.map((b, idx) => (
        <DisplayLibraryItem b={b} key={b._id}/>
    ));

    return (
        <div className="grid">
            {book}
        </div>
    );
}