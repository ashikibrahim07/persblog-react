import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  Alert,
  CircularProgress,
} from "@mui/material";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = ({ isAdmin }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/posts");
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError("Failed to load posts. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePost = () => {
    if (!isAdmin) {
      alert("Only authorized users can create a post.");
    } else {
      navigate("/create-post");
    }
  };

  const handleEditPost = (postId) => {
    navigate(`/edit-post/${postId}`);
  };

  const handleViewPost = (postId) => {
    navigate(`/post-view/${postId}`);
  };

  const handleDeletePost = async (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        setPosts(
          posts.map((post) =>
            post.id === postId ? { ...post, deleting: true } : post
          )
        );
        await axios.delete(`http://localhost:4000/api/posts/${postId}`);
        setPosts(posts.filter((post) => post.id !== postId));
      } catch (error) {
        console.error("Error deleting post:", error);
        setError("Failed to delete the post. Please try again.");
      }
    }
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <Container className="container-title">
        <Typography variant="h4" align="center" gutterBottom>
          Explore the Latest Posts
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Welcome to the blog! Here are my thoughts and posts.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ textAlign: "center" }}>
            {error}
          </Alert>
        )}

        {isAdmin && (
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <Button
              variant="contained"
              className="create-post-btn"
              onClick={handleCreatePost}
            >
              Create New Post
            </Button>
          </div>
        )}

        {loading ? (
          <div style={{ textAlign: "center", margin: "40px 0" }}>
            <CircularProgress />
          </div>
        ) : (
          <Grid container spacing={3}>
            {posts.length > 0 ? (
              posts.map((post) => (
                <Grid item xs={12} sm={6} md={4} key={post.id}>
                  <Card className="card-body-bg">
                    <div className="card-top-title">
                      <Typography
                        variant="h5"
                        align="center"
                        onClick={() => handleViewPost(post.id)}
                        className="card-title"
                      >
                        {post.title}
                      </Typography>
                    </div>
                    <CardContent className="card-content-limited">
                      <Typography variant="body2" color="textSecondary">
                        {post.content
                          ? post.content.substring(0, 100) + "..."
                          : "No content available"}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary"
                        onClick={() => handleViewPost(post.id)}
                        className="card-read-more"
                      >
                        Read More
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          padding: "8px 0",
                        }}
                      >
                        {isAdmin && (
                          <>
                            <Button
                              size="small"
                              className="btn-edit"
                              onClick={() => handleEditPost(post.id)}
                              variant="outlined"
                            >
                              Edit
                            </Button>

                            <Button
                              size="small"
                              className="btn-delete"
                              onClick={() => handleDeletePost(post.id)}
                              disabled={post.deleting}
                              variant="outlined"
                            >
                              {post.deleting ? "Deleting..." : "Delete"}
                            </Button>
                          </>
                        )}
                      </div>
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        className="post-date"
                      >
                        {formatDate(post.posted_at)}
                      </Typography>
                      <br />
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        className="post-author"
                      >
                        Author: {post.author || "Ashik Ibrahim"}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            ) : (
              <Alert severity="info" sx={{ textAlign: "center" }}>
                No posts available
              </Alert>
            )}
          </Grid>
        )}
      </Container>

      <Footer />
    </>
  );
};

export default Home;
