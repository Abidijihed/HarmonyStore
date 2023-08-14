import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { TextField, Typography,makeStyles } from '@material-ui/core';
import { Button } from '@mui/material'
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
function PaymentForm() {
  const WALLET_ID = '64ccc6d74760b71467c919e9';
  const navigate=useNavigate()
  const classes = useStyles();

  const [receiverWalletId, setReceiverWalletId] = useState(WALLET_ID);
  const [token, setToken] = useState('TND');
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState('immediate');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [lastNameError, setlastNameError] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart'));
    const total = data.reduce((acc, el) => (acc += el.price), 0);

    // Retrieve token (currency) from cart data
    const cartToken = data[0]?.currency || 'TND';

    // Convert amount based on the retrieved token
    let convertedAmount = total;
    if (cartToken === 'EUR' || cartToken === 'USD') {
      convertedAmount *= 100; // Convert to Centimes
    } else if (cartToken === 'TND') {
      convertedAmount *= 1000; // Convert to Millimes
    }

    setToken(cartToken);
    setAmount(convertedAmount || 0);


  }, []);
  const initiatePayment =async () => {
    // e.preventDefault();
    if (firstName === "") {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
    if (firstName === "") {
      setlastNameError(true);
    } else {
      setlastNameError(false);
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (
      firstName &&
      /\S+@\S+\.\S+/.test(email) && lastName
    ) {
 
    try {
      const response = await axios.post('https://www.harmonystore01.com/payments/payment', {
        receiverWalletId: receiverWalletId || WALLET_ID,
        token: token,
        amount: amount,
        type: type,
        firstname: firstName,
        lastname: lastName,
        email: email,
      });
      navigate(`/${response.data.payUrl}`)
      // Redirect to the Konnect payment gateway using response.data.payment_url
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  
}else{
  alert("Please fill all fields");
}
};

  return (
    <div>
      <div className={classes.root}>
      <Typography variant="h3" align="center">
        Sign Up
      </Typography>
      <div
        className={classes.form}
        noValidate
        autoComplete="off"
        // onSubmit={()=>dispatch(register({FirstName,Email,Password,PhoneNumber}))}
      >
        <TextField
          label="First Name"
          required
          error={firstNameError}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
         <TextField
          label="First Name"
          required
          error={lastNameError}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <TextField
          label="Email"
          required
          error={emailError}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
       
        <Button variant="contained" color="primary" onClick={initiatePayment} >
        Payment
        </Button>
      </div>
      </div>
      {/* <button onClick={initiatePayment}>Initiate Payment</button> */}
    </div>
  );
}

export default PaymentForm;
