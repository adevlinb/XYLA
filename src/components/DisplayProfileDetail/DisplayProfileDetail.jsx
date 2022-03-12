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

    let bookOptions = library.map((b, idx) => (
        { value: b.book._id, label: b.book.title }
    ));

    console.log(bookOptions[0].value, "hello value")

    function handleRecChange(evt) {
        recData.recommendation = bookOptions[evt.target.options.selectedIndex].value
        console.log(recData, "hello rec data")
    }

    function handleAddRec(evt) {
        evt.preventDefault()
        if (recData.recommendation === "" || recData.recommendation === undefined) {
            if (bookOptions[0] === null) return;
            else recData.recommendation = bookOptions[0].value
        }
        console.log(recData, "rec attempt");
        addRecommendation(recData, profile._id)
    }

    return (
        <>
        <form onSubmit={handleAddRec}>
            <label >
            <h5>Recommend a book to {profile.name}:</h5>
                <select onChangeCapture={handleRecChange}>
                    {bookOptions.map((option, ind) => {
                        return <option value={option.value} key={option.value} name={option.value}>{option.label}</option>;
                    })}
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