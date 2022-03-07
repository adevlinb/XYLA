

export default function DisplayLibraryItem({ b }) {
        console.log(b);
    return (
        <>
            <h3>Library Item</h3>
            <p name="title" value={`${b.title}`} >{b.title}</p>
            <p name="authors" value={`${b.authors}`}>{b.authors}</p>
            <p name="subjects" value={`${b.subjects}`}>{b.subjects}</p>
            <p name="publishers">{b.publishers}</p>
            <p name="pageCount">{b.pageCount}</p>
            <p name="isbnNum">{b.isbnNum}</p>
            <p name="rating">{b.rating}</p>
            <p name="description">{b.description}</p>
            <img src={`${b.thumbnail}`} alt={`${b.title}`} name="thumbnail" />
        </>

    );
}