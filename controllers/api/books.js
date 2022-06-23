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
    addRecToFriend,
    getMyRecs
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
      let results = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=25&key=${API_KEY}`, {
        method: 'GET'
      })
      const books = await results.json();
      res.json(books);

    } catch (error) {
        res.status(400).json(err);
    }
}

async function populateUserShelf(req, res) {
    try{ 
        const shelf = await Bookshelf.findOne({userId: req.user._id}).populate('userBooks.book').exec();

        let books = shelf.userBooks;
        res.json(books);
    }   catch (err) {  
        res.status(400).json(err);
    }
}

async function getUserLibrary(req, res) {
    try {
        const userShelf = await Bookshelf.findOne({userId: req.params.id}).populate('userBooks.book').exec();
        let books = userShelf.userBooks;
        res.json(books);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function getUserRecs(req, res) {
    try {
        const userRecShelf = await Bookshelf.findOne({ userId: req.params.id }).populate('recommended.recommendation').populate('recommended.personRecommending').exec();
        res.json(userRecShelf.recommended);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function getMyRecs(req, res) {
    try {
        const myRecShelf = await Bookshelf.findOne({ userId: req.user._id }).populate('recommended.recommendation').populate('recommended.personRecommending').exec();
        res.json(myRecShelf.recommended);
    } catch (err) {
        res.status(400).json(err);
    }
}



async function addRecToFriend(req, res) {
    try{ 
        const userShelf = await Bookshelf.findOne({ userId: req.params.id }).exec();
        req.body.personRecommending = req.user._id
        const bookRec = req.body
        let inRecShelf = userShelf.recommended.some(recommendation => recommendation.recommendation._id.equals(req.body.recommendation));
            if (inRecShelf) {
                const updatedInShelf = await Bookshelf.findOne({ userId: req.params.id }).populate('userBooks.book').populate('recommended.recommendation').populate('recommended.personRecommending').exec();
                return res.json(updatedInShelf);
            }
        userShelf.recommended.push(bookRec)
        await userShelf.save()
        const updatedNotInShelf = await Bookshelf.findOne({ userId: req.params.id }).populate('userBooks.book').populate('recommended.recommendation').populate('recommended.personRecommending').exec();
        // let books = updatedNotInShelf.userBooks;
        res.json(updatedNotInShelf);
    } catch (err) {
        res.status(400).json(err);
    }
}
