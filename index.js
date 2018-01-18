//THIS FILE HANDLES JAVASCRIPT ON BACKEND
//DHRUV JAIN

var express =require('express');
var socket =require('socket.io');
//App setup
var app=express();
var server =app.listen(4000,function () {
  console.log("Listening to  requests on port 4000");

});
//Listens to a port number
//Static files
app.use(express.static('public'));

//Socket setup
var io=socket(server);

io.on('connection',function (socket) {
  console.log('Made Socket connection',socket.id);
  // Handling the chat message which was send to server
   //data is the object i created to receive data , Since i send data to server in form of object consisting of message and handle
  socket.on('chat',function(data){
    io.sockets.emit('chat',data);//Sending data from server to other clients which was provided some other client

  })
  // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
})

})
