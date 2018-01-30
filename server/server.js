const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit('newEmail', {
    //     from: 'mike@example.com',
    //     text: 'What is going on',
    //     createdAt: Date.now()
    // });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // });

    socket.emit('newMessage', {
        from: 'Mike',
        text: "hello",
        createdAt: Date.now()
    });

    socket.on('createMessage', (newMessage) => {
        console.log('New Message', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from client');
    });

});

server.listen(port, () => {
    console.log('Listening on port', port);
})
