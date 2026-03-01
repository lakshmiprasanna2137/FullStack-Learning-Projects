const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// serve frontend files
app.use(express.static('public'));

// when user connects
io.on('connection', (socket) => {
    console.log("A user connected");

    // receive message
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg); // send to all users
    });

    socket.on('disconnect', () => {
        console.log("User disconnected");
    });
});

// run server
http.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});