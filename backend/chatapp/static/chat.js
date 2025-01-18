const chatSocket = new WebSocket("ws://" + window.location.host + "/ws/chat/");

chatSocket.onmessage = function (event) {
    const data = JSON.parse(event.data);
    const chatMessages = document.getElementById("chatMessages");
    
    const messageElement = document.createElement("p");
    messageElement.textContent = `${data.user}: ${data.message}`;
    chatMessages.appendChild(messageElement);
};

function sendMessage() {
    const messageInput = document.getElementById("messageInput");
    chatSocket.send(JSON.stringify({
        "user": "User",
        "message": messageInput.value
    }));
    messageInput.value = "";
}

document.getElementById("sendButton").onclick = sendMessage;
