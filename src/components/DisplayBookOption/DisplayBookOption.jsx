

export default function DisplayBookOption({ b, handleChange }) {
    return (
        <option value={b.book._id} alt={`${b.book.title}`} name="book">
            {b.book.title}
        </option>
    );
}