import './DisplayResultsItem.css'

export default function DisplayResultsItem({ book, addBook }) {

    function handleBook() {
        addBook(book)
    }

    return (
        <div className="card">
            <div className="image">
                {book && (book.volumeInfo.imageLinks.thumbnail ?
                    <img src={`${book.volumeInfo.imageLinks.thumbnail }`} alt={`${book.volumeInfo.title}`} className="apiImage" name="thumbnail"/>
                        :
                    <img src="http://i.imgur.com/J5LVHEL.jpg" alt={`${book.volumeInfo.title}`} name="thumbnail"/>
                    )}
            </div>
            <div className="text">
                {book && (<div name="Title" value={`${book.volumeInfo.title}`} >{book.volumeInfo.title}</div>)}
                {book && (<div name="Authors" value={`${book.volumeInfo.authors}`}>{book.volumeInfo.authors}</div>)}
                {book && (<div name="Subjects" value={`${book.volumeInfo.categories}`}>{book.volumeInfo.categories}</div>)}
                {book && (<div name="Publishers">{book.publisher}</div>)}
                {book && (<div name="pageCount">{book.volumeInfo.pageCount}</div>)}
                {book && (<div name="isbnNum">{book.volumeInfo.industryIdentifiers[0].identifier}</div>)}
                {book && (<div name="rating">{book.volumeInfo.averageRating}</div>)}
                {/* {book && (<div name="description">{book.volumeInfo.description}</div>)} */}
                <button onClick={handleBook} type="submit">Add Book</button>
            </div>
        </div>
    );
}
