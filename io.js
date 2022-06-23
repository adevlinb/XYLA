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
    getIo
}

function init(http) {
    io = require('socket.io')(http);

    io.on('connection', function (socket) {
        console.log(socket.id, "socketId");

    });
}

function getIo() {
    return io;
}

function validateToken(token) {
    return new Promise(function (resolve) {
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err) resolve(false);
            resolve(decoded.user);
        });
    });
}

function findGameInMemory(user) {
    let gamesArr = Object.values(games);
    const game = gamesArr.find(g => g.players.some(p => p.playerId == user._id));
    return game;
}

function getWinner(board) {
    if (Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
    if (Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
    if (Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
    if (Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
    if (Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
    if (Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
    if (Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
    if (Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];
    // No winner or tie, so return null (keep playing)
    if (board.includes(null)) return null;
    // It's a tie!
    return 0;
}

