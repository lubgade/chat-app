var socket = io();

socket.on('connect', function(){
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //     to: 'jen@example.com',
    //     text: 'Hey! This is Leena'
    // });
    socket.emit('createMessage', {
        to: 'Joe',
        text: 'Hello to you too!'
    });
});

socket.on('disconnect', function(){
    console.log('Disconnected from server');
});

// socket.on('newEmail', function(email){
//     console.log('New Email', email);
// });

socket.on('newMessage', function(message){
    console.log('New message', message);
});