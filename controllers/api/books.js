const Book = require('../../models/book');
const Bookshelf = require('../../models/bookshelf');
const fetch = require('node-fetch');
const book = require('../../models/book');
const API_KEY = process.env.API_KEY


module.exports = {
    addBook,
    googleSearchAPI,
    populateUserShelf,
    getUserLibrary,
    getUserRecs,
    addRecToFriend
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

async function populateUserShelf(req, res) {
    const shelf = await Bookshelf.findOne({ userId: req.user._id }).populate('userBooks.book').exec();
    let books = shelf.userBooks
    res.json(books);
}

async function getUserLibrary(req, res) {
    console.log('profile books controller', req.params.id)
    const userShelf = await Bookshelf.findOne({ userId: req.params.id }).populate('userBooks.book').exec();
    console.log(userShelf)
    let books = userShelf.userBooks;
    res.json(books);
}

async function getUserRecs(req, res) {
    console.log('profile books controller', req.params.id)
    const userRecShelf = await Bookshelf.findOne({ userId: req.params.id }).populate('recommended.recommendation:').populate('recommended.personRecommending:').exec();
    console.log(userRecShelf);
    let recs = userRecShelf.recommendation;
    res.json(recs);
}



async function addRecToFriend(req, res) {
    console.log('addRecController', req.params.id, req.body)
    const userShelf = await Bookshelf.findOne({ userId: req.params.id }).exec();
    req.body.personRecommending = user._id
    console.log(req.body)
    
    userShelf.recommended.push(req.body)
    await userShelf.save()



    const formattedBook = await Book.newBook(newBook);
    let inShelf = shelf.userBooks.some(userBook => userBook.book._id.equals(formattedBook._id));
    if (inShelf) {
        const updatedInShelf = await Bookshelf.findOne({ userId: req.user._id })
            .populate('userBooks.book').exec();
        return res.json(updatedInShelf);
    }
    shelf.userBooks.push({ book: formattedBook._id })
    await shelf.save()
    const updatedNotInShelf = await Bookshelf.findOne({ userId: req.user._id })
        .populate('userBooks.book').exec();
    res.json(updatedNotInShelf);
}