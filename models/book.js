const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {type: String},
    authors: [],
    subjects: [],
    publishers: { type: String, default: 'Information Not Available'},
    pageCount: { type: Number, default: 0},
    isbnNum: "",
    rating: {type: Number, default: 0},
    description: { type: String, default: 'Information Not Available'},
    thumbnail: { type: String, default: "http://i.imgur.com/J5LVHEL.jpg"}
}, { timestamps: true });

bookSchema.statics.newBook = function (book) {
    book.isbnNum = parseInt(book.isbnNum);
    // 'this' is the Book model
    return this.findOneAndUpdate(
        // query
        {title: book.title},
        // update
        { 
            title: book.title,
            authors: book.authors,
            subjects: book.subjects,
            publishers: book.publishers,
            pageCount: book.pageCount,
            isbnNum: book.isbnNum,
            rating: book.rating,
            description: book.description,
            thumbnail: book.thumbnail
        },
        // upsert option will create the doc if 
        // it doesn't exist
        { upsert: true, new: true }
    );
};

bookSchema.statics.formatBookInfo = function (book) {
    let newBook = {
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors,
        subjects: book.volumeInfo.categories,
        publishers: book.volumeInfo.publisher,
        pageCount: book.volumeInfo.pageCount,
        isbnNum: book.volumeInfo.industryIdentifiers[0].identifier,
        rating: book.volumeInfo.averageRating,
        description: book.volumeInfo.description,
        thumbnail: book.volumeInfo.imageLinks.thumbnail
    }
    return newBook;
}

module.exports = mongoose.model('Book', bookSchema);