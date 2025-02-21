const ws = new WebSocket("wss://syledger-backend.onrender.com"); // Use your WebSocket URL

ws.onopen = () => {
    console.log("Connected to WebSocket server.");
};

ws.onmessage = (event) => {
    const messages = document.getElementById("messages");
    const message = document.createElement("div");
    message.textContent = event.data;
    messages.appendChild(message);
};

function sendMessage() {
    const input = document.getElementById("message");
    if (input.value.trim() !== "") {
        ws.send(input.value);
        input.value = "";
    }
}
