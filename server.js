'use strict';

let http = require('http');
let express = require('express');
let socketio = require('socket.io');

let app = express();

let server = http.createServer(app);  //app is listener - app will respond to HTTP requests to server
let io = socketio(server);

//let waitingPlayer;

io.on('connection', connected);

app.use(express.static(__dirname + '/client'));
server.listen(8080, function() {
  console.log('Server connected!')
});

function connected(sock) {
    sock.emit('msg', 'Hello!');
    sock.on('msg', function (txt) { 
	    io.emit('msg', txt) //broadcast event to ever user --> 'msg' = event type 
    });

    /*if (waitingPlayer) {
        new RpsGame(waitingPlayer, sock);
        waitingPlayer = null;
    } else {
        waitingPlayer = sock;
        sock.emit('msg', 'You are waiting for a second player');
    }*/
}
