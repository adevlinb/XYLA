const User = require('../../models/user');
const Club = require('../../models/club');

module.exports = {
    getAllClubs,
    startNewClub
};

async function getAllClubs(req, res) {
    try {

    } catch (err) {
        res.status(400).json(err);
    }
}

async function startNewClub(req, res) {
    try {
        const club = await new Club(req.body)
        await club.save();
        console.log(club)
        res.json(club)

    } catch (err) {
        res.status(400).json(err);
    }
}