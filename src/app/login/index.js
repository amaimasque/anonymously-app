import { useNavigate, Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

import Container from "../../components/Container";
import LoginForm from "../../containers/LoginContainer";

import "./login.css";
import { loginUser } from "../../utils/api";
import { useState } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const [isLoggingIn, setLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [cookies] = useCookies(["access"]);

  const accessToken = cookies["access"];

  if (accessToken) return <Navigate to="/app" />;

  const handleLogin = async (reqData) => {
    setLoggingIn(true);
    try {
      await loginUser(reqData);
      navigate("/app", { replace: true });
    } catch (error) {
      console.log(error);
      setLoggingIn(false);
      setLoginError(
        error.response?.data?.message ?? error.message ?? "Unable to login",
      );
    }
  };

  return (
    <Container fullscreen center backgroundColor={"#EEC759"}>
      <LoginForm
        onLogin={handleLogin}
        isLoggingIn={isLoggingIn}
        error={loginError}
      />
    </Container>
  );
};
