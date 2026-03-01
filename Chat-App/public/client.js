const socket = io();

const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

// send message
form.addEventListener('submit', function(e){
    e.preventDefault();

    if(input.value){
        socket.emit('chat message', input.value);
        input.value = '';
    }
});

// receive message
socket.on('chat message', function(msg){
    const li = document.createElement('li');
    li.textContent = msg;
    messages.appendChild(li);
    window.scrollTo(0, document.body.scrollHeight);
});