import DisplayResultsItem from '../DisplayResultsItem/DisplayResultsItem'
import './DisplayResults.css'

export default function DisplayResults({ queryResults, addBook }) {
    const book = queryResults.map((book, idx)=> (
        <DisplayResultsItem book={book} key={book.id} addBook={addBook}/>
    ));

    return (
        <div className="grid">
            {book}
        </div>
    );
}