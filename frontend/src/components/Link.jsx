// Import Link from react-router-dom at the top if not already done
import { Link, useNavigate } from "react-router-dom";

// Inside the drawer definition
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
          component={Link} // Change this line to use Link
          to="/create-post" // Destination path for creating a post
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
