import './DisplayResultsItem.css';
import { useState } from 'react';

export default function DisplayResultsItem({ book, addBook }) {
    const [cardFlip, setcardFlip] = useState(true);

    function handleBook() {
        addBook(book)
    }

    return (
        <>
            {cardFlip ?
                <div className="card">
                    <div className="bookOnlyTextRow">
                        {book && book.volumeInfo.title ? <div name="Title" value={`${book.volumeInfo.title}`} >{book.volumeInfo.title}</div> : <div>N/A</div>}
                    </div>
                    <div className="imageAndInfo">
                        <div className="cardImage">
                            {book && (book.volumeInfo.imageLinks ?
                                <>
                                <img src={`${book.volumeInfo.imageLinks.thumbnail}`} alt={`${book.volumeInfo.title}`} className="apiImage" name="thumbnail" />
                                </>
                                :
                                <>
                                <img src="http://i.imgur.com/J5LVHEL.jpg" alt={`${book.volumeInfo.title}`} name="thumbnail" />
                                </>
                            )}
                        </div>
                        <div className="text">
                            {book && book.volumeInfo.authors ? <div name="Authors" value={`${book.volumeInfo.authors}`}>{book.volumeInfo.authors}</div> : <div>N/A</div>}
                            {book && book.volumeInfo.categories ? <div name="Subjects" value={`${book.volumeInfo.categories}`}>{book.volumeInfo.categories}</div> : <div>N/A</div>}
                            {book && book.publisher ? <div name="Publishers">{book.publisher}</div> : <div>N/A</div>}
                            {book && book.volumeInfo.pageCount ? <div name="pageCount">{book.volumeInfo.pageCount}</div> : <div>N/A</div>}
                            {book && book.volumeInfo.industryIdentifiers ? <div name="isbnNum">{book.volumeInfo.industryIdentifiers[0].identifier}</div> : <div>N/A</div>}
                            {book && book.volumeInfo.averageRating ? <div name="rating">{book.volumeInfo.averageRating}</div> : <div>N/A</div>}
                        </div>
                    </div>
                    <div className="buttonForm">
                            <button onClick={() => setcardFlip(!cardFlip)}>Details</button>
                            <button onClick={handleBook} type="submit">Add Book</button>
                    </div>
                </div>
                :
                
                <div className="cardTwo">
                    {book && <div name="description">{book.volumeInfo.description}</div>}
                    <button onClick={() => setcardFlip(!cardFlip)}>Return</button>
                </div>
            }
        </>
    );
}



// return (
//     <div className="card">
//         <div className="image">
//             {book && (book.volumeInfo.imageLinks.thumbnail ?
//                 <img src={`${book.volumeInfo.imageLinks.thumbnail}`} alt={`${book.volumeInfo.title}`} className="apiImage" name="thumbnail" />
//                 :
//                 <img src="http://i.imgur.com/J5LVHEL.jpg" alt={`${book.volumeInfo.title}`} name="thumbnail" />
//             )}
//         </div>
//         <div className="text">
//             {book && book.volumeInfo.title ? <div name="Title" value={`${book.volumeInfo.title}`} >{book.volumeInfo.title}</div> : <div>N/A</div>}
//             {book && book.volumeInfo.authors ? <div name="Authors" value={`${book.volumeInfo.authors}`}>{book.volumeInfo.authors}</div> : <div>N/A</div>}
//             {book && book.volumeInfo.categories ? <div name="Subjects" value={`${book.volumeInfo.categories}`}>{book.volumeInfo.categories}</div> : <div>N/A</div>}
//             {book && book.publisher ? <div name="Publishers">{book.publisher}</div> : <div>N/A</div>}
//             {book && book.volumeInfo.pageCount ? <div name="pageCount">{book.volumeInfo.pageCount}</div> : <div>N/A</div>}
//             {book && book.volumeInfo.industryIdentifiers ? <div name="isbnNum">{book.volumeInfo.industryIdentifiers[0].identifier}</div> : <div>N/A</div>}
//             {book && book.volumeInfo.averageRating ? <div name="rating">{book.volumeInfo.averageRating}</div> : <div>N/A</div>}
//             {/* {book && (<div name="description">{book.volumeInfo.description}</div>)} */}
//             <button onClick={handleBook} type="submit">Add Book</button>
//         </div>
//     </div>
// );