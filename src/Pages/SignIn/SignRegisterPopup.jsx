import React, { useState } from 'react';
import './signRegister.css';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const SignRegisterPopup = ({ content, closePopup }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [activeForm, setActiveForm] = useState(content);
  const [formData, setFormData] = useState({
    username: '',
    phone: '',
    password: '',
  });

  const [registrationMessage, setRegistrationMessage] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  
  const navigate = useNavigate(); // Initialize navigate


  const switchToRegister = () => {
    setActiveForm('register');
  };

  const switchToSignIn = () => {
    setActiveForm('signIn');
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:5000/register', formData);
      setRegistrationMessage('User Registered successfully');
      // Clear the form data after successful registration
      setFormData({
        username: '',
        phone: '',
        password: '',
      });
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/login', formData);
      if (response.status === 200) {
        setLoginMessage('Logged in successfully');
        closePopup();
        navigate('/dishes');
      } else {
        setErrorMessage('Username or password is incorrect'); // Set error message
        console.log('Login failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };
  
  
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <CloseIcon className="close-icon" onClick={closePopup} />
        {activeForm === 'signIn' ? (
          <SignInForm 
    switchToRegister={switchToRegister}
    formData={formData}
    handleFormChange={handleFormChange}
    handleLogin={handleLogin}
    errorMessage={errorMessage} // Pass errorMessage to SignInForm
  /> // Pass errorMessage to SignInForm
        ) : (
          <RegisterForm 
          switchToSignIn={switchToSignIn}
          formData={formData}
          handleFormChange={handleFormChange}
          handleRegister={handleRegister}
          registrationMessage={registrationMessage}/>
        )}
        {loginMessage && <p>{loginMessage}</p>}
      </div>
    </div>
  );
};

const SignInForm = ({ switchToRegister, formData, handleFormChange, handleLogin, errorMessage }) => {
  console.log('errorMessage:', errorMessage);
  const handleForgotPassword = () => {
    // Display an alert box with the message
    alert("Reset link sent to your phone.");
  };
  return (
    <div className="form">
      <h2>Login</h2>
      {errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
      <form>
        <input 
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleFormChange} />
        <input 
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleFormChange} />
        <button onClick={handleLogin}>Login</button>
      </form>
      <p>Forgot your password? <span className="register-link" onClick={handleForgotPassword}>click here</span></p>
      <p>Don't have an account? <span className="register-link" onClick={switchToRegister}>Register</span></p>
    </div>
  );
};



const RegisterForm = ({ switchToSignIn, formData, handleFormChange, handleRegister, registrationMessage }) => {
  return (
    <div className="form">
      <h2>Register</h2>
      {registrationMessage && (
        <p>{registrationMessage}</p>
      )}
      <form>
        <input 
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleFormChange} />
        <input 
          type="text"
          placeholder="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleFormChange} />
        <input 
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleFormChange} />
        <input 
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleFormChange}
        />
        <button onClick={handleRegister}>Register</button>
      </form>
      <p>Already have an account? <span className="register-link" onClick={switchToSignIn}>Sign In</span></p>
    </div>
  );
};

export default SignRegisterPopup;