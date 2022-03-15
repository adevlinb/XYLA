import './DisplayPosts.css';

import { useState } from 'react';
import DisplayPostCard from '../DisplayPostCard/DisplayPostCard';

export default function DisplayPosts({ library, createPost, userPosts, addComment, user}) {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        rating: 3,
        book: ''
    });

    let bookOptions = library.map((b, idx) => (
      {value: b.book._id, label: b.book.title}
    ));

    const allUserPosts = userPosts.map((post) => (
        <DisplayPostCard post={post} key={post._id} addComment={addComment}/>
    )); 

    function handleOption(evt) {
        formData.book = bookOptions[evt.target.options.selectedIndex]
    }

    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
        console.log(formData)
    }

    function handleCreatePost(evt) {
        evt.preventDefault()
        if (formData.book === '') {
            if(bookOptions[0] === null) return;
            else formData.book = bookOptions[0]
        }
        console.log(formData);
        createPost(formData)
        setFormData({
            title: '',
            description: '',
            rating: 3,
            book: ''
        })
    }

    return (
        <>
        <h3>{user.name}'s Posts</h3>
        <img className="bookshelfPic" src="/images/Bookshelf_Pano.png" alt="BooksLandingPhoto" />

            <form onSubmit={handleCreatePost} id="postForm">
            <h3>Make a post!</h3>
                <div id="topForm">
                    <label>
                        Choose Your Book!
                        <select onChangeCapture={handleOption}>
                            {bookOptions.map((option, ind) => {
                                return <option value={option.value} onMouseDown={handleOption} key={option.value} name={option.value}>{option.label}</option>;
                            })}
                        </select>
                    </label>
                    <label>
                        Rating:
                        <select name="rating" value={formData.rating} onChange={handleChange}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </label>
                </div>
                <div id="bottomForm">
                    <input type="text" name="title" onChange={handleChange} value={formData.title} placeholder='headline'/>
                    <input type="text" name="description" onChange={handleChange} value={formData.description} placeholder='description'/>
                    <button type="submit">Create Post</button>
                </div>
            </form>
        <div className="gridTwo">
            {allUserPosts}
        </div>
      
        



        </>

)


    }
    