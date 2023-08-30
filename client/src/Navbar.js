import React, { useEffect, useState } from 'react';
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
import { Badge, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { get_current } from './redux/action/UserAction';
import { useDispatch, useSelector } from 'react-redux';
const Navbar = ({productItemslen}) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [token, setToken] = useState(null);
  
  const isMobile = useMediaQuery('(max-width: 768px)'); // Define the breakpoint
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dropdownAnchor, setDropdownAnchor] = useState(null);
useEffect(()=>{
  const token=localStorage.getItem('token')
  setToken(token)
},[token])
useEffect(() => {
  const id = localStorage.getItem("id");
    dispatch(get_current(id))
}, [dispatch]);
const user=useSelector((state)=>state.UserReducer.users)

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
      {!token ?(  <ListItem button component={Link} to="/login"onClick={()=>setIsDrawerOpen(false)}  style={{marginLeft:"20px"}} >
          <ListItemText primary="Connexion" />
        </ListItem>):null}
        {token?(<ListItem button  component={Link} to="/profile" onClick={()=>setIsDrawerOpen(false)}  style={{marginLeft:"20px"}}>
          <ListItemText primary="Profile" />
        </ListItem>):null}
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
          {!isMobile&&<Button style={{color: "#000000",fontWeight: 900 }}component={Link} to="/" onClick={()=>setIsDrawerOpen(false)}>
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
               endIcon={<PersonIcon style={{color:"#000000",fontSize:"35px"}}/>}
               onClick={toggleDropdown}
            >
            </Button>
            <Menu
            style={{width:'200px'}}
              id="dropdown-menu"
              anchorEl={dropdownAnchor}
              keepMounted
              open={Boolean(dropdownAnchor)}
              onClose={closeDropdown}
            >
              {token && user.role!=="admin"?<MenuItem onClick={closeDropdown} component={Link} to="/monorder">Mon Order</MenuItem>:null}
              {token && user.role==="admin"?<MenuItem onClick={closeDropdown} component={Link} to="/userorder">User Order</MenuItem>:null}
              <MenuItem onClick={closeDropdown} component={Link} to="/products">Product List</MenuItem>
              <MenuItem onClick={closeDropdown} component={Link} to="/profile">Profile</MenuItem>
              <MenuItem onClick={closeDropdown} component={Link} to="/contact">Contact</MenuItem>
              <MenuItem onClick={closeDropdown} component={Link} to="/about">About</MenuItem>
              {/* <MenuItem onClick={closeDropdown}>Item 5</MenuItem> */}
            </Menu>
          </div>
          )}
          
          <Button
      onClick={() =>
        productItemslen?.length > 0
          ? navigate('/checkout')
          : Swal.fire('Please select a product')
      }
    >
      <Badge badgeContent={productItemslen?.length} color="#B76E79">
        <LocalMallIcon style={{ color: '#000000', fontSize: '35px' }} />
      </Badge>
    </Button>
          {!token?(<Button component={Link} to="/login" style={{color:"#000000"}}>Connexion</Button>):null}
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
 
