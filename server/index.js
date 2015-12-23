'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

require('dotenv').load();

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.use(express.static(path.join(__dirname, '../dist')));

http.listen(process.env.SERVER_PORT, function(){
   console.log('Server is running on :', process.env.SERVER_PORT);
});