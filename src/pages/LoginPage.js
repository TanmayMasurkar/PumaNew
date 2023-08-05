import React from "react";
import {
  Container,
  Typography,
  Divider,
  Stack,
  Button,
  styled,
  Box,
} from "@mui/material";
import LoginForm from "../section/auth/LoginForm";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const StyledRoot = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }));
  
  const StyledSection = styled('div')(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default,
    color:"#fff",
    backgroundImage:"url(https://cdn.sanity.io/images/qa41whrn/prod/1e48efb9a49bc69f9348c65d142a5f198ffe4d2f-1440x530.jpg?w=2160&q=80&auto=format)",
    [theme.breakpoints.up('md')]: {
      maxWidth: "50%",
    },
    [theme.breakpoints.down('md')]: {
      height: "50vh",
    },
  }));

const StyledContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

const LoginPage = () => {
  return (
    <Box>
      <StyledRoot>
          <StyledSection>
            <Typography variant="h3" sx={{ px: 5, mb: 5, textShadow:"5px 5px 5px #000" }}>
              Hi, Welcome Back
            </Typography>
          </StyledSection>


      <Container maxWidth="sm">
        <StyledContent>
          <Typography variant="h4" gutterBottom>
            Sign in to PUMA
          </Typography>

          <Typography variant="body2" sx={{ mb: 5 }}>
            Don’t have an account? {""}
            <Link to="/register">Get started</Link>
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button fullWidth size="large" color="inherit" variant="outlined">
              <GoogleIcon/>
            </Button>

            <Button fullWidth size="large" color="inherit" variant="outlined">
              <FacebookOutlinedIcon />
            </Button>

            <Button fullWidth size="large" color="inherit" variant="outlined">
              <TwitterIcon />
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider>

          <LoginForm />
        </StyledContent>
      </Container>
      </StyledRoot>
    </Box>
  );
};

export default LoginPage;
