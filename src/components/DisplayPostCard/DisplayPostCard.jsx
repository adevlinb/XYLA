import './DisplayPostCard.css'
import { useState } from 'react'

export default function DisplayPostCard({post}) {

    const [cardFlip, setcardFlip] = useState(true);
    
    return (
    <>
        {cardFlip ?
            <div className="card">
                <div className="image">
                    {post && (post.book.thumbnail ?
                        <>
                                {post && <h3> {post.user.name} </h3>}
                            <img src={`${post.book.thumbnail}`} alt={`${post.book.title}`} className="apiImage" name="thumbnail" />
                            <button onClick={() => setcardFlip(!cardFlip)}>Details</button>
                        </>
                        :
                        <>
                                {post && <h3> {post.user.name} </h3>}
                            <img src="http://i.imgur.com/J5LVHEL.jpg" alt={`${post.book.title}`} name="thumbnail" />
                            <button onClick={() => setcardFlip(!cardFlip)}>Details</button>
                        </>
                    )}
                </div>
                <div className="text">
                    {post && post.book.title ? <div name="Title" value={`${post.book.title}`} >{post.book.title}</div> : <div>N/A</div>}
                    {post && post.book.authors ? <div name="Authors" value={`${post.book.authors}`}>{post.book.authors}</div> : <div>N/A</div>}
                    {post && post.book.subjects ? <div name="Subjects" value={`${post.book.subjects}`}>{post.book.subjects}</div> : <div>N/A</div>}
                    {post && post.book.publishers ? <div name="Publishers">{post.book.publishers}</div> : <div>N/A</div>}
                    {post && post.book.pageCount ? <div name="pageCount">{post.book.pageCount}</div> : <div>N/A</div>}
                    {post && post.book.isbnNum ? <div name="isbnNum">{post.book.isbnNum}</div> : <div>N/A</div>}
                    {post && post.book.rating ? <div name="rating">{post.book.rating}</div> : <div>N/A</div>}
                </div>
            </div>
            :

            <div className="cardTwo">
                {post && <div> {post.user.name} </div>}
                {post && <div name="description">{post.description}</div>}
                <button onClick={() => setcardFlip(!cardFlip)}>Return</button>
            </div>
        }
    </>
    );
}