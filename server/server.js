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

  socket.emit('newMessage', generateMessage('admin', 'welcome to chat app'));

  socket.broadcast.emit('newMessage',generateMessage('admin', 'new User joined'));

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);

    // socket.emit from admin text welcome to the chat app
    socket.emit('initialMessage', {
        from: 'Admin',
        text: 'Welcome to the chat app',
        createdAt: new Date().getTime()
    })

    // socket.broadcast.emit from admint next new user joined
    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user has joined the chat app',
        createdAt: new Date().getTime()
    })

    io.emit('newMessage', generateMessage(message.from, message.text));
    // socket.broadcast.emit('newMessage', {
    //   from: message.from,
    //   text: message.text,
    //   createdAt: new Date().getTime()
    // });
  });

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
