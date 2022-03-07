

export default function DisplayResultsItem({ book, addBook }) {

    function handleBook() {
        console.log(book)
        addBook(book)
    }

    return (
        <>
                <p name="Title" value={`${book.volumeInfo.title}`} >{book.volumeInfo.title}</p>
                <p name="Authors" value={`${book.volumeInfo.authors}`}>{book.volumeInfo.authors}</p>
                <p name="Subjects" value={`${book.volumeInfo.categories}`}>{book.volumeInfo.categories}</p>
                <p name="Publishers">{book.publisher}</p>
                <p name="pageCount">{book.volumeInfo.pageCount}</p>
                <p name="isbnNum">{book.volumeInfo.industryIdentifiers[0].identifier}</p>
                <p name="rating">{book.volumeInfo.averageRating}</p>
                <p name="description">{book.volumeInfo.description}</p>
                {book.volumeInfo.imageLinks.thumbnail ?
                    <img src={`${book.volumeInfo.imageLinks.thumbnail }`} alt={`${book.volumeInfo.title}`} name="thumbnail"/>
                    :
                    <img src="http://i.imgur.com/J5LVHEL.jpg" alt={`${book.volumeInfo.title}`} name="thumbnail"/>
                }
                <button onClick={handleBook} type="submit">Add Book</button>
       
        </>
    );
}