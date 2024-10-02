// App.js
import React, { useState, useEffect, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

// Lazy load components
const Home = lazy(() => import("./components/Home"));
const CreatePost = lazy(() => import("./components/CreatePost"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Edit = lazy(() => import("./components/Edit"));
const Login = lazy(() => import("./components/Login"));
const PostView = lazy(() => import("./components/PostView"));

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("isAdmin");
    if (loggedInUser === "true") {
      setIsAdmin(true);
    }
  }, []);

  // Handle login
  const handleLogin = () => {
    setIsAdmin(true);
    localStorage.setItem("isAdmin", "true"); // Save login state to local storage
  };

  // Handle logout
  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem("isAdmin"); // Remove login state from local storage
  };

  return (
    <Router>
      <Header isAdmin={isAdmin} onLogout={handleLogout} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home isAdmin={isAdmin} />} />
          <Route
            path="/create-post"
            element={isAdmin ? <CreatePost /> : <Navigate to="/login" />}
          />
          <Route
            path="/edit-post/:id"
            element={isAdmin ? <Edit /> : <Navigate to="/login" />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/post-view/:postId" element={<PostView />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
