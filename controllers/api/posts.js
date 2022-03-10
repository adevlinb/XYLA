const User = require('../../models/user');
const Bookshelf = require('../../models/bookshelf');
const Book = require('../../models/book');
const Post = require('../../models/post')


module.exports = {
    create,
    getAllPosts,
    getUserPosts
};

async function create(req, res) {
    console.log("made it to the controller");
    console.log(req.body.book);
    const newPost = await Post.formatPostInfo(req);
    const post = await new Post(newPost)
    post.save();
    console.log(post)

}

function getAllPosts(req, res) {

}

function getUserPosts(req, res) {

}