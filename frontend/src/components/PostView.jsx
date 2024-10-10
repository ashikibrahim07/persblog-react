import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Typography, CircularProgress, Paper } from "@mui/material"; // Material-UI components
import Footer from "./Footer"; // Adjust the path if needed

const PostView = () => {
  const { postId } = useParams(); // Get post ID from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the post based on the postId
  const fetchPost = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/posts/${postId}`
      );
      setPost(response.data);
    } catch (error) {
      console.error("Error fetching the post:", error);
      setError("Failed to load the post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  return (
    <>
      <Container component="main" maxWidth="md" style={{ marginTop: "150px" }}>
        {loading ? (
          <div className="text-center my-5">
            <CircularProgress />
          </div>
        ) : error ? (
          <Typography variant="body1" color="error" align="center">
            {error}
          </Typography>
        ) : (
          <Paper
            elevation={5}
            style={{
              padding: "20px",
              borderRadius: "8px",
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              align="center"
              style={{ marginTop: "30px", marginBottom: "50px" }}
              gutterBottom
            >
              {post.title}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              style={{ whiteSpace: "pre-wrap" }} // Preserve whitespace and line breaks
            >
              {post.content}
            </Typography>

            <Typography
              variant="caption"
              color="textSecondary"
              display="block"
              align="right"
            >
              Posted at: {new Date(post.posted_at).toLocaleString()}
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              display="block"
              align="right" // Align author to the left
            >
              Author: Ashik Ibrahim {/* Display the author's name */}
            </Typography>
          </Paper>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default PostView;
