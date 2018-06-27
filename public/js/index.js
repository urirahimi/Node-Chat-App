
var socket = io();

socket.on('connect', function() {
    console.log('Connected to server')

    // socket.emit('createEmail', {
    //     to: 'jen@example.com',
    //     test: 'Hey, suck me'
    // })
    socket.emit('createMessage', {
        from: 'client',
        text: 'hello'
    })
})

socket.on('disconnect', function() {
    console.log('Disconnected from server')
})

socket.on('newMessage', function(message) {
    console.log('New message', message);
})

// socket.on('newEmail', function(email) {
//     console.log('New email', email);
// })

