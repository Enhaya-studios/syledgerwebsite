const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 8080;
const DB_FILE = "db.json";

app.use(cors());
app.use(bodyParser.json());

// Load database
function loadDB() {
    try {
        const data = fs.readFileSync(DB_FILE);
        return JSON.parse(data);
    } catch (error) {
        return { users: [], savedLogins: [] };
    }
}

// Save database
function saveDB(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// ✅ Signup Endpoint
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const db = loadDB();

    if (db.users.some(user => user.username === username)) {
        return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    db.users.push({ username, password: hashedPassword });
    saveDB(db);

    res.status(201).json({ message: "Signup successful!" });
});

// ✅ Login Endpoint
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const db = loadDB();
    const user = db.users.find(user => user.username === username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid username or password" });
    }

    res.status(200).json({ message: "Login successful!" });
});

// Start server
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
