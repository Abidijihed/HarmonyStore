// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { TextField, Typography,makeStyles } from '@material-ui/core';
// import { Button } from '@mui/material'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: theme.spacing(10),
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: theme.spacing(3),
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));
// function PaymentForm() {
//   const WALLET_ID = '64ccc6d74760b71467c919e9';
//   const navigate=useNavigate()
//   const classes = useStyles();

//   const [receiverWalletId, setReceiverWalletId] = useState(WALLET_ID);
//   const [token, setToken] = useState('TND');
//   const [amount, setAmount] = useState(0);
//   const [type, setType] = useState('immediate');
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [firstNameError, setFirstNameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [lastNameError, setlastNameError] = useState(false);

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem('cart'));
//     const total = data.reduce((acc, el) => (acc += el.price), 0);

//     // Retrieve token (currency) from cart data
//     const cartToken = data[0]?.currency || 'TND';

//     // Convert amount based on the retrieved token
//     let convertedAmount = total;
//     if (cartToken === 'EUR' || cartToken === 'USD') {
//       convertedAmount *= 100; // Convert to Centimes
//     } else if (cartToken === 'TND') {
//       convertedAmount *= 1000; // Convert to Millimes
//     }

//     setToken(cartToken);
//     setAmount(convertedAmount || 0);


//   }, []);
//   const initiatePayment =async () => {
//     // e.preventDefault();
//     if (firstName === "") {
//       setFirstNameError(true);
//     } else {
//       setFirstNameError(false);
//     }
//     if (firstName === "") {
//       setlastNameError(true);
//     } else {
//       setlastNameError(false);
//     }
//     if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//     }
//     if (
//       firstName &&
//       /\S+@\S+\.\S+/.test(email) && lastName
//     ) {
 
//     try {
//       await axios.post('https://www.harmonystore01.com/payments/payment', {
//         receiverWalletId: receiverWalletId || WALLET_ID,
//         token: token,
//         amount: amount,
//         type: type,
//         firstname: firstName,
//         lastname: lastName,
//         email: email,
//       }).then((response)=>{
//         window.location.href=response.data.payUrl
//         // navigate(`/${response.data.payUrl}`)
//       })
      
//       // Redirect to the Konnect payment gateway using response.data.payment_url
//     } catch (error) {
//       console.error('Error initiating payment:', error);
//     }
  

// };

//   return (
//     <div>
//       <div className={classes.root}>
//       <Typography variant="h3" align="center">
//         Sign Up
//       </Typography>
//       <div
//         className={classes.form}
//         noValidate
//         autoComplete="off"
//       >
//         <TextField
//           label="First Name"
//           required
//           error={firstNameError}
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//          <TextField
//           label="First Name"
//           required
//           error={lastNameError}
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <TextField
//           label="Email"
//           required
//           error={emailError}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
       
//         <Button variant="contained" color="primary" onClick={initiatePayment} >
//         Payment
//         </Button>
//       </div>
//       </div>
//     </div>
//   );
// }

// export default PaymentForm;
import React, { useState, useEffect } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { register } from "../../redux/action/UserAction";
import { useNavigate } from "react-router-dom";
import Test2 from "../Test2";
import StepOneValidateOrder from "../checkout/StepOneValidateOrder";
import StepTowSaveInformation from "../checkout/StepTowSaveInformation";
import StepThreeMakePayment from "../checkout/StepThreeMakePayment";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
}));

const steps = ["Verifer votre achat", "Register Votre Information","Confirmer votre payment"]; // Add more steps if needed

export default function CombinedComponent() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <StepOneValidateOrder handleNext={handleNext}/>;
      case 1:
        return <StepTowSaveInformation handleNext={handleNext} />;
      case 2:
        return <StepThreeMakePayment handleNext={handleNext} />
      default:
        return "Unknown step";
    }
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>
            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <Box mt={2}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              {/* <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Place Order" : "Next"}
              </Button> */}
            </Box>
          </div>
        )}
      </div>
    </div>
  );
}

