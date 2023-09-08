import axios from "axios";
import React, {useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from 'react-bootstrap/Spinner';

import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { get_current } from "../../redux/action/UserAction";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: "0 auto",
    marginTop: theme.spacing(10),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "bold",
    margin: "10px 0",
  },
  section: {
    marginBottom: theme.spacing(3),
  },
  profileImage: {
    width: "150px",
    height: "150px",
    margin: "0 auto",
    marginBottom: theme.spacing(2),
    borderRadius: "50%",
    objectFit: "cover",
  },
  prettyButton: {
    background: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
    border: 0,
    borderRadius: 10,
    color: "white",
    padding: "10px 20px",
    cursor: "pointer",
    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
}));

function ProfilePage() {
  const classes = useStyles();
  const dispatch= useDispatch() 
  useEffect(() => {
    const id = localStorage.getItem("id");
      dispatch(get_current(id))
  }, [dispatch]);
  const user=useSelector((state)=>state.UserReducer.users)
  const logout = () => {
    axios.get("https://www.harmonystore01.com/api/logout").then((res) => {
      if (res.data === "user loged out") {
        localStorage.clear();
        window.location.reload();
      }
    });
  };
  return (
    <>   
     { !user ?
     <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
      
      :  <Card className={classes.root} >
          <CardHeader
            avatar={
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
            }
            title={
              <Typography variant="h4" className={classes.title}>
                Profile Information
              </Typography>
            }
          />
          <CardContent>
            <img
              src={
                user.profileImage ||
                "https://img.favpng.com/12/15/21/computer-icons-avatar-user-profile-recommender-system-png-favpng-HaMDUPFH1etkLCdiFjgTKHzAs.jpg"
              }
              alt="Profile"
              className={classes.profileImage}
            />

            <div className={classes.section}>
              <Typography variant="h6" gutterBottom>
                Email:
              </Typography>
              <Typography variant="body1">{user?.Email}</Typography>
            </div>
            <Divider />
            <div className={classes.section}>
              <Typography variant="h6" gutterBottom>
                Phone Number:
              </Typography>
              <Typography variant="body1">{user?.PhoneNumber}</Typography>
            </div>
            <Divider />
            <div className={classes.section}>
              <Typography variant="h6" gutterBottom>
                First Name:
              </Typography>
              <Typography variant="body1">
                {user ? user.FirstName : null}
              </Typography>
            </div>
            <Divider />
            <div className={classes.section}>
              <Typography variant="h6" gutterBottom>
                Last Name:
              </Typography>
              <Typography variant="body1">{user ? user.LastName : null}</Typography>
            </div>
            <Divider />
            <div className={classes.section}>
              <Typography variant="h6" gutterBottom>
                Address:
              </Typography>
              <Typography variant="body1">{user ? user.Address : null}</Typography>
            </div>
            <Divider />
            <div className={classes.section}>
              <Typography variant="h6" gutterBottom>
                Code Zip:
              </Typography>
              <Typography variant="body1">{user ? user.Zip : null}</Typography>
            </div>
            <Divider />
            <div className={classes.section}>
              <Typography variant="h6" gutterBottom>
                Country:
              </Typography>
              <Typography variant="body1">{user ? user.country : null}</Typography>
            </div>
            <Divider />
          </CardContent>

          <Button style={{ backgroundColor: "red" }} onClick={logout}>
            LogOut
          </Button>
        </Card>
   }

      {/* Second section */}
    </>
  );
}

export default ProfilePage;
