module.exports = function(req, res, next) {
    //send back status code 401 - "Unauthorized" if not logged in
    if (!req.user) return res.status(401).json('Unauthorized')
        //everything is cool
    next();
};