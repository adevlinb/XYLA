import { useState, useEffect } from 'react';

export default function UserSettings({ updateSettings, user }) {
    const [checkbox, setCheckbox] = useState({
        profilePublicOrPrivate: true
    });

    useEffect(() => {
        async function setCurrentSettings() {
        console.log(user, "hello user");
        setCheckbox({ ...checkbox, profilePublicOrPrivate: user.profilePublicOrPrivate});
    }
    setCurrentSettings();
}, []);

function handleChangeCheckbox(evt) {
    console.log(evt.target.checked);
    setCheckbox({ ...checkbox, [evt.target.name]: evt.target.value});
}

    function submitSettings(e){
        e.preventDefault();
        updateSettings(checkbox)
        console.log(checkbox, "hi check")
    }


    return (
        <>
            <img className="bookshelfPic" src="/images/Bookshelf_Pano.png" alt="BooksLandingPhoto" />
            <h3>User Settings</h3>
        
            <form onSubmit={submitSettings}>
                <label htmlFor="privacy">Profile Public of Private? Check for private.</label>
                <input type="checkbox" id="privacy" value={checkbox.profilePublicOrPrivate} checked={checkbox.profilePublicOrPrivate} name="profilePublicOrPrivate" onChange={handleChangeCheckbox}/>
                <button type="submit">Update Settings</button>
            </form>
        </>


    )
}