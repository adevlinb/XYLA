const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/api/posts');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


// GET /api/books/    initial populate user bookshelf
router.get('/allPosts', ensureLoggedIn, postsCtrl.getAllPosts);
// GET /api/books/search
router.get('/userPosts', ensureLoggedIn, postsCtrl.getUserPosts);
// POST /api/postss/add
router.post('/add', ensureLoggedIn, postsCtrl.create);

module.exports = router;