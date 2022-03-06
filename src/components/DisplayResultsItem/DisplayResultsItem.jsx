import { useState } from 'react'

export default function DisplayResults({ book, addBook }) {
    // const [formData, setFormData] = useState({
    //     Title: '',
    //     Authors: [],
    //     Subjects: [],
    //     Publisher: '',
    //     isbnNum: 0,
    //     pageCount: 0,
    //     description: '',
    //     thumbnail: '',
    // })

    // function handleChange(evt){
    //     console.log('formset')
    //     setFormData({ ...formData, [evt.target.name]: evt.target.value });
        
    // }

    function handleBook() {
        let newBook = "book"
        console.log(addBook)
        addBook(newBook)
    }

    return (
        <>
                <p name="Title" value={`${book.volumeInfo.title}`} >{book.volumeInfo.title}</p>
                <p name="Authors" value={`${book.volumeInfo.authors}`}>{book.volumeInfo.authors}</p>
                <p name="Subjects" value={`${book.volumeInfo.categories}`}>{book.volumeInfo.categories}</p>
                <p name="Publishers">{book.publisher}</p>
                <p name="pageCount">{book.volumeInfo.pageCount}</p>
                <p name="isbnNum">{book.volumeInfo.industryIdentifiers[0].identifier}</p>
                <p name="rating">{book.volumeInfo.averageRating}</p>
                <p name="description">{book.volumeInfo.description}</p>
                <img src={`${book.volumeInfo.imageLinks.thumbnail ? book.volumeInfo.imageLinks.thumbnail : "http://i.imgur.com/J5LVHEL.jpg"}`} alt={`${book.volumeInfo.title}`} name="thumbnail" value={`${book.volumeInfo.imageLinks.thumbnail}`} />
                <button onClick={handleBook} type="submit">Add Book</button>
       
        </>
    );
}