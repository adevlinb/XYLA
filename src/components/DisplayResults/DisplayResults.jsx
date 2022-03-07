import DisplayResultsItem from '../DisplayResultsItem/DisplayResultsItem'

export default function DisplayResults({ queryResults, addBook }) {
    const book = queryResults.map((book, idx)=> (
        <DisplayResultsItem book={book} key={book.id} addBook={addBook}/>
    ));



    return (
        <>
          <h1>BOOK RESULTS</h1>
            {book}
        </>
    );
}