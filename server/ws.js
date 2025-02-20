const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });  // Change to match your Render WebSocket port

const clients = new Set();

wss.on("connection", (ws) => {
    console.log("🔌 New client connected");
    clients.add(ws);

    ws.on("message", (message) => {
        console.log(`📨 Received: ${message}`);

        // Broadcast message to all connected clients
        clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    ws.on("close", () => {
        console.log("❌ Client disconnected");
        clients.delete(ws);
    });
});

console.log("✅ WebSocket server running on ws://localhost:8080");
