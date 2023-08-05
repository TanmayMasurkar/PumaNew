import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Button,
} from "@mui/material";
import { login } from "../../redux/auth/Action";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.auth.error);

  const [showPassword, setShowPassword] = useState(false);
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleClick = async () => {
    try {
      await dispatch(login(userName, userPassword));
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <Stack spacing={3}>
        <TextField
          name="userName"
          label="Username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <TextField
          name="userPassword"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  {/* Add the icon for showing/hiding password */}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      {error && <div>{error}</div>}

      <Button
        fullWidth
        size="large"
        type="submit"
        style={{ backgroundColor: '#000', color: '#fff' }}
        onClick={handleClick}
      >
        Login
      </Button>
    </>
  );
};

export default LoginForm;
