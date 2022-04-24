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
        console.log("hit the controller", req.body.profilePublicOrPrivate);
        await User.findOneAndUpdate({_id: req.params.id}, {profilePublicOrPrivate: req.body.profilePublicOrPrivate})
        const profile = await User.findById(req.params.id).populate("requests").populate("friends");
        console.log(profile, "hello update")
        return res.json(profile);
    } catch (err) {
        res.status(400).json(err);
    }
}
async function addFriendRequest(req, res) {
    try {
        console.log("hit the addfriendrequest controller", req.params.userId, req.params.profileId);
        const user = await User.findById(req.params.userId);
        const profile = await User.findById(req.params.profileId);
        if (user.requests.includes(req.params.profileId) || profile.requests.includes(req.params.profileId)) return res.json([user, profile])
        user.requests.push(req.params.profileId);
        user.save();
        profile.requests.push(req.params.userId);
        profile.save()
        const updatedUser = await User.findById(req.params.userId).populate("requests").populate("friends");
        const updatedProfile = await User.findById(req.params.profileId).populate("requests").populate("friends");
        console.log(updatedUser, updatedProfile);
        return res.json([updatedUser, updatedProfile]);
    } catch (err) {
        res.status(400).json(err);
    }
}

