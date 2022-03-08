import DisplayLibraryItem from '../DisplayLibraryItem/DisplayLibraryItem'

export default function DisplayLibrary({ library }) {
    const book = library.map((b, idx) => (
        <DisplayLibraryItem b={b} key={b._id}/>
    ));

    return (
        <>
            {book}
        </>
    );
}