import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button, styled, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './DishesCartPopup.css';


const CustomDialogTitle = styled(DialogTitle)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.5rem',
}));

const CustomDialogContentText = styled(DialogContentText)(({ theme }) => ({
  fontSize: '1rem',
}));

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  marginTop: '0.5rem',
}));

const CustomGreenTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.success.main,
  fontWeight: 'bold',
  fontSize: '1.1rem',
  marginTop: '0.5rem',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1rem',
}));

const CustomDialogActions = styled(DialogActions)(({ theme }) => ({
  justifyContent: 'space-between',
  padding: theme.spacing(2),
}));

const DishesCartPopup = ({ open, handleClose, selectedDish }) => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); 
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleOrderNow = () => {
    // Navigate to the order page
    navigate('/order', { state: { selectedDish, quantity } });
    handleClose();
  };

  const actualPrice = selectedDish?.price * quantity;
  const savings = (selectedDish?.price / 5); // Assuming 100 is the savings value
  

  return (
    <Dialog open={open} onClose={handleClose}>
      <CustomDialogTitle className="popup-title">Order {selectedDish?.item}</CustomDialogTitle>
      <DialogContent>
        <CustomDialogContentText className="popup-content-text">
          Select the quantity you want to order:
        </CustomDialogContentText>
        <TextField
          label="Quantity"
          type="number"
          value={quantity}
          onChange={handleQuantityChange}
          InputProps={{
            inputProps: {
              min: 1,
            },
          }}
          fullWidth
        />
        <CustomTypography sx={{ mt: 2 }}>
          Actual Price: {actualPrice}/-
        </CustomTypography>
        <CustomGreenTypography sx={{ mt: 1 }}>
          FREE DELIVERY! You've saved {savings}/-
        </CustomGreenTypography>
      </DialogContent>

      <CustomDialogActions>
        <Button className="popup-cancel-button" onClick={handleClose}>
          Cancel
        </Button>
        <CustomButton className="popup-order-button" onClick={handleOrderNow} variant="contained" color="primary">
          Order Now
        </CustomButton>
      </CustomDialogActions>
    </Dialog>
  );
};

export default DishesCartPopup;
