import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Edit.css";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: "", content: "" });

  // Fetch the existing post data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  // Handle form submission for updating the post
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/api/posts/${id}`, post);
      navigate("/");
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" sx={{ my: 4 }}>
        Edit Post
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          margin="normal"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <TextField
          label="Content"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        />
        <Button type="submit" variant="contained" color="primary">
          Update Post
        </Button>
      </form>
    </Container>
  );
};

export default Edit;
