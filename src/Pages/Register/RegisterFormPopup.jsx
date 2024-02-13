import React, { useState } from 'react';
import { Dialog, Typography, DialogContent, TextField, Box, Button } from '@mui/material';
import './RegisterFormPopup.css'; // Import your CSS file
import CloseIcon from '@mui/icons-material/Close';
import LoginFormPopup from '../SignIn/LoginFormPopup';

const RegisterFormPopup = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic
    console.log('Registration submitted:', email, phone, password);
    onClose(); // Close the popup
  };

  // const handleLoginLinkClick = () => {
  //   setShowLoginForm(true);
    
  //    // Open the RegisterFormPopup
  // };

  return (
    <div>
    <Dialog open={open} maxWidth="sm" fullWidth>
      <div className={`register-popup ${open ? 'open' : ''}`}>
      <CloseIcon className="close-icon" onClick={onClose} />
        <DialogContent  >
        <Typography variant="h6" className="popup-heading">
              Register
            </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                
                margin="normal"
                size="small"
                required
              />
              <TextField
                label="Phone"
                variant="outlined"
                value={phone}
                onChange={handlePhoneChange}
                
                margin="normal"
                size="small"
                required
              />
              <TextField
                label="Password"
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                type="password"
                
                margin="normal"
                size="small"
                required
              />
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Register
              </Button>
            
            
              </form>
          </Box>
        </DialogContent>
      </div>
      {showLoginForm && <LoginFormPopup open={showLoginForm} onClose={() => setShowLoginForm(false)} />}
    </Dialog>
    </div>
  );
};

export default RegisterFormPopup;
