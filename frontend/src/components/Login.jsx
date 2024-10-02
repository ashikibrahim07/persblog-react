import React, { useState } from "react";
import {
  Container,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material"; // Import necessary Material-UI components
import { Visibility, VisibilityOff } from "@mui/icons-material"; // Import eye icons
import { useNavigate } from "react-router-dom";
import Footer from "./Footer"; // Adjust the path if needed
import config from "./config"; // Adjust the path based on your structure

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic login validation (you can expand this logic)
    if (username === config.username && password === config.password) {
      onLogin();
      navigate("/"); // Redirect to home after successful login
    } else {
      alert("Invalid credentials");
    }
  };

  // Function to toggle password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Container component="main" maxWidth="xs" style={{ marginTop: "200px" }}>
        <Typography variant="h5" align="center" className="mb-3">
          Admin Login
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Username input field */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoFocus
          />

          {/* Password input field with toggle */}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type={showPassword ? "text" : "password"} // Toggle between text and password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleTogglePasswordVisibility}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}{" "}
                    {/* Toggle icon */}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <Button type="submit" fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Container>

      <Footer />
    </>
  );
};

export default Login;
