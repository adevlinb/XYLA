const { Profiler } = require('react');
const User = require('../../models/user');

module.exports = {
    getAllProfiles,
    findProfile
};

async function getAllProfiles(req, res) {
    console.log("im looking for profiles")
    const allProfiles = await User.find({}).select('name')
    console.log(allProfiles)
    res.json(allProfiles);
}

async function findProfile(req, res) {
    console.log("find profile controller", req.params.id)
    const profile = await User.findById(req.params.id).select('name');
    console.log(profile);
    return res.json(profile);
}