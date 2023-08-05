import React from "react";
import { Box, Card, Typography, Stack } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Label } from "@mui/icons-material";
import Slider from "react-slick";

const StyledProductImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const ProductCard = ({ product }) => {
  const { proName, proPrice, proStatus, proImage , _id } = product;

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <Box
        sx={{
          position: "absolute",
          zIndex: 9,
          bottom: "10px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0", padding: "0" }}>{dots}</ul>
      </Box>
    ),
  };

  return (
    <Card style={{ boxShadow: "none" }}>
      <Box sx={{ position: "relative" }}>
        {proStatus && (
          <Stack
            sx={{
              zIndex: 9,
              position: "absolute",
              top: 0,
              left: 0,
              textTransform: "uppercase",
              color: "#fff",
              borderRadius: "3px",
              fontSize: "11px",
              fontWeight: "bold",
              padding: "4px",
              bgcolor: proStatus === "Active" ? "#BA2B20" : "info",
            }}
          >
            -25%
          </Stack>
        )}
        <Slider {...sliderSettings} style={{ height: "100%" }}>
          {proImage.map((image, index) => (
            <Box key={index}>
              <StyledProductImg
                alt={proName}
                src={"http://localhost:5000/uploads/" + image}
              />
            </Box>
          ))}
          
        </Slider>
      </Box>

      <Box spacing={2} sx={{ py: 2 }}>
        <Stack
          direction="row"
          alignItems="start"
          justifyContent="space-between"
        >
          <Typography
            variant="subtitle2"
            align="left"
            sx={{ fontWeight: "bold" }}
          >
            <Link to={`/productDetails/${_id}`} underline="hover">
              {proName}
            </Link>
          </Typography>

          <Stack style={{ width: "80px", textAlign: "right" }}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: "bold", color: "#BA2B20", marginTop: "-2px" }}
            >
              ₹{proPrice}
            </Typography>

            <Typography
              component="span"
              variant="body1"
              sx={{
                color: "text.disabled",
                textDecoration: "line-through",
                marginTop: "-5px",
              }}
            >
              ₹{/* {priceSale && fCurrency(priceSale)} */}2000
            </Typography>
          </Stack>
        </Stack>

        <Typography
          style={{ fontSize: "11px", fontWeight: "bold", color: "#DC2625" }}
          align="left"
        >
          Extra 5% off on online payments
        </Typography>
      </Box>
    </Card>
  );
};

export default ProductCard;
