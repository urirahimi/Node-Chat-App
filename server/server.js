// console.log(__dirname + '../public');
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
    //     from: 'Mike@example.com',
    //     text: 'Suck my dick',
    //     createAt: 123
    // });

    socket.emit('newMessage', {
        from: 'Mike@example.com',
        text: 'Suck my dick',
        createdAt: 123
    });

    socket.on('createMessage', (message) => {
        console.log('create message: ', message);
    })


    // socket.on('createEmail', (newEmail) => {
    //     console.log('createEmail', newEmail);
    // })

    socket.on('disconnect', function() {
        console.log('User disconnected');
    })
})
  server.listen(3000, () => {
      console.log('server is up on port ' + port);
  })