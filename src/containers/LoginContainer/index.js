import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import LoadingButton from "@mui/lab/LoadingButton";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import isEmpty from "lodash/isEmpty";

import AccountCircle from "@mui/icons-material/AccountCircle";
import Lock from "@mui/icons-material/Lock";
import logo from "../../assets/logo.png";
import { red } from "@mui/material/colors";

const LoginContainer = ({ onLogin, isLoggingIn, error }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    onLogin({
      username: e.target[0].value,
      password: e.target[1].value,
    });
  };

  return (
    <Paper id="login_container">
      <img src={logo} alt="Anonymously logo" id="logo" />
      <form onSubmit={handleSubmit}>
        <FormControl fullWidth variant="standard" error={!isEmpty(error)}>
          <InputLabel htmlFor="username_input">Username</InputLabel>
          <Input
            id="username_input"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
            name="username"
            required
          />
        </FormControl>
        <FormControl fullWidth variant="standard" error={!isEmpty(error)}>
          <InputLabel htmlFor="password_input">Password</InputLabel>
          <Input
            id="password_input"
            startAdornment={
              <InputAdornment position="start">
                <Lock />
              </InputAdornment>
            }
            name="password"
            required
          />
        </FormControl>
        {error && (
          <Typography
            variant="subtitle2"
            align="left"
            paragraph
            sx={{ color: red[600], marginTop: "10px" }}
          >
            {error}
          </Typography>
        )}
        <LoadingButton
          variant="contained"
          fullWidth
          id="login_button"
          type="submit"
          loading={isLoggingIn}
          disabled={isLoggingIn}
        >
          Login
        </LoadingButton>
      </form>
    </Paper>
  );
};

LoginContainer.propTypes = {
  onLogin: PropTypes.func,
  isLoggingIn: PropTypes.bool,
  error: PropTypes.string,
};

LoginContainer.defaultProps = {
  isLoggingIn: false,
  error: null,
};

export default LoginContainer;
