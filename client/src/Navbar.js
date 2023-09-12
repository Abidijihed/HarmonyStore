import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";

import "./Navbar.css";
import { Badge, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { get_current } from "./redux/action/UserAction";
import { useDispatch, useSelector } from "react-redux";
import FilterComponent from "./components/FiltreComponents/FilterComponent";
import { FaLocationDot } from 'react-icons/fa6'
import { FaShopify } from "react-icons/fa";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const Navbar = ({ productItemslen, handelsearch,searchResults,search,navbarprice }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  const isMobile = useMediaQuery("(max-width: 768px)"); // Define the breakpoint
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [dropdownAnchor, setDropdownAnchor] = useState(null);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, [token]);
  useEffect(() => {
    const id = localStorage.getItem("id");
    dispatch(get_current(id));
  }, [dispatch]);
  const user = useSelector((state) => state.UserReducer.users);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const toggleDropdown = (event) => {
    setDropdownAnchor(event.currentTarget);
  };

  const closeDropdown = () => {
    setDropdownAnchor(null);
  };
  // const navigate=useNavigate()

  
  const renderSearchSuggestions = () => {
    if (searchResults.length === 0) {
      return null; // Don't render anything if there are no suggestions
    }

    return (
      <div className="search-suggestions">
        <ul>
        {searchResults.map((product) => (
  <li style={{cursor:"pointer"}} key={product.id}
  onClick={() =>
            navigate(
              `/product/${encodeURIComponent(product.product_name)}`
            )
          }
  
   >{product.product_name}</li>
))}
        </ul>
      </div>
    );
  };
  const renderDrawer = () => (
    <div style={{ width: "300px" }}>
      <List>
        <Typography
          variant="h6"
          align="center"
          style={{ textDecoration: "underline", marginLeft: "20px" }}
          component={Link}
          to="/"
          onClick={() => setIsDrawerOpen(false)}
        >
          HarmonyStore
        </Typography>
        <Divider style={{ backgroundColor: "black", marginTop: "10px" }} />
        {token && user.role !== "admin"? (
          <ListItem component={Link} to="/monorder">
            <ListItemText primary="Mes commandes" />
          </ListItem>
        ) : null}
        {token && user.role === "admin" ? (
          <ListItem component={Link} to="/userorder">
            <ListItemText primary="Toutes les commandes" />
          </ListItem>
        ) : null}
        <Divider style={{ backgroundColor: "black", marginTop: "10px" }} />
       <FilterComponent />
              <ListItem
          button
          component={Link}
          to="/products"
          onClick={() => setIsDrawerOpen(false)}
          style={{ marginLeft: "20px" }}
        >
          <ListItemText primary="Product List" />
        </ListItem>
        {!token ? (
          <ListItem
            button
            component={Link}
            to="/login"
            onClick={() => setIsDrawerOpen(false)}
            style={{ marginLeft: "20px" }}
          >
            <ListItemText primary="Connexion" />
          </ListItem>
        ) : null}
        {token ? (
          <ListItem
            button
            component={Link}
            to="/profile"
            onClick={() => setIsDrawerOpen(false)}
            style={{ marginLeft: "20px" }}
          >
            <ListItemText primary="Profile" />
          </ListItem>
        ) : null}
        <ListItem
          button
          component={Link}
          to="/contact"
          onClick={() => setIsDrawerOpen(false)}
          style={{ marginLeft: "20px" }}
        >
          <ListItemText primary="Contact" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/about"
          onClick={() => setIsDrawerOpen(false)}
          style={{ marginLeft: "20px" }}
        >
          <ListItemText primary="About Us" />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/service"
          onClick={() => setIsDrawerOpen(false)}
          style={{ marginLeft: "20px" }}
        >
          <ListItemText primary="Service" />
        </ListItem>
      </List>
    </div>
  );

  return (
   
    <div className="navbar">
      <AppBar elevation={4} style={{ background: "#FFFFFF" }}>
     
        <Toolbar style={{ display: "flex", justifyContent: "space-around" }}>
        
            <IconButton
              edge="start"
              style={{ color: "#000000" }}
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
         
          {!isMobile && (
            <Button
              style={{ color: "#000000", fontWeight: 900 }}
              component={Link}
              to="/"
              onClick={() => setIsDrawerOpen(false)}
            >
              Harmony Store
            </Button>
          )}
          <div>
          <h5 style={{color:"black",display:"flex"}}><img style={{width:"40px"}} src="https://static.vecteezy.com/system/resources/previews/022/101/124/original/whatsapp-logo-transparent-free-png.png"/>+216 54 154 220 </h5>
            
          </div>
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                aria-controls="dropdown-menu"
                aria-haspopup="true"
                variant="text"
                style={{ color: "#000000" }}
                endIcon={
                  <PersonIcon style={{ color: "#000000", fontSize: "35px" }} />
                }
                onClick={toggleDropdown}
              ></Button>
              <Menu
                style={{ width: "200px" }}
                id="dropdown-menu"
                anchorEl={dropdownAnchor}
                keepMounted
                open={Boolean(dropdownAnchor)}
                onClose={closeDropdown}
              >
                {token && user.role !== "admin" ? (
                  <MenuItem
                    onClick={closeDropdown}
                    component={Link}
                    to="/monorder"
                  >
                    Mes commandes
                  </MenuItem>
                ) : null}
                {token && user.role === "admin" ? (
                  <MenuItem
                    onClick={closeDropdown}
                    component={Link}
                    to="/userorder"
                  >
                   Toutes les commandes
                  </MenuItem>
                ) : null}
                <MenuItem
                  onClick={closeDropdown}
                  component={Link}
                  to="/products"
                >
                  Product List
                </MenuItem>
                <MenuItem
                  onClick={closeDropdown}
                  component={Link}
                  to="/profile"
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={closeDropdown}
                  component={Link}
                  to="/contact"
                >
                  Contact
                </MenuItem>
                <MenuItem onClick={closeDropdown} component={Link} to="/about">
                  About
                </MenuItem>
                {/* <MenuItem onClick={closeDropdown}>Item 5</MenuItem> */}
              </Menu>
            </div>
          )}
           <FaLocationDot style={{fontSize:"30px",color:"black"}} onClick={()=>navigate('/contact')}/>
          <Button
            onClick={() =>
              productItemslen?.length > 0
                ? navigate("/checkout")
                : Swal.fire("Please select a product")
            }
          >
            <Badge badgeContent={productItemslen?.length} color="#B76E79">
              <FaShopify style={{ color: "#000000", fontSize: "35px" }} />
              </Badge>
              <h6 style={{marginLeft:"3px"}}>{navbarprice?navbarprice:null}</h6>{' '} TND
            
          </Button>
          
        </Toolbar>
        <Row style={{marginTop:"6px"}}>
      <div style={{justifyContent:"space-around", display:"flex"}}>
        <Col md={token?12:6}>
        <InputBase
              onChange={(e) => handelsearch(e)}
              placeholder="  Search..."
              startAdornment={<SearchIcon style={{ color: "#B76E79" }} />}
              style={{color: "#000000",border:"solid 1px",borderRadius:"3%" }}
            />
            {search.length?renderSearchSuggestions():null}
        </Col>
      {!token ? (  <Col md={3}>
        
          <>
            <Button component={Link} to="/login" style={{ color: "#000000" }}>
              Connexion
            </Button><span style={{color:"black"}}>/</span>
            <Button component={Link} to="/signup" style={{ color: "#000000" }}>
            Créer un Compte 
            </Button>
            </>
           
          
        </Col>): null}
        </div>
      </Row>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {renderDrawer()}
        </Drawer>
      </AppBar>
     
      {isMobile /* Show drawer only on mobile */ && (
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {renderDrawer()}
        </Drawer>
      )}
      
    </div>

  );
};

export default Navbar;
