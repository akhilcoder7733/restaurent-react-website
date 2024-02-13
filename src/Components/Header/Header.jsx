import React, { useState } from 'react'; 
import { Box, Typography, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList'; 
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices'; 
import ContactsIcon from '@mui/icons-material/Contacts';
import logoImg from '../../assets/Akhil.png';
import CustomButton from '../CustomButton/CustomButton';
import SignRegisterPopup from '../../Pages/SignIn/SignRegisterPopup';

const StyledSignInLink = styled(Typography)(() => ({
  fontSize: '15px',
  color: '#4F5361',
  fontWeight: 'bold',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': {
    color: '#fff',
  },
}));

function Header() {
  const [mobileMenu, setMobileMenu] = useState({ left: false });
  // const [loginOpen, setLoginOpen] = useState(false); // State for controlling the login popup
  // const [registerOpen, setRegisterOpen] = useState(false); // State for controlling the register popup
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupContent, setPopupContent] = useState(''); // To determine which form to show


  const toogleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.type === 'Tab' || event.type === 'Shift')) {
      return;
    }
    setMobileMenu({ ...mobileMenu, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
      }}
      role="presentation"
      onClick={toogleDrawer(anchor, false)}
      onKeyDown={toogleDrawer(anchor, false)}
    >
      <List>
      {nav_titles.map((item, index) => (
        <ListItem
          key={item.index}
          disablePadding
          onClick={() => navigate(item.path)}
        >
          <ListItemButton>
            <ListItemIcon>
              {index === 0 && <HomeIcon />}
              {index === 1 && <FeaturedPlayListIcon />}
              {index === 2 && <MiscellaneousServicesIcon />}
              {index === 3 && <ContactsIcon />}
            </ListItemIcon>
            <ListItemText primary={item.display} />
          </ListItemButton>
        </ListItem>
      ))}
      </List>
    </Box>
  );

  const nav_titles = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/dishes",
      display: "Dishes",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/about",
      display: "About Us",
    },
  ];

  const NavBarLinksBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    paddingBottom:'10px',
    justifyContent: 'center',
    gap: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  const NavBarBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:'10px',
    gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: 'column',
    },
  }));

  const NavBarLink = styled(Typography)(() => ({
    fontSize: '15px',
    color: '#4F5361',
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      color: '#fff',
    },
  }));

  const NavBarLogo = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    width: '70px',
    marginBottom: '10px', // Adjust the marginBottom value to move the logo up
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: 'pointer',
    display: 'none',
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  }));

  

  const openPopup = (content) => {
    setIsPopupOpen(true);
    setPopupContent(content);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupContent('');
  };

  // const openLoginPopup = () => {
  //   setLoginOpen(true);
  //   setRegisterOpen(false);
     
  // };

  // const closeLoginPopup = () => {
  //   setLoginOpen(false);
    
  // };

  // const openRegisterPopup = () => {
  //   setRegisterOpen(true);
  //   setLoginOpen(false);
  // };

  // const closeRegisterPopup = () => {
  //   setRegisterOpen(false);    
  // };
  return (
    <>
    <header>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '25px',
          maxWidth: 'auto',
          backgroundColor: '#FED801',
          mt:'0px',
          marginLeft: '0px',
          marginBottom: '-24px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
          <CustomMenuIcon onClick={toogleDrawer("left", true)} />
          <Drawer
            anchor="left"
            open={mobileMenu["left"]}
            onClose={toogleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
          <NavBarLogo src={logoImg} alt="" />
          </Box>
          <NavBarLinksBox>
          {nav_titles.map((item, index) => (
            <NavBarLink
              key={index}
              variant="body2"
              onClick={() => navigate(item.path)}
            >
              {item.display}
            </NavBarLink>
          ))}
          </NavBarLinksBox>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <NavBarBox >
          <StyledSignInLink variant="body2" onClick={() => openPopup('signIn')} >
            Sign In
          </StyledSignInLink>
          <StyledSignInLink variant='body2' onClick={() => openPopup('register')} >
          <CustomButton
          backgroundColor="#17275F"
          color="#ffffff"
          buttonText="Register"
            />
          </StyledSignInLink>
          
          </NavBarBox>
        </Box>
        
        
      </Box>
      {isPopupOpen && <SignRegisterPopup content={popupContent} closePopup={closePopup} />}
        
        </header>
        </>
  );
}

export default Header;