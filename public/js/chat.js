let socket = io();
//emit msg

let form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let m = document.getElementById('m')
    socket.emit('chat message', m.value);
    return false;
})
socket.on('chat message', (msg) => {
    let messages = document.getElementById('messages')
    let liTag = messages.innerHTML + `<li>${msg}</li>`
    messages.innerHTML = liTag
})