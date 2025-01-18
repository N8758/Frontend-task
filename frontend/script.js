document.addEventListener("DOMContentLoaded", () => {
    const toggleMenuBtn = document.getElementById("toggleMenu");
    const userList = document.getElementById("userList");
    const messageInput = document.getElementById("messageInput");
    const sendButton = document.getElementById("sendButton");
    const chatMessages = document.getElementById("chatMessages");
    const darkModeToggle = document.getElementById("darkModeToggle");

    // Toggle Sidebar
    toggleMenuBtn.addEventListener("click", () => {
        userList.classList.toggle("hidden");
    });

    // Send Message
    sendButton.addEventListener("click", () => {
        sendMessage();
    });

    messageInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            appendMessage("You", messageText);
            messageInput.value = "";
        }
    }

    function appendMessage(sender, message) {
        const msgElement = document.createElement("p");
        msgElement.textContent = `${sender}: ${message}`;
        chatMessages.appendChild(msgElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Dark Mode Toggle
    darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        darkModeToggle.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
    });

    // Populate user list (Mock Data)
    const users = ["Alice", "Bob", "Charlie", "David"];
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = user;
        li.addEventListener("click", () => alert(`Chat with ${user}`));
        userList.appendChild(li);
    });

    // Responsive Scaling
    function adjustScaling() {
        let width = window.innerWidth;
        if (width >= 992 && width <= 1600) {
            document.body.style.transform = "scale(0.9)";
        } else if (width >= 700 && width < 767) {
            document.body.style.transform = "scale(0.8)";
        } else if (width >= 600 && width < 700) {
            document.body.style.transform = "scale(0.75)";
        } else if (width <= 600) {
            document.body.style.transform = "scale(0.5)";
        } else {
            document.body.style.transform = "scale(1)";
        }
    }

    window.addEventListener("resize", adjustScaling);
    adjustScaling();
});
