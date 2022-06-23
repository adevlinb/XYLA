/*
  This module contains all of the server-side functionality
  and logic - excluding sign up and log in
*/


let io;

// Keep active games in memory for better performance
// and fire and forget saving of game documents
const games = {};

module.exports = {
    init,
}

function init(http) {
    io = require('socket.io')(http);

    io.on('connection', function (socket) {
        console.log(socket.id, "socketId");

    });
}



