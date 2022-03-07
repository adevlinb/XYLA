

export default function DisplayResultsItem({ book, addBook }) {

    function handleBook() {
        console.log(book)
        addBook(book)
    }

    return (
        <>
            
            {book && (<p name="Title" value={`${book.volumeInfo.title}`} >{book.volumeInfo.title}</p>)}
            {book && (<p name="Authors" value={`${book.volumeInfo.authors}`}>{book.volumeInfo.authors}</p>)}
            {book && (<p name="Subjects" value={`${book.volumeInfo.categories}`}>{book.volumeInfo.categories}</p>)}
            {book && (<p name="Publishers">{book.publisher}</p>)}
            {book && (<p name="pageCount">{book.volumeInfo.pageCount}</p>)}
            {book && (<p name="isbnNum">{book.volumeInfo.industryIdentifiers[0].identifier}</p>)}
            {book && (<p name="rating">{book.volumeInfo.averageRating}</p>)}
            {book && (   <p name="description">{book.volumeInfo.description}</p>)}
            {book && (       book.volumeInfo.imageLinks.thumbnail ?
                    <img src={`${book.volumeInfo.imageLinks.thumbnail }`} alt={`${book.volumeInfo.title}`} name="thumbnail"/>
                    :
                    <img src="http://i.imgur.com/J5LVHEL.jpg" alt={`${book.volumeInfo.title}`} name="thumbnail"/>
            )}
                <button onClick={handleBook} type="submit">Add Book</button>
          
        </>
    );
}