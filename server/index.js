'use strict';

var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');

require('dotenv').load();

if(app.settings.env === 'development'){
    app.use(express.static(path.join(__dirname, "../dist")));
} else {
    app.use(express.static(path.join(__dirname, "../release")));
}

http.listen(process.env.SERVER_PORT, function(){
   console.log('Server is running on :', process.env.SERVER_PORT);
});