import React, { useState } from "react";
import {
  Typography,
  makeStyles,
  TextField,
  Button,
} from "@material-ui/core";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../../redux/action/UserAction";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(10),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: theme.spacing(3),
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function SignupPage() {
  const classes = useStyles();
  const [FirstName, setFirstName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [PhoneNumber, setPhone] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isFormValid = () => {
    let isValid = true;

    if (FirstName === "") {
      setFirstNameError(true);
      isValid = false;
    } else {
      setFirstNameError(false);
    }

    if (!/\S+@\S+\.\S+/.test(Email)) {
      setEmailError(true);
      isValid = false;
    } else {
      setEmailError(false);
    }

    if (Password.length < 8) {
      setPasswordError(true);
      isValid = false;
    } else {
      setPasswordError(false);
    }

    if (!PhoneNumber) {
      setPhoneError(true);
      isValid = false;
    } else {
      setPhoneError(false);
    }

    return isValid;
  };

  const handleSignup = () => {
    if (isFormValid()) {
      dispatch(
        register(
          {
            FirstName: FirstName,
            Email: Email,
            PhoneNumber: PhoneNumber,
            Password: Password,
            next: false,
          },
          null,
          navigate
        )
      );
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" align="center">
        Sign Up
      </Typography>
      <div
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="First Name"
          required
          error={firstNameError}
          value={FirstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <TextField
          label="Email"
          required
          error={emailError}
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          required
          error={passwordError}
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <PhoneInput
          country={"tn"}
          label="Phone Number"
          required
          error={phoneError}
          value={PhoneNumber}
          onChange={(PhoneNumber) => setPhone(PhoneNumber)}
        />
        <Button variant="contained" color="primary" onClick={handleSignup}>
          Sign Up
        </Button>
      </div>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default SignupPage;
