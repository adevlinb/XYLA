const User = require('../../models/user');

module.exports = {
    getAllProfiles
};

async function getAllProfiles(req, res) {
    console.log("im looking for profiles")
    const allProfiles = await User.find({}).select('name')
    console.log(allProfiles)
    res.json(allProfiles);
}
