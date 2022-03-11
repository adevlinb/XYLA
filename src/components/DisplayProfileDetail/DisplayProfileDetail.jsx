import { useState, useEffect } from 'react'
import DisplayLibraryItem from '../DisplayLibraryItem/DisplayLibraryItem';
import DisplayRecOption from '../DisplayRecOption/DisplayRecOption';

export default function DisplayProfileDetail({ profile, userLibrary, library, addRecommendation}) {

    const [recData, setRecData] = useState({
        recommendation: "",
        personRecommending: ""
    });

    const book = userLibrary.map((b, idx) => (
        <DisplayLibraryItem b={b} key={b._id} />
    ));

    const options = library.map((b) => (
        <DisplayRecOption b={b} key={b._id} handleRecChange={handleRecChange} />
    ));

    function handleRecChange(evt) {
        setRecData({ ...recData, [evt.target.name]: evt.target.value });
        console.log(recData)
    }

    function handleAddRec(evt) {
        evt.preventDefault()
        addRecommendation(recData, profile._id)
    }

    return (
        <>
        <form onSubmit={handleAddRec}>
            <label >
            <h5>Recommend a book to {profile.name}:</h5>
                <select name="recommendation" onChange={handleRecChange}>
                    {options}
                </select>
            </label>
            <button type="submit">Recommend!</button>
        </form>
        <h1>{profile.name}'s Books</h1>
        <div className="grid">
            {book}
        </div>
        </>


    )
    
}