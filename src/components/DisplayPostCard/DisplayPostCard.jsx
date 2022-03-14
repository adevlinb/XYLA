import './DisplayPostCard.css'
import { useState } from 'react'
import DisplayComment from '../DisplayComment/DisplayComment';

export default function DisplayPostCard({post, addComment}) {
    const [cardFlip, setcardFlip] = useState(true);
    const [commentData, setCommentData] = useState({
        content: ''
    });
    
    function handleChange(evt) {
        setCommentData({ ...commentData, [evt.target.name]: evt.target.value });
    }

    function handleAddComment(id, evt) {
        evt.preventDefault()
        commentData.postId = id
        console.log(commentData)
        addComment(commentData)
        setCommentData({content: ''})
    }

    const comments = post.comment.map((c, idx) => (
        <DisplayComment c={c} key={idx} /> 
    ))


    return (
    <>
        {cardFlip ?
            <div className="postCard">
                <div className='postRow'>
                    <div className="textRow">
                        {/* <div className="personIcon"> */}
                            <i class="material-icons" id="personIconProfile">account_circle</i>
                        {/* </div> */}
                        {post && <h5> {post.user.name}</h5>}
                        {post && <h5> {new Date(post.createdAt).toLocaleDateString()}</h5>}
                            <i class="material-icons" id="personIconBook">menu_book</i>
                    </div>
                    <div id="imageDescBox">
                        <div className="image">
                            {post && (post.book.thumbnail ?
                                <>
                                    <img src={`${post.book.thumbnail}`} alt={`${post.book.title}`} className="apiImage" name="thumbnail" />
                                    {/* {post && post.book.title ? <h5 name="Title" value={`${post.book.title}`} >{post.book.title}</h5> : <h5>N/A</h5>} */}
                                </>
                                :
                                <>
                                    <img src="http://i.imgur.com/J5LVHEL.jpg" alt={`${post.book.title}`} name="thumbnail" />
                                </>
                            )}
                        </div>
                        <div className="description">
                            {post && post.book.title ? <h5 name="Title" value={`${post.book.title}`} >{post.book.title}</h5> : <h5>N/A</h5>}
                            {post && <div name="description">{post.description}</div>}
                        </div>
                    </div>
                </div>
                <div className="commentForm">
                    <form onSubmit={(evt) => handleAddComment(`${post._id}`, evt)}>
                            <input id="commentInput" name="content" value={commentData.content} onChange={handleChange} type="text" placeholder='Add Comment!'/>
                            <button id="commentButton" type="submit">+</button>
                    </form>
                </div>
                <div className="commentContainer">
                    {comments}
                </div>
            </div>
            :
            
            <div className="postCardTwo">
                
                {/* {post && <div> {post.user.name} </div>} */}
                {/* {post && <div name="description">{post.description}</div>} */}
                {/* <button onClick={() => setcardFlip(!cardFlip)}>Return</button> */}
            </div>
        }

    </>
    );
}


// { post && post.book.authors ? <div name="Authors" value={`${post.book.authors}`}>{post.book.authors}</div> : <div>N/A</div> }
// { post && post.book.subjects ? <div name="Subjects" value={`${post.book.subjects}`}>{post.book.subjects}</div> : <div>N/A</div> }
// { post && post.book.publishers ? <div name="Publishers">{post.book.publishers}</div> : <div>N/A</div> }
// { post && post.book.pageCount ? <div name="pageCount">{post.book.pageCount}</div> : <div>N/A</div> }
// { post && post.book.isbnNum ? <div name="isbnNum">{post.book.isbnNum}</div> : <div>N/A</div> }
// { post && post.book.rating ? <div name="rating">{post.book.rating}</div> : <div>N/A</div> }

{/* <button onClick={() => setcardFlip(!cardFlip)}>Details</button> */ }

{/* <button onClick={() => setcardFlip(!cardFlip)}>Details</button> */ }