import "./DisplayLibraryItem.css";
import { useState } from 'react';

export default function DisplayLibraryItem({ b }) {
    const [cardFlip, setcardFlip] = useState(true);

    return (
            <>
            { cardFlip ? 
            <div className="card">
                <div className="image">
                    <img src={`${b.book.thumbnail}`} alt={`${b.book.title}`} name="thumbnail" />
                    <button onClick={() => setcardFlip(!cardFlip)}>Details</button>
                </div>
                <div className="text">
                    <div name="title" value={`${b.book.title}`} >TITLE: {b.book.title}</div>
                    <div name="authors" value={`${b.book.authors}`}>AUTHOR(s): {b.book.authors}</div>
                    <div name="subjects" value={`${b.book.subjects}`}>GENRE: {b.book.subjects}</div>
                    <div name="publishers">{b.book.publishers}</div>
                    <div name="pageCount">{b.book.pageCount}</div>
                    <div name="isbnNum">{b.book.isbnNum}</div>
                    <div name="rating">{b.book.rating}</div>
                </div>
            </div>
            :
            
            <div className="card">
                <div name="description">{b.book.description}</div>
                <button onClick={() => setcardFlip(!cardFlip)}>Return</button>
            </div>
            }
            </>
    );
}