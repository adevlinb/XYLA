// const { Profiler } = require('react');
const User = require('../../models/user');

module.exports = {
    getAllProfiles,
    findProfile,
    updateUserSettings,
    addFriendRequest
};

async function getAllProfiles(req, res) {
    try {
        // const allProfiles = await User.find({ _id: { $ne: req.user._id } }).select('name')
        const allProfiles = await User.find({ _id: { $ne: req.user._id } }).select({}).populate("requests").populate("friends")
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
        console.log(req.body, "updating user settings")
        await User.findOneAndUpdate({_id: req.params.id}, {profilePublicOrPrivate: req.body.profilePublicOrPrivate})
        const profile = await User.findById(req.params.id).populate("requests.user").populate("friends.user").populate("blocked.user").populate("clubs.club").exec();
        return res.json(profile);
    } catch (err) {
        res.status(400).json(err);
    }
}
async function addFriendRequest(req, res) {
    console.log("i made it here")
    try {
        const user = await User.findById(req.params.userId);
        const profile = await User.findById(req.params.profileId);
        // if (user.requests.includes(req.params.profileId) || profile.requests.includes(req.params.profileId)) return res.json([user, profile])
        console.log("im here a little later")
        user.requests.push({ user: req.params.profileId });
        user.save();
        profile.requests.push({ user: req.params.userId });
        profile.save()
        console.log("now im here");
        const updatedUser = await User.findById(req.params.userId).populate("requests.user").populate("friends.user").populate("blocked.user").populate("clubs.club").exec();
        const updatedProfile = await User.findById(req.params.profileId).populate("requests.user").populate("friends.user").populate("blocked.user").populate("clubs.club").exec();
        console.log("im here and testing", updatedUser, updatedProfile);
        return res.json([updatedUser, updatedProfile]);
    } catch (err) {
        res.status(400).json(err);
    }
}

