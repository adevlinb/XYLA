// const { Profiler } = require('react');
const User = require('../../models/user');

module.exports = {
    getAllProfiles,
    findProfile,
    updateUserSettings
};

async function getAllProfiles(req, res) {
    try {
        // const allProfiles = await User.find({ _id: { $ne: req.user._id } }).select('name')
        const allProfiles = await User.find({ _id: { $ne: req.user._id } }).select({})
        res.json(allProfiles);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function findProfile(req, res) {
    try {
        // const profile = await User.findById(req.params.id).select('name');
        const profile = await User.findById(req.params.id);
        return res.json(profile);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function updateUserSettings(req, res) {
    try {
        console.log("hit the controller", req.body.checkbox);
        let profile = await User.findOneAndUpdate({_id: req.params.id}, {profilePublicOrPrivate: req.body.checkbox})
        console.log(profile, "hello update")
        return res.json("hello");
    } catch (err) {
        res.status(400).json(err);
    }
}