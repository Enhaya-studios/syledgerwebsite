Syledger

Syledger is a real-time chat application with user authentication and a built-in credential manager, hosted on Render. It uses WebSockets (ws) for live messaging.

Features

✅ User authentication (Signup & Login)
✅ Real-time public chat using WebSockets (ws)
✅ Securely store and manage login credentials for other sites
✅ Dark theme interface
✅ Hosted on Render for live deployment

Project Structure

/syledgerwebsite
│── /client
│   ├── index.html         # Login & Signup page
│   ├── signup.html        # Signup page (if separate)
│   ├── chat.html          # Public chat page
│   ├── info_manager.html  # Credential manager
│   ├── styles.css         # Dark theme styling
│── /server
│   ├── app.js             # Express server for authentication
│   ├── ws.js              # WebSocket server
│   ├── db.json            # Local testing database
│   ├── package.json       # Dependencies
│── render.yaml            # Render deployment config
│── README.md              # Project documentation

Installation & Setup

1️⃣ Clone the Repository

git clone https://github.com/Enhaya-studios/syledgerwebsite.git
cd syledgerwebsite

2️⃣ Install Dependencies

cd server
npm install

3️⃣ Start the WebSocket Server

node ws.js

4️⃣ Start the Express Server

node app.js

5️⃣ Open in Browser

Visit http://localhost:3000 (or Render-deployed URL)

Deployment on Render

Push changes to GitHub:

git add .
git commit -m "Deploying to Render"
git push origin main

Go to Render, create a Web Service, and connect the GitHub repo.

Deploy the backend and WebSocket server.

Update chat.html to use the Render WebSocket URL.

WebSocket URL Setup

Replace ws://localhost:8080 in chat.html with your Render WebSocket URL.

const socket = new WebSocket("wss://your-render-websocket-url");

License

This project is open-source under the MIT License.