import React, { useState } from 'react';
import { Dialog, DialogContent, TextField, Box, Button, Modal } from '@mui/material';
import '../../Pages/SignIn/LoginFormPopup.css';
import CloseIcon from '@mui/icons-material/Close';
import RegisterFormPopup from '../../Pages/Register/RegisterFormPopup';

const LoginFormPopup = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Login submitted:', email, password);
    onClose(); // Close the popup
  };

  return (
    <div >
    <Dialog open={open} maxWidth="sm" fullWidth>
      <div className={`login-popup ${open ? 'open' : ''}`} >
      <CloseIcon className="close-icon" onClick={onClose} />
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <form onSubmit={handleLoginSubmit}>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                fullWidth
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
                fullWidth
                margin="normal"
                size="small"
                required
              />
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Login
              </Button>
              <a href="#">Forgot password?</a>
            </form>
          </Box>
        </DialogContent>
      </div>
      {showRegisterForm && <RegisterFormPopup open={showRegisterForm} onClose={() => setShowRegisterForm(false)} />}
      
      </Dialog> 
      </div>
    
  );
};

export default LoginFormPopup;
