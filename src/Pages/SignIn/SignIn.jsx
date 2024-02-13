import React, { useState } from 'react';
import { Dialog, DialogContent, TextField, Box, Button } from '@mui/material';

const LoginForm = ({ open, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Perform login logic
    console.log('Login submitted:', email, password);
    onClose(); // Close the popup
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
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
            />
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Login
            </Button>
          </form>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
