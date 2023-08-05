import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Hidden, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";
import AccountPopover from "./headerSection/AccountPopover";

const StyledLogo = styled(Typography)`
  flex-grow: 1;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const ShopNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AppBar position="fixed" style={{ backgroundColor: "#000", padding: "15px 0px" }}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Hidden>
          <StyledLogo variant="h4" component="div">
            PUMA
          </StyledLogo>
          <Hidden smDown>
            <List component="nav" sx={{ display: "flex", alignItems: "center" }}>
              <ListItem>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Services" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </Hidden>
          <Stack>
            <AccountPopover />
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
        <List>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem button onClick={toggleDrawer}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default ShopNavbar;
