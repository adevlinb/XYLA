const express = require('express');
const router = express.Router();
const clubsCtrl = require('../../controllers/api/clubs');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


// GET /api/getAllClubs/    initial populate user bookshelf
router.get('/getAllClubs', ensureLoggedIn, clubsCtrl.getAllClubs);

// POST /api/clubs/startNewClub
router.post('/startNewClub', ensureLoggedIn, clubsCtrl.startNewClub);


module.exports = router;
