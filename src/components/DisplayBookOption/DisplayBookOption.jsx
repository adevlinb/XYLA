



export default function DisplayBookOption({ b }) {

    return (
        <option value={b._id}  alt={`${b.book.title}`} name="book">
            {b.book.title}
        </option>
    );
}