import { useState } from 'react';

export default function UserSettings({ updateSettings }) {
    const [formData, setFormData] = useState({
        checkbox: false
    })

    function handleChangeCheckbox(evt) {
        formData.checkbox = evt.target.checked;
        console.log(formData)
    }

    function submitSettings(e){
        e.preventDefault();
        updateSettings(formData)
        console.log(formData.checkbox, "hi check")
    }


    return (
        <>
            <img className="bookshelfPic" src="/images/Bookshelf_Pano.png" alt="BooksLandingPhoto" />
            <h3>User Settings</h3>
        
            <form onSubmit={submitSettings}>
                <label htmlFor="privacy">Profile Public of Private? Check for private.</label>
                <input type="checkbox" id="privacy" value={formData.checkbox} name="checkbox" onChange={handleChangeCheckbox}/>
                <button type="submit">Update Settings</button>
            </form>
        </>


    )
}