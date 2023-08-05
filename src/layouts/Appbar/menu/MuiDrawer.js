import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Checkbox, Grid, Stack, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { Logo } from "../../../component/style/Logo";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/auth/Action";

const StyledComponent = styled("div")`
  font-size: 70px;
  font-weight: bold;
  color: white;
  width: max-content;
  position: relative;
  overflow: hidden;
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 0;
    height: 5px;
    background-color: white;
    transition: width 0.3s ease-in-out;
  }
  &:hover::after {
    width: 100%;
    right: auto;
    left: 0;
    transition: width 0.3s ease-in-out;
  }
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const DFlexComponent = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "40px 20px",
  [theme.breakpoints.down("md")]: {
    padding: "40px 20px",
  },
}));

const Container = styled("div")({
  maxWidth: "1400px",
  margin: "0px auto",
});

const Action = styled("button")({
  color: "#fff",
  backgroundColor: "transparent",
  border: "none",
});

const CustomMenuIcon = styled(MenuIcon)({
  fontSize: "35px",
});

const CustomClearIcon = styled(ClearIcon)({
  fontSize: "35px",
});

export default function MuiDrawer() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const handleLogout = () => {
    dispatch(logout());
  };

  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" ? "auto" : 250,
        height: "100vh",
        backgroundColor: "#000",
        color: "#fff",
        overflow: "hidden",
        transition: "width 0.3s ease-in-out",
      }}
      role="presentation"
    >
      <Container>
        <DFlexComponent>
          <Logo />
          <Action onClick={toggleDrawer(anchor, false)}>
            <CustomClearIcon />
          </Action>
        </DFlexComponent>

        <Box sx={{ height: "80vh", padding: "50px 0px 60px" }}>
          <Grid container sx={{ height: "100%", padding: "0px 20px" }}>
            {[
              { text: "TRENDING", path: "/trending" },
              { text: "SHOP", path: "/shop" },
              { text: "MEN", path: "/men" },
              { text: "MOTERSPORTS", path: "/motorsports" },
              { text: "SPORTS", path: "/sports" },
              isAuthenticated
                ? { text: "LOGOUT", action: handleLogout }
                : { text: "LOGIN", path: "/login" },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} md={6} key={item.text}>
                {item.path ? (
                  <Link to={item.path} style={{ textDecoration: "none" }}>
                    <StyledComponent>{item.text}</StyledComponent>
                  </Link>
                ) : (
                  <StyledComponent onClick={item.action}>
                    {item.text}
                  </StyledComponent>
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );

  return (
    <div>
      <Action onClick={toggleDrawer("top", true)}>
        <CustomMenuIcon sx={{  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}/>
      </Action>
      <SwipeableDrawer
        anchor="top"
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
        sx={{
          transition: "width 0.3s ease-in-out",
        }}
      >
        {list("top")}
      </SwipeableDrawer>
    </div>
  );
}

