import { useState } from "react";
import CheckoutForm from "../checkoutForm/CheckoutForm";
import Confirmation from "../confirmation/Confirmation";
import { Paper, Typography, Stepper, Step, StepLabel } from "@mui/material";
import "./Checkout.css";

const steps = ["Shipping address", "Payment details"];

export default function Checkout() {
  const [stepProgress, setStepProgress] = useState(0);

  return (
    <>
      <div className="toolbar" />
      <Paper className="paper">
        <Typography variant="h4" align="center">
          Checkout
        </Typography>
        <Stepper className="stepper" activeStep={stepProgress}>
          {steps.map((step) => (
            <Step key={step}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {stepProgress === steps.length ? (
          <Confirmation />
        ) : (
          <CheckoutForm stepProgress={stepProgress} />
        )}
      </Paper>
    </>
  );
}
