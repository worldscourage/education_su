var express = require('express'), http=require('http');
var app = express();
var server = http.createServer(app);
var jade = require('jade');
var io = require('socket.io').listen(server);


app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set("view options", { layout: false });
//app.configure(function() {
//    app.use(express.static(__dirname + '/public'));
//});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.render('home.jade');
});
server.listen(8421);

io.sockets.on('connection', function (socket) {
    socket.on('setPseudo', function (data) {
        //socket.set('pseudo', data);
	socket.pseudo = data;
    });
    socket.on('message', function (message) {
	var pseudo = socket.pseudo
            var data = { 'message' : message, 'pseudo' : pseudo };
            socket.broadcast.emit('message', data);
            console.log("user " + pseudo + " send this : " + message);
    });
});
