import React from 'react';
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Container } from '@mui/system';
import CustomButton from "../../Components/CustomButton/CustomButton";
import WelcomeImage from '../../assets/welcome.png';

const CustomBox = styled(Box)(({ theme }) => ({
    display:"flex", 
    justifyContent:"center",
    gap: theme.spacing(5),
    marginTop: theme.spacing(3),
    [theme.breakpoints.down("md")]: {
        flexDirection:"column",
        alignItems: "center",
        textAlign:"center"
    },
}));

const CustomTitle = styled(Typography)(({ theme }) => ({
    fontSize:"64px",
    color: "#fff",
    fontWeight:"bold",
    margin:theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]:{
        fontSize: "40px",
    },
}));

const Welcome = () => {
    return (
        <Box sx={{ backgroundColor: "#FED801", minHeight:"89vh"}}>
            <Container>
                <CustomBox>
                    <Box sx={{flex:"1"}}>
                        <Typography
                            variant='body2'
                            sx={{
                                fontSize:"18px",
                                color:"#687690",
                                fontWeight:"500",
                                mt:10,
                                mb:4,
                            }}
                        >
                            Welcome to Techflix Restaurent
                        </Typography>
                        <CustomTitle variant="h1">
                            Discover a place you'll love to eat.
                        </CustomTitle>
                        <Typography variant='body2' sx={{fontSize:"18px",color:"#5A6474", my: 4}}>
                            When the drawer is outside of the page grid and opens, the drawer forces other content to change size and adapt to the smaller viewport.
                        </Typography>
                        <CustomButton 
                            backgroundColor='#0F1B4C'
                            color="#fff"
                            buttonText="More about Us"
                            welcomeBtn={true}
                        />
                    </Box>
                    <Box sx={{flex: "1.25"}}>
                        <img src={WelcomeImage} alt="Welcome" style={{ maxWidth: "100%", marginBottom: "2rem" }} />
                    </Box>
                </CustomBox>
            </Container>
        </Box>
    );
};

export default Welcome;
