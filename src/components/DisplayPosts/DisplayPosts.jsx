import './DisplayPosts.css';

import { useState } from 'react';
import DisplayPostCard from '../DisplayPostCard/DisplayPostCard';

export default function DisplayPosts({ library, createPost, userPosts, addComment}) {

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
        <h1>DisplayPosts</h1>
        <div className='verticalTwo'>
            <form onSubmit={handleCreatePost} className="postForm">
                <input type="text" name="title" onChange={handleChange} value={formData.title} placeholder='headline'/>
                    <input type="text" name="description" onChange={handleChange} value={formData.description} placeholder='description'/>
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
                <label>
                    Choose Your Book!
                    <select onChangeCapture={handleOption}>
                        {bookOptions.map((option, ind) => {
                            return <option value={option.value} onMouseDown={handleOption} key={option.value} name={option.value}>{option.label}</option>;
                        })}
                    </select>
                </label>
                <button type="submit">Create Post</button>
            </form>
        <div className="gridTwo">
            {allUserPosts}
        </div>
        </div>
        



        </>

)


    }
    