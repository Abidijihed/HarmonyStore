import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, IconButton, Menu, MenuItem } from '@mui/material';
import { ShoppingCart, Search, Menu as MenuIcon } from '@mui/icons-material';
import './Navbar.css';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'gold', color: 'maroon' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 1 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: 20, fontWeight: 'bold' }}>
          Harmony Store
        </Typography>
        <div sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
          <InputBase sx={{ backgroundColor: 'white', color: 'black', border: 'none', padding: 1, marginRight: 1, width: 250 }} placeholder="Search" />
          <IconButton sx={{ backgroundColor: 'gold', color: 'maroon' }}>
            <Search />
          </IconButton>
        </div>
        <div sx={{ display: { xs: 'flex', sm: 'none' }, alignItems: 'center' }}>
          <IconButton
            sx={{ backgroundColor: 'gold', color: 'maroon', marginRight: 1 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                backgroundColor: 'gold',
                minWidth: 120,
                boxShadow: (theme) => theme.shadows[8],
                left: 0, // Position the dropdown on the left side of the input
              },
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left', // Adjust the horizontal alignment of the dropdown
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <MenuItem>
              <a href="#">Contact Us</a>
            </MenuItem>
            <MenuItem>
              <a href="#">About Us</a>
            </MenuItem>
          </Menu>
        </div>
        <div sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton sx={{ backgroundColor: 'gold', color: 'maroon', marginLeft: 1 }}>
            <ShoppingCart />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
