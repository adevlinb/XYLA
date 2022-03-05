import DisplayResultsItem from '../DisplayResultsItem/DisplayResultsItem'

export default function DisplayResults({ queryResults }) {
    const book = queryResults.map((book, idx)=> (
        <DisplayResultsItem book={book} key={book.id}/>
    ));



    return (
        <>
          <h1>BOOK RESULTS</h1>
            {book}
        </>
    );
}