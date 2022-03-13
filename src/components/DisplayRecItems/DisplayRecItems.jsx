import './DisplayRecItems.css'
import { useState } from 'react';

export default function DisplayRecItems({ r }) {
    const [cardFlip, setcardFlip] = useState(true);

    return (
        <>
            {cardFlip ?
                <div className="card">
                    <div className="image">
                        <h5>Recommended By: {r.personRecommending.name}</h5>
                        <img src={`${r.recommendation.thumbnail}`} alt={`${r.recommendation.title}`} name="thumbnail" />
                        <button onClick={() => setcardFlip(!cardFlip)}>Details</button>
                    </div>
                    <div className="text">
                        <div name="title" value={`${r.recommendation.title}`} >TITLE: {r.recommendation.title}</div>
                        <div name="authors" value={`${r.recommendation.authors}`}>AUTHOR(s): {r.recommendation.authors}</div>
                        <div name="subjects" value={`${r.recommendation.subjects}`}>GENRE: {r.recommendation.subjects}</div>
                        <div name="publishers">{r.recommendation.publishers}</div>
                        <div name="pageCount">{r.recommendation.pageCount}</div>
                        <div name="isbnNum">{r.recommendation.isbnNum}</div>
                        <div name="rating">{r.recommendation.rating}</div>
                    </div>
                </div>
                :

                <div className="cardTwo">
                    <div name="description">{r.recommendation.description}</div>
                    <button onClick={() => setcardFlip(!cardFlip)}>Return</button>
                </div>
            }
        </>
    );
}