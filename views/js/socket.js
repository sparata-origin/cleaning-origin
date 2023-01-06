const socket = io.connect("/");

let chatWindow = document.getElementById('chatWindow');
let sendButton = document.getElementById('chatMessageSendBtn');
let chatInput = document.getElementById('chatInput');

socket.on('connect', function(){
    let name = prompt('대화명을 입력해주세요.', '');
    socket.emit('newUserConnect', name);
});

socket.on('updateMessage', function(data){
    if(data.name === 'SERVER'){
        let info = document.getElementById('info');
        info.innerHTML = data.message;

        setTimeout(() => {
            info.innerText = '';
        }, 1000);

    }else{
        let chatMessageEl = drawChatMessage(data);
        chatWindow.appendChild(chatMessageEl);

        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
});

sendButton.addEventListener('click', function(){
    let message = chatInput.value;

    if(!message) return false;
   
    socket.emit('sendMessage', {
        message
    });

    chatInput.value = '';
});

function drawChatMessage(data){
    let wrap = document.createElement('p');
    let message = document.createElement('span');
    let name = document.createElement('span');

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