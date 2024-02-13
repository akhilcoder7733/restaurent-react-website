import React from "react";
import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import deliveryImg from "../../assets/DeliveryImg.png";
import { useNavigate } from "react-router-dom";

const Delivery = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const CustomContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "#FED801",
    height: "416px",
    borderRadius: "15px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      height: "auto",
      flexDirection: "column",
      alignItems: "center",
      paddong: theme.spacing(3, 3, 0, 3),
      width: "90%",
    },
  }));
  const CustomBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(10, 0, 10, 0),
    margin: theme.spacing(0, 2, 0, 2),
    [theme.breakpoints.down("md")]: {
      padding: "0",
    },
  }));

  const CustomButton = styled("button")(({ theme }) => ({
    backgroundColor: "#0F1B4C",
    color: "#ffffff",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.5rem 1.25rem",
    borderRadius: "7px",
    textTransform: "none",
    display: "block",
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

  const handleOrderNowClick = () => {
    // Handle the "Order now" button click
    navigate("/dishes"); // Navigate to the "Dishes" page
  };

  return (
    <CustomBox>
      <CustomContainer>
        <Box>
          <Typography
            sx={{
              fontSize: "35px",
              color: "white",
              fontWeight: "700",
              fontFamily: "monospace",
            }}
          >
            Superfast Home Delivery..!
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#000",
              fontWeight: "800",
              fontFamily: "monospace",
            }}
          >
            Door to Door Delivery..!
          </Typography>
          <CustomButton onClick={handleOrderNowClick}>
            Order Now..!
          </CustomButton>
        </Box>
        <img src={deliveryImg} alt="" style={{ maxWidth: "100%" }} />
      </CustomContainer>
    </CustomBox>
  );
};

export default Delivery;
