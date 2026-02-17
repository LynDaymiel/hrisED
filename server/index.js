require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise"); // Using the 'promise' version
const bcrypt = require("bcryptjs");

const app = express();

app.use(cors());
app.use(express.json());

// 1. Create the Database Connection Pool
const pool = mysql.createPool(process.env.DATABASE_URL);

// 2. Test the connection immediately
pool
  .getConnection()
  .then((connection) => {
    console.log("✅ Database Connected Successfully!");
    connection.release();
  })
  .catch((err) => {
    console.error("❌ Database Connection Failed:", err.message);
  });

// --- LOGIN ROUTE ---
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const [rows] = await pool.execute("SELECT * FROM login WHERE email = ?", [
      email,
    ]);

    if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = rows[0];

    // Check Password (Hash or Plain Text)
    const isHashMatch = await bcrypt.compare(password, user.password);
    const isPlainMatch = password === user.password;

    if (isHashMatch || isPlainMatch) {
      res.json({
        message: "Login successful!",
        user: { id: user.id, email: user.email },
      });
    } else {
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// START SERVER
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
