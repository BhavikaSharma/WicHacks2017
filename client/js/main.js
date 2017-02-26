var sock = io();

sock.on('msg', answered);

function answered (answer) {
 var $answers = document.getElementById('answers');
 var elem = document.createElement('li');
 elem.innerHTML = answer;
 $answers.appendChild(elem);
}



  var form = document.getElementById ('chat_form');
  form.addEventListener('submit', function(e){ //event e
   var input = document.getElementById('chat_input');
   var inputVal = input.value;
   input.value = ''; //clears input field
   console.log(inputVal);
   //answered(inputVal);
   sock.emit('msg', inputVal);//event will go to server
   e.preventDefault(); 
   //return false;
  });


