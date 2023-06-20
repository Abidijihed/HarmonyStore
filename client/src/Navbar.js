import React, { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  InputBase,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
} from '@mui/material';
import {
  makeStyles,
} from '@material-ui/core';
import {alpha } from '@mui/material/styles';
import {
  FaShoppingCart,
  FaUser,
  FaPhoneAlt,
  FaInfo,
  FaSignInAlt,
  FaSearch,
  FaBars,
 
} from 'react-icons/fa';
import { 
   MdOutlineMailOutline,
  MdOutlineAddShoppingCart
 } from 'react-icons/md';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#e8b623',
    zIndex: theme.zIndex.drawer + 1,
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
    },
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchInput: {
    marginLeft: theme.spacing(1),
    color: 'black',
    backgroundColor:"white"
  },
  searchIcon: {
    marginLeft: theme.spacing(1),
    color:"black"
  },
  navIcons: {
    display: 'flex',
    alignItems: 'initial',
  },
  navIcon: {
    marginLeft: theme.spacing(2),
    fontSize:"25px",
    '&:hover': {
      backgroundColor: "white",
    },
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
}));

const Navbar = ({ handleChange,shop})=> {
  const [mobileOpen, setMobileOpen] = useState(false);
 
   const classes = useStyles();


  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>
        <Typography variant="h6" align="center" style={{marginTop:"10px",textDecoration:"underline"}} component={Link} to="/">
          HarmonyStore
        </Typography>
      </div>
      <Divider />
      <List>
        <ListItem button component={Link} to="/contact">
          <ListItemIcon>
            <MdOutlineMailOutline />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
        <ListItem button component={Link} to="/about">
          <ListItemIcon>
            <FaInfo />
          </ListItemIcon>
          <ListItemText primary="About Us" />
        </ListItem>
     <ListItem button component={Link} to="/login">
          <ListItemIcon>
            <FaSignInAlt />
          </ListItemIcon>
          <ListItemText primary="Login" />
        </ListItem>
      <ListItem button component={Link} to="/profile">
          <ListItemIcon>
            <FaUser />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
        <Divider />
        <ListItem button component={Link} to="/products">
          <ListItemIcon>
            <MdOutlineAddShoppingCart />
          </ListItemIcon>
          <ListItemText primary="Product List" />
        </ListItem>
      </List>
    </div>
  );
  
  return (
    <>
      <AppBar position="sticky" className={classes.appBar} sx={{backgroundColor:'#e8b623'}}>
        <Toolbar className='mynavbar'>
        <Typography variant="h6" align="center" style={{marginTop:"10px",textDecoration:"underline"}} component={Link} to="/">
          HarmonyStore
        </Typography>
          {/* <Hidden mdDown>
            <Typography className={classes.title} variant="h6" noWrap>
              ElectroZayn
            </Typography> */}
          {/* </Hidden> */}
          <Hidden mdUp>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <FaBars />
            </IconButton>
          </Hidden>
          {/* <Hidden smDown> */}
            <div className={classes.search} id='allsearch'>
              <div className={classes.searchIcon}>
                <FaSearch />
              </div>
              <InputBase
              id='search'
                placeholder="Search..."
                onChange={(e) => handleChange(e)}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                className={classes.searchInput}
              />
            </div>
          {/* </Hidden> */}
          <div className={classes.navIcons}>
            <Hidden smDown>
              <IconButton color="inherit" className={classes.navIcon} component={Link} to="/profile" >
                Profile
              </IconButton>
            <IconButton color="inherit" className={classes.navIcon} component={Link} to="/login">
                {/* <FaSignInAlt /> */}
                Login
              </IconButton>
              <IconButton color="inherit" className={classes.navIcon} component={Link} to="/contact">
                {/* <FaPhoneAlt /> */}
                Contact Us
              </IconButton>
              <IconButton color="inherit" className={classes.navIcon} component={Link} to="/about">
                {/* <FaInfo /> */}
                About Us
              </IconButton>
              <IconButton color="inherit" className={classes.navIcon} component={Link} to="/products">
                {/* <MdOutlineAddShoppingCart /> */}
                Products
              </IconButton>
            </Hidden>
            <IconButton color="inherit">
              <Badge badgeContent={Number(shop)} color="secondary" component={Link} to="/chekout">
                <FaShoppingCart fontSize="xlarge" color='white'/>
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Hidden mdUp>
        <nav className={classes.drawer}>
          <Drawer
            variant="temporary"
            anchor="left"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Hidden>
    </>
  );
};

export default Navbar;
