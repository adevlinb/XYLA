import { useState, useEffect } from 'react';

export default function UserSettings({ updateSettings, user }) {
    const [formData, setFormData] = useState({
        profilePublicOrPrivate: false
    });

    useEffect(() => {
        async function setCurrentSettings() {
        console.log(user, "hello user");
        setFormData({ ...formData, profilePublicOrPrivate: user.profilePublicOrPrivate});
    }
        setCurrentSettings();
    }, [user]);

    function handleChangeCheckbox(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.checked});
    }

    function submitSettings(e){
        e.preventDefault();
        updateSettings(formData)
    }


    return (
        <>
            <img className="bookshelfPic" src="/images/Bookshelf_Pano.png" alt="BooksLandingPhoto" />
            <h3>User Settings</h3>
        
            <form onSubmit={submitSettings}>
                <label htmlFor="privacy">Profile Public of Private? Check for private.</label>
                <input type="checkbox" id="privacy" value={formData.profilePublicOrPrivate} name="profilePublicOrPrivate" onChange={handleChangeCheckbox}/>
                <button type="submit">Update Settings</button>
            </form>
        </>


    )
}


//value={form.profilePublicOrPrivate}  checked={formData.profilePublicOrPrivate} 