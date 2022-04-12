// const { Profiler } = require('react');
const User = require('../../models/user');

module.exports = {
    getAllProfiles,
    findProfile
};

async function getAllProfiles(req, res) {
    try {
        const allProfiles = await User.find({ _id: { $ne: req.user._id } }).select('name')
        res.json(allProfiles);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function findProfile(req, res) {
    try {
        const profile = await User.findById(req.params.id).select('name');
        return res.json(profile);
    } catch (err) {
        res.status(400).json(err);
    }
}