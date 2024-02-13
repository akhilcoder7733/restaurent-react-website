import React, { useState } from "react";
import ticIcon from "../../assets/tic.png";
import { useLocation , useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  styled,
  Checkbox,
  FormControlLabel,
  Dialog,
  DialogContent,
  DialogTitle,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "../../assets/tic.png";
import "./OrderPage.css";

const theme = createTheme({
  typography: {
    fontFamily: "'YourCustomFont', Arial, sans-serif", // Adjust the font family
    fontSize: 14, // Adjust the base font size
  },
});

const OrderContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#F5FAFE",
  padding: theme.spacing(5),
  borderRadius: "8px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
}));

const OrderHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.2rem",
  fontWeight: "bold",
  marginBottom: theme.spacing(3),
}));

const OrderDetailsForm = styled(Box)(({ theme }) => ({
  backgroundColor: "#ffffff",
  padding: theme.spacing(3),
  borderRadius: "8px",
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
}));

const ConfirmButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
  backgroundColor: "#20c436",
  color: "#ffffff",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#0e1a40",
  },
}));

const CloseButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  color: "#0066ff",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "transparent", // Remove background color on hover
    color: "black",
  },
}));

const AwesomeText = styled(Typography)(({ theme }) => ({
  color: "green",
  fontWeight: "bold",
}));

const OrderPage = () => {
    const location = useLocation();
    const { selectedDish, quantity } = location.state || {};
    const navigate = useNavigate(); // Get the navigate function from react-router-dom
    const [cashOnDelivery, setCashOnDelivery] = useState(false);
    const [confirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

  const handleConfirmationDialogOpen = () => {
    setConfirmationDialogOpen(true);
  };

  const handleConfirmationDialogClose = () => {
    setConfirmationDialogOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page
  };
  

  const handleCashOnDeliveryChange = (event) => {
    setCashOnDelivery(event.target.checked);
  };

  const handleConfirmOrder = (event) => {
    event.preventDefault();
    // Handle order confirmation logic here, including cashOnDelivery
    handleConfirmationDialogOpen();
  };

  const actualPrice = selectedDish?.price * quantity;
  const savings = selectedDish?.price / 5; // Update the savings calculation as needed

  return (
    <ThemeProvider theme={theme}>
    <OrderContainer>
      <Container>
        <OrderHeading variant="h4" className="custom-font">Order Summary</OrderHeading>
        <Typography variant="h6">Dish: {selectedDish?.item}</Typography>
        <Typography variant="h6">Quantity: {quantity}</Typography>
        <Typography variant="h6">Actual Price: {actualPrice}/-</Typography>

        <OrderDetailsForm>
          <Typography variant="h6">Enter Your Details:</Typography>
          <form onSubmit={handleConfirmOrder}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField label="Name" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Phone" fullWidth required />
              </Grid>
              <Grid item xs={12}>
                <TextField label="Address" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Place" fullWidth required />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField label="Area" fullWidth required />
              </Grid>
            </Grid>
            <FormControlLabel
              control={
                <Checkbox
                  checked={cashOnDelivery}
                  onChange={handleCashOnDeliveryChange}
                />
              }
              label="Cash on Delivery"
            />
            <Typography variant="h6" sx={{ marginTop: 2, color: "green" }}>
              FREE DELIVERY! You've saved {savings}/-
            </Typography>
            <ConfirmButton
              type="submit"
              variant="contained"
              onClick={handleConfirmOrder}
            >
              Confirm Order
            </ConfirmButton>
          </form>
        </OrderDetailsForm>
      </Container>

      <Dialog
        open={confirmationDialogOpen}
        onClose={handleConfirmationDialogClose}
      >
        <DialogTitle>
          <AwesomeText variant="h5">Awesome..!</AwesomeText>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" justifyContent="center">
            <img src={ticIcon} alt="Tic Icon" style={{ maxWidth: "100px" }} />
          </Box>
          <Typography variant="h6">
            Your booking has been confirmed. We will contact you when we're near
            your location.
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold", marginTop: 2 }}>
            Order Details:
          </Typography>
          <Typography>Dish: {selectedDish?.item}</Typography>
          <Typography>Quantity: {quantity}</Typography>
          <Typography>Actual Price: {actualPrice}/-</Typography>
          <Typography>
            Payment Method:{" "}
            {cashOnDelivery ? "Cash on Delivery" : "Online Payment"}
          </Typography>
        </DialogContent>
        <CloseButton onClick={handleConfirmationDialogClose} fullWidth>
          Close
        </CloseButton>
      </Dialog>
    </OrderContainer>
    </ThemeProvider>
  );
};

export default OrderPage;