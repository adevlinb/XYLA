import DisplayLibraryItem from '../DisplayLibraryItem/DisplayLibraryItem';
import DisplayRecItems from '../DisplayRecItems/DisplayRecItems';

export default function DisplayProfileDetail({ profile, userRecs, userLibrary, myLibrary, addRecommendation}) {

    const recData = {
        recommendation: "",
        personRecommending: ""
    };

    const book = userLibrary.map((b) => (
        <DisplayLibraryItem b={b} key={b._id} />
    ));

    const rec = userRecs.map((r) => (
        <DisplayRecItems r={r} key={r._id} />
    ));

    let bookOptions = myLibrary.map((b) => (
        { value: b.book._id, label: b.book.title }
    ));



    function handleRecChange(evt) {
        recData.recommendation = bookOptions[evt.target.options.selectedIndex].value
    }

    function handleAddRec(evt) {
        evt.preventDefault()
        if (recData.recommendation === "" || recData.recommendation === undefined) {
            if (bookOptions[0] === null) return;
            else recData.recommendation = bookOptions[0].value
        }
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
        <h1>Books Recommended to {profile.name}</h1>
        <div className="grid">
            {rec}
        </div>
        </>


    )
    
}