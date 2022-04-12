import { useState } from 'react';

export default function DisplayStartAClub({ startNewClub }) {

    const [formData, setFormData] = useState({
        clubName: '',
        description: '',
    });


    function handleChange(evt) {
        setFormData({ ...formData, [evt.target.name]: evt.target.value });
        console.log(formData)
    }


    function handleStartClub(e) {
        e.preventDefault()
        // console.log(formData);
        startNewClub(formData)
    }
    


    return (
            <>

            <form onSubmit={handleStartClub}>
                <h3>Start A Club</h3>
                <div >
                    <label htmlFor="name">Club Name:</label>
                    <input type="text" id="name" name="clubName" value={formData.clubName} onChange={handleChange}/>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" name="description" value={formData.description} onChange={handleChange}/>
                </div>
                <label htmlFor="startClub"></label>
                <button type="submit" id="startClub">Start New Club!</button>
            </form>
            </>

    )
}