

export default function DisplayLibraryItem({ b }) {
        console.log(b);
    return (
        <>
            <h3>Library Item</h3>
            <p name="title" value={`${b.book.title}`} >{b.book.title}</p>
            <p name="authors" value={`${b.book.authors}`}>{b.book.authors}</p>
            <p name="subjects" value={`${b.book.subjects}`}>{b.book.subjects}</p>
            <p name="publishers">{b.book.publishers}</p>
            <p name="pageCount">{b.book.pageCount}</p>
            <p name="isbnNum">{b.book.isbnNum}</p>
            <p name="rating">{b.book.rating}</p>
            <p name="description">{b.book.description}</p>
            <img src={`${b.book.thumbnail}`} alt={`${b.book.title}`} name="thumbnail" />
        </>

    );
}