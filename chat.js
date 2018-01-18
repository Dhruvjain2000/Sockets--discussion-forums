//THIS FILE HANDLES JAVASCRIPT ON FRONT END
//DHRUV JAIN
//Make connection

//We have access to io variable because of the fact that i loaded it into index.html and both of these files are for front end
var socket=io.connect('http://localhost:4000');


//Query DOM

var message =document.getElementById('message');
var handle =document.getElementById('handle');
var output =document.getElementById('output');
var btn =document.getElementById('send');

//Emit Events
//Sending Data to Server When User Clicks On the button after filling the message and handle fields


/************************************************This event listner is not working *********************************************/
btn.addEventListner('click',function(){
 console.log("Event listner is fine");
socket.emit('chat',{  message :message.value, handle :handle.value
});
   message.value = "";
});

//Listen for Events

socket.on('chat',function(data){
  output.innerHTML +='<p><bold>' + data.handle +': </bold>' + data.message +'</p';
})
