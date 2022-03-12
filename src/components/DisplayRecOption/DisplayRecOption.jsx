

export default function DisplayRecOption({ b, handleRecChange }) {
    console.log("hello options page", b.book.title)
    return (
        <option value={b.book._id} alt={`${b.book.title}`} name="recommendation" onChange={handleRecChange}>
            {b.book.title}
        </option>
    );
}