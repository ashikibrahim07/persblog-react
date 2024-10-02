import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css"; // Import the CSS file

const navItems = [
  { text: "HOME", path: "/" },
  { text: "ABOUT", path: "/about" },
  { text: "CONTACT", path: "/contact" },
];

function Header({ isAdmin, onLogout }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        PersBlog
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
        {/* Create Post Button */}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            to="/create-post" // Link to Create Post
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="CREATE POST" />
          </ListItemButton>
        </ListItem>

        {/* Conditionally render Login/Logout button */}
        <ListItem disablePadding>
          {isAdmin ? (
            <ListItemButton onClick={onLogout} sx={{ textAlign: "center" }}>
              <ListItemText className="logoutButton" primary="LOGOUT" />
            </ListItemButton>
          ) : (
            <ListItemButton
              component={Link}
              to="/login"
              sx={{ textAlign: "center" }}
            >
              <ListItemText className="loginButton" primary="LOGIN" />
            </ListItemButton>
          )}
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box className="header">
      <CssBaseline />
      <AppBar component="nav" className="appBar">
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component={Link} to="/" className="logo">
            PersBlog
          </Typography>
          <Box
            sx={{ display: { xs: "none", sm: "block" }, marginLeft: "auto" }}
          >
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                className="navButton"
              >
                {item.text}
              </Button>
            ))}
            <Button component={Link} to="/create-post" className="navButton">
              Create Post
            </Button>
            {isAdmin ? (
              <Button
                variant="outlined"
                color="error"
                onClick={onLogout}
                className="logoutButton"
              >
                Logout
              </Button>
            ) : (
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/login"
                className="loginButton"
              >
                Login
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" className="toolbarSpacing">
        <Toolbar />
        {/* Main content goes here */}
      </Box>
    </Box>
  );
}

Header.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default Header;
