require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise"); // Using the promise version for async/await
const bcrypt = require("bcryptjs");

const app = express();

app.use(cors());
app.use(express.json());

// Create the connection pool (Replaces Prisma)
const pool = mysql.createPool(process.env.DATABASE_URL);

// LOGIN ROUTE
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Direct SQL Query - No magic, just standard SQL
    const [rows] = await pool.execute("SELECT * FROM login WHERE email = ?", [
      email,
    ]);

    // If no user found
    if (rows.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = rows[0];

    // 2. CHECK: Is it a Hash? Or Plain Text?
    let isValid = false;

    // First, try comparing as a Hash (The secure way)
    const isHashMatch = await bcrypt.compare(password, user.password);

    // Second, try comparing as Plain Text (The 'I manually added this user' way)
    const isPlainMatch = password === user.password;

    if (isHashMatch || isPlainMatch) {
      isValid = true;
    }

    // 3. Final Decision
    if (isValid) {
      console.log("--> Login SUCCESS!");
      res.json({ message: "Login successful!", userId: user.id });
    } else {
      console.log("--> Password mismatch");
      res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// START SERVER
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
