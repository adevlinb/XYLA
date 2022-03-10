import './DisplayPosts.css';
import DisplayBookOption from '../DisplayBookOption/DisplayBookOption';
import { useState } from 'react';
import DisplayPostCard from '../DisplayPostCard/DisplayPostCard';

export default function DisplayPosts({ library, createPost, userPosts }) {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        rating: 3,
        book: 0
    });

    const options = library.map((b, idx) => (
        <DisplayBookOption b={b} key={b._id} handleChange={handleChange} />
    ));

    const allUserPosts = userPosts.map((post) => (
        <DisplayPostCard post={post} key={post._id} />
    )); 


    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
        console.log(formData)
    }

    function handleCreatePost(evt) {
        evt.preventDefault()
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
            <form onSubmit={handleCreatePost}>
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
                    <select name="book" onChange={handleChange}>
                        {options}
                    </select>
                </label>
                <button type="submit">Create Post</button>
            </form>
        </div>
        

        <div className="grid">
            {allUserPosts}
        </div>


        </>

)


    }
    