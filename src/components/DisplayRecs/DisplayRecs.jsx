import './DisplayRecs.css'
import { useState } from 'react';

export default function DisplayRecs({ r }) {
    const [cardFlip, setcardFlip] = useState(true);

    // console.log(r)
    return (
        <>
            {cardFlip ?
                <div className="card">
                    <div className="image">
                        <img src={`${r.book.thumbnail}`} alt={`${r.book.title}`} name="thumbnail" />
                        <button onClick={() => setcardFlip(!cardFlip)}>Details</button>
                    </div>
                    <div className="text">
                        <div name="title" value={`${r.book.title}`} >TITLE: {r.book.title}</div>
                        <div name="authors" value={`${r.book.authors}`}>AUTHOR(s): {r.book.authors}</div>
                        <div name="subjects" value={`${r.book.subjects}`}>GENRE: {r.book.subjects}</div>
                        <div name="publishers">{r.book.publishers}</div>
                        <div name="pageCount">{r.book.pageCount}</div>
                        <div name="isbnNum">{r.book.isbnNum}</div>
                        <div name="rating">{r.book.rating}</div>
                    </div>
                </div>
                :

                <div className="cardTwo">
                    <div name="description">{r.book.description}</div>
                    <button onClick={() => setcardFlip(!cardFlip)}>Return</button>
                </div>
            }
        </>
    );
}