const socketIo = require("socket.io");
const http = require("./app");
const usercheck = require('./middleware/logincheck')
const io = socketIo(http);


io.sockets.on('connection', function(socket){
  
  socket.on('newUserConnect', function(name){
      socket.name = name;

      io.sockets.emit('updateMessage', {
          name : 'SERVER',
          message : name + '님이 접속했습니다.'
      });
  });

  socket.on('disconnect', function(){
      io.sockets.emit('updateMessage', {
          name : 'SERVER',
          message : socket.name + '님이 퇴장했습니다.'
      });
  });

  socket.on('sendMessage', function(data){
      data.name = socket.name;
      io.sockets.emit('updateMessage', data);
  });
});