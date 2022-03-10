


export default function DisplayBookOption({ b, handleChange }) {
    // console.log(b.book._id)
    return (
        <option value={b.book._id} alt={`${b.book.title}`} name="book" onChange={handleChange}>
            {b.book.title}
        </option>
    );
}