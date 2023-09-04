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
import { useNavigate } from "react-router-dom";
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
            
         {   activeStep === 0 ? <Button
                
                onClick={()=>navigate('/products')}
                className={classes.button}
              >
                Back
              </Button>:
              <Button
                
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>}
            </Box>
          </div>
        )}
      </div>
    </div>
  );
}

