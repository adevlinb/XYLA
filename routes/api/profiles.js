const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/api/profiles');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


// GET /api/profiles/    initial populate user bookshelf
router.get('/allProfiles', ensureLoggedIn, profilesCtrl.getAllProfiles);


module.exports = router;
