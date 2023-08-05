import React, { useEffect } from "react";
import MuiDrawer from "./menu/MuiDrawer";
import { Logo } from "../../component/style/Logo";
import { Box, styled } from "@mui/material";

const Container = styled("div")({
  maxWidth:"1400px",
  margin:"0px auto",
})

const DFlexComponent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "40px 20px",
  [theme.breakpoints.down("md")]: {
    padding: "40px 20px",
  },
}));

const Index = () => {

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".NavDiv");
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        navbar.classList.add("Navbar-scrolled");
      } else {
        navbar.classList.remove("Navbar-scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box className="Nav">
     <Container>
      <DFlexComponent className="NavDiv">
        <Logo />
        <MuiDrawer />
      </DFlexComponent>
    </Container>
    </Box>
  );
};

export default Index;
