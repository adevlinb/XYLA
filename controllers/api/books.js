const Book = require('../../models/book');
const Bookshelf = require('../../models/bookshelf');

module.exports = {
    addBook
};

async function addBook(req, res) {
    console.log('bookCtrl')
    const book = await Book.formatBookInfo(req.body);
    const newBook = await Book.newBook(book);
    console.log(newBook);
    const shelf = await Bookshelf.findOne({userId: req.user._id}).exec();
    shelf.library.push(newBook)
    shelf.save()
    res.json(shelf);
}