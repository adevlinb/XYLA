const express = require('express');
const router = express.Router();
const booksCtrl = require('../../controllers/api/books');
const ensureLoggedIn = require('../../config/ensureLoggedIn')



// POST /api/books/add
router.post('/add', ensureLoggedIn, booksCtrl.addBook);

module.exports = router;