import './SearchBookScroll.css'

export default function SearchBooksScroll({ b }) {
    return (
        <div className='searchScroll'>
            <img src={`${b.book.thumbnail}`} alt={`${b.book.title}`} name="thumbnail" />
            <div name="title" value={`${b.book.title}`} ><strong>{b.book.title}</strong></div>
        </div>
    )
}