

export default function DisplayResults({book}) {


    return (
        <>
            <p>{book.volumeInfo.title}</p>
            <p>{book.id}</p>
            <p>{book.volumeInfo.pageCount}</p>
            <p>{book.publisher}</p>
            <img src={`${book.volumeInfo.imageLinks.thumbnail}`} alt={`${book.volumeInfo.title}`} />
        </>
    );
}