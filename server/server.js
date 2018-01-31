const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));


    // socket.emit('newMessage', {
    //     from: 'Mike',
    //     text: "hello",
    //     createdAt: new Date().getTime()
    // });

    socket.on('createMessage', (newMessage) => {
        console.log('New Message', newMessage);
        io.emit('newMessage', generateMessage(newMessage.from, newMessage.text));
    });

    socket.on('disconnect', () => {
        console.log('Disconnected from client');
    });

});

server.listen(port, () => {
    console.log('Listening on port', port);
})
