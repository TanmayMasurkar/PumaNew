import { styled } from "@mui/material";

const LogoComp = styled("div")(({ theme }) => ({
  fontSize: "75px",
  fontWeight: "bold",
  color: "#fff",
  [theme.breakpoints.down("sm")]: {
    fontSize: "45px",
  },
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
}));

export const Logo = () => {
  return <LogoComp>PUMA</LogoComp>;
};
