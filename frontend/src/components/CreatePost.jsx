import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

const CreatePost = () => {
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: "", content: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Reset form when component mounts
  useEffect(() => {
    setPost({ title: "", content: "" });
    console.log("CreatePost component mounted");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!post.title.trim() || !post.content.trim()) {
      alert("Please fill in both the title and content fields.");
      return;
    }

    setLoading(true); // Set loading state to true when submitting
    setError(null);

    try {
      // Add a timeout to prevent hanging requests
      const source = axios.CancelToken.source();
      const timeout = setTimeout(() => {
        source.cancel();
        setLoading(false);
        setError("Request timed out. Please try again.");
      }, 10000); // 10 second timeout

      const response = await axios.post(
        "http://localhost:4000/api/posts",
        { ...post },
        { cancelToken: source.token }
      );

      clearTimeout(timeout); // Clear timeout if the request completes
      console.log("Post created successfully!", response.data);

      setPost({ title: "", content: "" });
      navigate("/"); // Navigate to home after creating post
    } catch (error) {
      console.error("Error creating post:", error);

      if (axios.isCancel(error)) {
        setError("Request was canceled due to timeout.");
      } else {
        setError("Failed to create the post. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Container component="main" maxWidth="sm" style={{ marginTop: "100px" }}>
        <Typography variant="h5" align="center" className="mb-3">
          Create a New Post
        </Typography>
        {error && (
          <Typography
            variant="body1"
            color="error"
            align="center"
            className="mb-2"
          >
            {error}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Title"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Content"
            multiline
            rows={4}
            value={post.content}
            onChange={(e) => setPost({ ...post, content: e.target.value })}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Create Post"}
          </Button>
        </form>
      </Container>

      <Footer />
    </>
  );
};

export default CreatePost;
