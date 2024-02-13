import React from 'react'
import './Dishes.css';
import { Box,
        Container,
        styled,
        Typography,
        
        } from '@mui/material';
import { Data } from "../../StaticData/Data"
import './Dishes.css';
import CustomCard from '../../Components/CustomCard/CustomCard'
import DishesCartPopup from './DishesCartPopup';
import { useState } from 'react';



const Dishes = () => {
    const [cartPopupOpen, setCartPopupOpen] = useState(false);
    const [selectedDish, setSelectedDish] = useState(null);

    const handleOpenCartPopup = (dish) => {
        setSelectedDish(dish);
        setCartPopupOpen(true);
    };

    const handleCloseCartPopup = () => {
        setCartPopupOpen(false);
        setSelectedDish(null);
    };

    const DishesBox = styled(Box)(({ theme }) =>({
        display:"flex",
        justifyContent:"space-between",
        marginTop:theme.spacing(5),
        [theme.breakpoints.down("md")]:{
            flexDirection: "column",
            alignItems: "center",
        },
    }));

    const PropertiesTextBox = styled(Box)(({ theme }) => ({
        [theme.breakpoints.down('md')]:{
            textAlign:"center",
        },
    }));

    const CustomButton = styled("button")(({ theme }) => ({
        backgroundColor: "#0F1B4C",
        color: "#ffffff",
        fontWeight: "700",
        fontSize: "14px",
        cursor: "pointer",
        padding: "0.7rem 2rem",
        borderRadius: "7px",
        textTransform: "none",
        display: "block",
        marginTop: "10px",
        marginLeft:"120px",
        border: "2px solid transparent",
        transition: "background-color 0.3s, color 0.3s, borderColor 0.3s",
        "&:hover": {
          backgroundColor: "white",
          color: "black",
          borderColor: "#0F1B4C",
          animation: `${theme.transitions.create(["background-color", "color", "border-color"], {
            duration: theme.transitions.duration.short,
          })} custom-hover-animation`,
        },
      }));

  return (
    <Box sx={{ mt: 0, backgroundColor:"#F5FAFE", py:10 }}>
    <Container>
    <PropertiesTextBox>
    <Typography
    sx={{ color:'#000339', fontSize:"35px", fontWeight:"bold", ml:"13px"}}>
    Featured Dishes
    </Typography>
    <Typography
    sx={{ color:'#5A6473', fontSize:"16px",mt:1, ml:"13px"}}>
    Explore variety of South Indian Dishes..!!
    </Typography>
    </PropertiesTextBox>

    <DishesBox>
    {Data.map((foodItem) => (
        <div key={foodItem.id}>
            <CustomCard
              img={foodItem.img}
              name={foodItem.name}
              price={foodItem.price}
              items={foodItem.item}
              likes={foodItem.likes}
              heart={foodItem.heart}
              share={foodItem.share}
              />
              
              <CustomButton
              className='order-now-button'
              onClick={() => handleOpenCartPopup(foodItem)}
            >
              Order Now
            </CustomButton>
        </div>

    ))}
    </DishesBox> 
    <DishesCartPopup
    open={cartPopupOpen}
    handleClose={handleCloseCartPopup}
    selectedDish={selectedDish}
/>
    </Container>
    </Box>
  )
}

export default Dishes;
