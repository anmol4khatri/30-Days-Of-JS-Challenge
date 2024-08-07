let ws;
let username;

const authContainer = document.getElementById('auth-container');
const chatContainer = document.getElementById('chat-container');
const usernameInput = document.getElementById('username-input');
const joinChatButton = document.getElementById('join-chat');
const chatWindow = document.getElementById('chat-window');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

joinChatButton.addEventListener('click', joinChat);
sendButton.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

function joinChat() {
    username = usernameInput.value.trim();
    if (username) {
        authContainer.classList.add('hidden');
        chatContainer.classList.remove('hidden');
        connectWebSocket();
    }
}

function connectWebSocket() {
    ws = new WebSocket('ws://localhost:3000');

    ws.onopen = () => {
        console.log('Connected to the server');
        displayMessage('System', 'Connected to the chat room');
    };

    ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        displayMessage(data.username, data.message);
    };

    ws.onclose = () => {
        console.log('Disconnected from the server');
        displayMessage('System', 'Disconnected from the chat room');
    };
}

function sendMessage() {
    const message = messageInput.value.trim();
    if (message && ws.readyState === WebSocket.OPEN) {
        const data = { username, message };
        ws.send(JSON.stringify(data));
        messageInput.value = '';
    }
}

function displayMessage(username, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<strong>${username}:</strong> ${message}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}