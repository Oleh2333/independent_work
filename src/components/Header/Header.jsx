import PropTypes from "prop-types"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const drawerWidth = 240
const navItems = [
  { name: "Home", path: "/" },
  { name: "Notes", path: "/notes" },
  { name: "Todo", path: "/todo" },
]

function Header(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      React
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <NavLink
            to={item.path}
            style={{ textDecoration: "none" }}
            key={index}
          >
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            React
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <NavLink to={item.path} key={index}>
                {({ isActive }) => (
                  <Button
                    sx={{
                      color: "#fff",
                      backgroundColor: isActive ? "#4A90E2" : "transparent",
                      "&:hover": {
                        backgroundColor: isActive ? "#357ABD" : "rgba(255, 255, 255, 0.1)",
                      },
                    }}
                  >
                    {item.name}
                  </Button>
                )}
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true 
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth
            }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}

Header.propTypes = {
  window: PropTypes.func
}

export default Header
