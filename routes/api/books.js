const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


// GET /api/books/populateShelf    initial populate user bookshelf
router.get('/populateShelf', ensureLoggedIn, booksCtrl.populateUserShelf);
// GET /api/books/search
router.get('/search', ensureLoggedIn, booksCtrl.googleSearchAPI);
// POST /api/books/add
router.post('/add', ensureLoggedIn, booksCtrl.addBook);
// GET /api/books/users/:id
router.get('/users/:id', ensureLoggedIn, booksCtrl.getUserLibrary);

module.exports = router;