var app = require('express')();
var http = require('http').Server(app);
var path = require('path');

app.get('/', function (req, res) {
    res.send('Hello world');
});

app.use(express.static(path.join(__dirname, '../dist')));

http.listen(3000, function(){
   console.log('Server is running on :3000');
});