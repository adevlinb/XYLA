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
    let inShelf = shelf.userBooks.some(userBook => userBook.book._id.equals(formattedBook._id));
    if (inShelf) {
        const updatedInShelf = await Bookshelf.findOne({ userId: req.user._id })
            .populate('userBooks.book').exec();
       return res.json(updatedInShelf);
    }
    shelf.userBooks.push({book: formattedBook._id})
    await shelf.save()
    const updatedNotInShelf = await Bookshelf.findOne({ userId: req.user._id })
        .populate('userBooks.book').exec();
    res.json(updatedNotInShelf);
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