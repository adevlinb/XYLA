const Book = require('../../models/book');
const Bookshelf = require('../../models/bookshelf');
const fetch = require('node-fetch')
const API_KEY = process.env.API_KEY


module.exports = {
    addBook,
    googleSearchAPI
};

async function addBook(req, res) {
    console.log('bookCtrl')
    const book = await Book.formatBookInfo(req.body);
    const newBook = await Book.newBook(book);
    console.log(newBook);
    const shelf = await Bookshelf.findOne({userId: req.user._id}).exec();
    shelf.library.push({book: newBook._id})
    shelf.save()
    res.json(shelf);
}

async function googleSearchAPI(req, res) {
    let query = req.query.q
    try{
      let results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`, {
        method: 'GET'
      })
      const books = await results.json();
      console.log(books, "controller");
      res.json(books);
      
    } catch (error) {
      console.log(error);
    }
}




// add .populate to get books showing in the bookshelf.. update variable names
// fix landing page and navigation!