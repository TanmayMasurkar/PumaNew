import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// @mui
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Button,
  Divider,
} from "@mui/material";

// ----------------------------------------------------------------------

const RegisterForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    userMobile: "",
    userPassword: "",
  });

  const handleClick = async () => {
    try {
      const response = await axios.post("u", formData);
      console.log(response.data); // Handle the response as needed

      navigate("/login", { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField
          name="userName"
          label="Enter username"
          value={formData.userName}
          onChange={handleChange}
        />
        <TextField
          name="userEmail"
          label="Email address"
          value={formData.userEmail}
          onChange={handleChange}
        />

        <TextField
          name="userPassword"
          label="Password"
          type={showPassword ? "text" : "password"}
          value={formData.userPassword}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                ></IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          name="userMobile"
          label="Contact number"
          value={formData.userMobile}
          onChange={handleChange}
        />
      </Stack>

      <Divider sx={{ my: 3 }}></Divider>

      <Button
        fullWidth
        size="large"
        type="submit"
        style={{ backgroundColor: "#000", color: "#fff" }}
        onClick={handleClick}
      >
        Sign up
      </Button>
    </>
  );
};

export default RegisterForm;

