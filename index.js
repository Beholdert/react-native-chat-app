const express = require('express');
const app = express();


const server = app.listen(5000, () => console.log('listening'));


const io = require('socket.io')(server);


io.on('connection', (socket) => {
    socket.on('sendMessage', (data) => {
        io.sockets.emit('recieveMessage', data.message);
    });
});