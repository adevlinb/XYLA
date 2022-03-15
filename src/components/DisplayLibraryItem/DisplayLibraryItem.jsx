import "./DisplayLibraryItem.css";
import { useState } from 'react';

export default function DisplayLibraryItem({ b }) {
    const [cardFlip, setcardFlip] = useState(true);

    return (
            <>
            { cardFlip ? 
            <div className="card">
                <div className="bookOnlyTextRow">
                        <div name="title" value={`${b.book.title}`} ><strong>{b.book.title}</strong></div>
                </div>
                <div className="imageAndInfo">
                    <div className="cardImage">
                        <img src={`${b.book.thumbnail}`} alt={`${b.book.title}`} name="thumbnail" />
                    </div>
                    <div className="text">
                        <div name="authors" value={`${b.book.authors}`}>BY: {b.book.authors}</div>
                        <div name="subjects" value={`${b.book.subjects}`}>GENRE: {b.book.subjects}</div>
                        <div name="publishers">{b.book.publishers}</div>
                        <div name="pageCount">{b.book.pageCount}</div>
                        <div name="isbnNum">{b.book.isbnNum}</div>
                        <div name="rating">{b.book.rating}</div>
                    </div>
                </div>
                <div className="buttonForm">
                        <button onClick={() => setcardFlip(!cardFlip)}>Details</button>
                </div>
            </div>
            :
            
            <div className="cardTwo">
                <div name="description">{b.book.description}</div>
                <button onClick={() => setcardFlip(!cardFlip)}>Return</button>
            </div>
            }
            </>
    );
}