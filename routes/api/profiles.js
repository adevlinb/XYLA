const express = require('express');
const router = express.Router();
const profilesCtrl = require('../../controllers/api/profiles');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


// GET /api/profiles/    initial populate user bookshelf
router.get('/allProfiles', ensureLoggedIn, profilesCtrl.getAllProfiles);

// GET /api/profiles/find/:id
router.get('/find/:id', ensureLoggedIn, profilesCtrl.findProfile);

// GET /api/profiles/:userId/friendRequest/:profileId
router.get('/:userId/friendRequest/:profileId', ensureLoggedIn, profilesCtrl.addFriendRequest);

// POST /api/profiles/updateUserSettings/:id
router.post('/updateUserSettings/:id', ensureLoggedIn, profilesCtrl.updateUserSettings);


module.exports = router;
