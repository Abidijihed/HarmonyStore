import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import "./Navbar.css"
import { Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 768px)'); // Define the breakpoint
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dropdownAnchor, setDropdownAnchor] = useState(null);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const toggleDropdown = (event) => {
    setDropdownAnchor(event.currentTarget);
  };

  const closeDropdown = () => {
    setDropdownAnchor(null);
  };

  const renderDrawer = () => (
    <div style={{width:"200px"}}>
      <List>
      <Typography variant="h6" align="center" style={{textDecoration:"underline",marginLeft:"20px"}} component={Link} to="/" onClick={()=>setIsDrawerOpen(false)}>
          HarmonyStore
        </Typography>
      <Divider style={{backgroundColor:"black" ,marginTop:"10px"}}/>
        <ListItem button component={Link} to="/products" onClick={()=>setIsDrawerOpen(false)} style={{marginLeft:"20px"}}>
          <ListItemText primary="Product List" />
        </ListItem>
        <ListItem button component={Link} to="/login"onClick={()=>setIsDrawerOpen(false)}  style={{marginLeft:"20px"}} >
          <ListItemText primary="Connexion" />
        </ListItem>
        <ListItem button  component={Link} to="/profile" onClick={()=>setIsDrawerOpen(false)}  style={{marginLeft:"20px"}}>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="/contact" onClick={()=>setIsDrawerOpen(false)}  style={{marginLeft:"20px"}}>
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem button component={Link} to="/about" onClick={()=>setIsDrawerOpen(false)}  style={{marginLeft:"20px"}}>
          <ListItemText primary="About Us"  />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="navbar">
      <AppBar  elevation={4}  style={{ background: "#FFFFFF" }}>
        <Toolbar style={{display:"flex",justifyContent:"space-around"}} >
          {isMobile && (
            <IconButton
              edge="start"
              style={{color:"#000000"}}
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
          ) }
          {!isMobile&&<Button style={{color: "#000000" }}>
            Harmony Store
          </Button>}
          <div>
            <InputBase
              placeholder="  Search..."
              startAdornment={<SearchIcon style={{ color: "#B76E79" }} />}
              style={{ marginRight: '10px', color: '#000000' }}
            />
            
          </div>
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
               aria-controls="dropdown-menu"
               aria-haspopup="true"
               variant="text"
               style={{ color: "#000000" }}
               endIcon={<PersonIcon />}
               onClick={toggleDropdown}
            >
            </Button>
            <Menu
              id="dropdown-menu"
              anchorEl={dropdownAnchor}
              keepMounted
              open={Boolean(dropdownAnchor)}
              onClose={closeDropdown}
            >
              <MenuItem onClick={closeDropdown}>Item 1</MenuItem>
              <MenuItem onClick={closeDropdown}>Item 2</MenuItem>
              <MenuItem onClick={closeDropdown}>Item 3</MenuItem>
              <MenuItem onClick={closeDropdown}>Item 4</MenuItem>
              <MenuItem onClick={closeDropdown}>Item 5</MenuItem>
            </Menu>
          </div>
          )}
          <Button style={{color:"#000000"}}>Connexion</Button>
          <Button>
             <LocalMallIcon  style={{color:"#000000",fontSize:"35px"}}/> 
          </Button>
        </Toolbar>

      </AppBar>
      {isMobile && ( /* Show drawer only on mobile */
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {renderDrawer()}
        </Drawer>
      )}
    </div>
  );
};

export default Navbar;
 
