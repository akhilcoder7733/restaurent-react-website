import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import { styled } from '@mui/system'
import logoImg from '../../assets/Akhil.png'
import starsImg from '../../assets/Star.png'
import logosImg from '../../assets/logos.png'

const Partner = () => {
    const CustomContainer = styled(Container)(({theme}) => ({
        display:"flex", 
        justifyContent:"space-between",
        [theme.breakpoints.down("sm")]: {
            flexDirection:"column",
            alignItems:"center",
            textAlign:"center",
            marginBottom: theme.spacing(4)
        },
    }));
    const CustomBox = styled(Box)(({ theme }) =>({
        [theme.breakpoints.down("sm")]: {
            marginBottom: theme.spacing(4),
        },
    }));
    
  return (
    <Box sx={{ mt: 10}}>
    <CustomContainer>
    <CustomBox>
    <img src={logoImg} alt="" style={{ maxWidth: "45%", paddingBottom:"0px" }} />
    <Typography
      variant="body2"
      sx={{
        fontSize: "16px",
        color: "#7D8589",
        fontWeight: "bold",
        mt: 2,
      }}
    >
      More than 2,000 trust us.
    </Typography>
  </CustomBox>
  <Box>
    <img src={starsImg} alt="" style={{ maxWidth: "100%", paddingTop:"30px", }} />
    <Typography
      variant="body2"
      sx={{
        fontSize: "16px",
        color: "#7D8589",
        fontWeight: "bold",
        paddingTop:"0px",
        mt: 2,
      }}
    >
      5-star Rating (2k+ Reviews)
    </Typography>
  </Box>
  
    </CustomContainer>

    <Container sx={{display:"flex", flexDirection:"column"}}>
    <img src={logosImg} alt="" />
    </Container>
    </Box>
  )
}

export default Partner
