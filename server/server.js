// console.log(__dirname + '../public');
const path = require('path'); 
const express = require('express');

const publicPath = path.join();
const port = process.env.PORT || 3000;
console.log(publicPath)
var app = express()

app.use(express.static(publicPath));

   
  app.listen(3000, () => {
      console.log('server is up on port ' + port);
  })