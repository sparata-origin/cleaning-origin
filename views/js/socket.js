const socket = io.connect("/");

var chatWindow = document.getElementById('chatWindow');
var sendButton = document.getElementById('chatMessageSendBtn');
var chatInput = document.getElementById('chatInput');

socket.on('connect', function(){
    var name = prompt('대화명을 입력해주세요.', '');
    socket.emit('newUserConnect', name);
});

socket.on('updateMessage', function(data){
    if(data.name === 'SERVER'){
        var info = document.getElementById('info');
        info.innerHTML = data.message;

        setTimeout(() => {
            info.innerText = '';
        }, 1000);

    }else{
        var chatMessageEl = drawChatMessage(data);
        chatWindow.appendChild(chatMessageEl);

        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});

sendButton.addEventListener('click', function(){
    var message = chatInput.value;

    if(!message) return false;
   
    socket.emit('sendMessage', {
        message
    });

    chatInput.value = '';
});

function drawChatMessage(data){
    var wrap = document.createElement('p');
    var message = document.createElement('span');
    var name = document.createElement('span');

    name.innerText = data.name;
    message.innerText = data.message;

    name.classList.add('output__user__name');
    message.classList.add('output__user__message');

    wrap.classList.add('output__user');
    wrap.dataset.id = socket.id;

    wrap.appendChild(name);
    wrap.appendChild(message);

    return wrap;
}