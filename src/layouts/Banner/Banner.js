import { Stack, Typography, styled } from "@mui/material";
import React from "react";

const BannerDiv = styled("div")({
    backgroundImage:"url(https://cdn.sanity.io/images/qa41whrn/prod/7881608ab589c6e1396f773971047a3b423acb75-1440x85.jpg?w=2160&q=80&auto=format)",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    padding:"18px 0px",
    color:"white",
    marginTop:"90px"
  })


const Banner = () => {
  return (
    <>
      <BannerDiv>
        <Typography sx={{ fontWeight: "bold", fontSize: "22px" }}>
          FLAT 40% OFF ON LATEST STYLES
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontSize: "16px", mt: "3px" }}>
          END OF SEASON SALES
        </Typography>
        <Stack
          direction="row"
          flexWrap="wrap-reverse"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              mx: 1,
              borderBottom: "2px solid",
            }}
          >
            SHOP MEN
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              mx: 1,
              borderBottom: "2px solid",
            }}
          >
            SHOP WOMEN
          </Typography>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "16px",
              mx: 1,
              borderBottom: "2px solid",
            }}
          >
            SHOP KIDS
          </Typography>
        </Stack>
      </BannerDiv>
    </>
  );
};

export default Banner;
