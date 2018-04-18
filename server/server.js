var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
});

app.get('/play', function(req, res) {
  io.sockets.emit('queue', {
    action: 'ADD',
    song: {
      youtubeId: 'a1Y73sPHKxw',
      name: 'Dramatic chipmunk'
    }
  })
  res.send('ok');
})

app.get('/skip', function(req, res) {
  io.sockets.emit('skip',{})
  res.send('ok');
})

app.get('/bg', function(req, res) {
  io.sockets.emit('queue', {
    action: 'ADD',
    song: {
      youtubeId: 'ocW3fBqPQkU',
    }
  })
  res.send('ok');
})

app.get('/say', function(req, res) {
  io.sockets.emit('say', {
    text: 'To jest bardzo długi testowy tekst audio',
  })
  res.send('ok');
})

http.listen(8000, function(){
  console.log('listening on *:8000');
});
