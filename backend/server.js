import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = 4000;

dotenv.config();

// DATABASE
const db = new pg.Client({
  user: process.env.PROCESS_USERNAME,
  host: process.env.PROCESS_HOST,
  database: process.env.PROCESS_DATABASE,
  password: process.env.PROCESS_PASSWORD,
  port: process.env.PROCESS_PORT,
});
db.connect();

// MIDDLEWARES
app.use(cors()); // Allows cross-origin requests from React frontend
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES

// Fetch all posts
app.get("/api/posts", (req, res) => {
  db.query("SELECT * FROM posts ORDER BY posted_at DESC", (err, result) => {
    if (err) {
      console.error("Error fetching posts:", err);
      res.status(500).json({ error: "Error fetching posts" });
    } else {
      res.status(200).json(result.rows);
    }
  });
});

// server.js
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  // Replace with your actual username and password
  const adminUsername = "admin";
  const adminPassword = "password";

  if (username === adminUsername && password === adminPassword) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Create a new post
app.post("/api/posts", (req, res) => {
  const { title, content } = req.body;
  const currentTime = new Date();
  db.query(
    "INSERT INTO posts (title, content, posted_at) VALUES ($1, $2, $3)",
    [title, content, currentTime],
    (err, result) => {
      if (err) {
        console.error("Error creating post:", err);
        res.status(500).json({ error: "Error creating post" });
      } else {
        res.status(201).json({ message: "Post created successfully" });
      }
    }
  );
});
// Fetch and render edit form
app.get("/edit/:id", async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const post = await db.query("SELECT * FROM posts WHERE id=$1", [postId]);
    if (post.rows.length > 0) {
      res.render("edit", { post: post.rows[0] });
    } else {
      res.status(404).send("Post not found");
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).send("Error fetching post data");
  }
});
// Fetch a single post
app.get("/api/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  db.query("SELECT * FROM posts WHERE id=$1", [postId], (err, result) => {
    if (err) {
      console.error("Error fetching post:", err);
      res.status(500).json({ error: "Error fetching post" });
    } else {
      res.status(200).json(result.rows[0]);
    }
  });
});

// Update a post
app.put("/api/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content } = req.body;
  db.query(
    "UPDATE posts SET title=$1, content=$2 WHERE id=$3",
    [title, content, postId],
    (err, result) => {
      if (err) {
        console.error("Error updating post:", err);
        res.status(500).json({ error: "Error updating post" });
      } else {
        res.status(200).json({ message: "Post updated successfully" });
      }
    }
  );
});

// Delete a post
app.delete("/api/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  db.query("DELETE FROM posts WHERE id=$1", [postId], (err, result) => {
    if (err) {
      console.error("Error deleting post:", err);
      res.status(500).json({ error: "Error deleting post" });
    } else {
      res.status(200).json({ message: "Post deleted successfully" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
