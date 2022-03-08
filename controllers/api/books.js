const Book = require('../../models/book');
const Bookshelf = require('../../models/bookshelf');
const fetch = require('node-fetch');
const book = require('../../models/book');
const API_KEY = process.env.API_KEY


module.exports = {
    addBook,
    googleSearchAPI
};

async function addBook(req, res) {
    const newBook = await Book.formatBookInfo(req.body);
    const formattedBook = await Book.newBook(newBook);
    const shelf = await Bookshelf.findOne({userId: req.user._id}).exec();
    let inShelf = shelf.userBookSchema.find(b => b.book.toString() === formattedBook._id.toString())
    console.log(inShelf);
    if (inShelf) {
        console.log("item in shelf");
        return;
    }
    console.log("item not in shelf")
    shelf.userBookSchema.push({book: formattedBook._id})
    shelf.save()
    const updatedShelf = await Bookshelf.findOne({ userId: req.user._id })
        .populate([{path: 'userBookSchema', populate: { path: 'book', model: Book }}]).exec();
    console.log(updatedShelf, "updated shelf")
    res.json(updatedShelf);
}

async function googleSearchAPI(req, res) {
    let query = req.query.q
    try{
      let results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`, {
        method: 'GET'
      })
      const books = await results.json();
      res.json(books);

    } catch (error) {
      console.log(error);
    }
}