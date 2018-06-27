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

    socket.on('disconnect', function() {
        console.log('User disconnected');
    })
})
  server.listen(3000, () => {
      console.log('server is up on port ' + port);
  })