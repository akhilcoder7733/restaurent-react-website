import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { styled } from '@mui/system'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection:"center",
    justifyContent: "center",
    alignItems:"center",
    width:"100%",
    margin:theme.spacing(7),
    marginBottom:theme.spacing(7),
    
    [theme.breakpoints.down("md")]:{
      width:"100%",
    },
    [theme.breakpoints.down("sm")]:{
      marginBottom:"7",
      alignItems:"center",
      flexDirection:"column",
    },
  }));

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Simulate login logic
    if (email === 'user@example.com' && password === 'password') {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  };

  // const handleForgotPasswordClick = () => {
  //   // Simulate "Forgot Password" action
  //   // For example, show an alert with a message
  //   alert('Forgot Password clicked! A password reset email will be sent.');
  // };

  return (
    <CustomBox>
    <Box
      sx={{
        display: 'flex',
        justifyContent:"center",
        alignItems: 'center',
        border:0,
        mt: '50px',
        mb: '100px',
        mr:"100px",
        '@media (max-width:600px)': {
          mt: '20px', // Adjust margin for mobile view
          mb: '40px', // Adjust margin for mobile view
        },
      }}
    >
      <form onSubmit={handleLoginSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
          fullWidth
          margin="normal"
          size="small"
          sx={{ width: '100%', maxWidth: '300px' }}
        /> <br />
        <TextField
          label="Phone number"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          type="password"
          fullWidth
          margin="normal"
          size="small"
          sx={{ width: '100%', maxWidth: '300px' }}
        /> <br />
        <TextField
          label="Password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          type="password"
          fullWidth
          margin="normal"
          size="small"
          sx={{ width: '100%', maxWidth: '300px' }}
        />
        <CustomButton
        backgroundColor="#0F1B4C"
        color="#fff"
        buttonText="Continue"
        sx={{ mt:2, width: '100%', maxWidth: '300px' }}
      />
      </form>
    </Box>
    </CustomBox>
  );
};

export default LoginForm;
