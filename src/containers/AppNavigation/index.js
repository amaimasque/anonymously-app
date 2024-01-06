import { useCallback, useEffect, useMemo, useState } from "react";
import MUIContainer from "@mui/material/Container";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Outlet } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Container from "../../components/Container";

import HomeIcon from "@mui/icons-material/Home";
import UpcomingIcon from "@mui/icons-material/Upcoming";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useCookies } from "react-cookie";

import logo from "../../assets/logo_pic.png";

import "./AppNavigation.css";
import { capitalize } from "@mui/material";
import LogoutModal from "../../components/LogoutModal";
import { logoutUser } from "../../utils/api";

const navigationRoutes = [
  {
    label: "Home",
    icon: <HomeIcon />,
    route: "/app",
  },
  {
    label: "Insights",
    icon: <UpcomingIcon />,
    route: "/app/insights",
  },
  {
    label: "Notifications",
    icon: <NotificationsIcon />,
    route: "/app/notifications",
  },
  {
    label: "Logout",
    icon: <LogoutIcon />,
  },
];

export const AppNavigation = () => {
  const [value, setValue] = useState("/app");
  const [isLoggingOut, setLoggingOut] = useState(false);
  const navigate = useNavigate();
  let location = useLocation();
  const currentRoute = capitalize(location.pathname.split("/")[2] ?? "home");
  const labels = navigationRoutes.map((route) => route.label);
  const currentNavigation = navigationRoutes.find(
    ({ label }) => label === currentRoute,
  );
  const [cookies, _, removeCookie] = useCookies(["access"]);

  useEffect(() => {
    window.addEventListener(
      "focus",
      () => {
        const accessToken = cookies.access;
        if (!accessToken) navigate("/");
      },
      [],
    );
  }, []);

  const handleNavigation = useCallback(
    (path) => {
      if (path) {
        setValue(path);
        navigate(path);
      }
    },
    [navigate],
  );

  const pageTitle = useMemo(
    () => (!labels.includes(currentRoute) ? "Back" : currentRoute),
    [labels, currentRoute],
  );

  const handleLogout = async () => {
    // API integration - logout
    try {
      setLoggingOut(true);
      removeCookie("access");
      await logoutUser();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => navigate(-1);

  const handleCloseModal = () => {
    setValue(location.pathname);
    navigate(location.pathname);
  };

  return (
    <MUIContainer>
      <Container
        row
        additionalStyles={{
          margin: "20px 0px",
          justifyContent: "space-between",
        }}
      >
        <Container row>
          <IconButton
            aria-label="share"
            disabled={pageTitle !== "Back"}
            onClick={handleBack}
          >
            {currentNavigation ? currentNavigation.icon : <ArrowBackIcon />}
          </IconButton>
          <Typography variant="h5" color="text.primary" id="page_header_text">
            {pageTitle}
          </Typography>
        </Container>
        <img src={logo} alt="Anonymously logo" id="logo" />
      </Container>
      <Outlet />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(_, newValue) => handleNavigation(newValue)}
          id="bottom_navigation"
        >
          {navigationRoutes.map(({ route, label, icon }) => (
            <BottomNavigationAction
              label={label}
              value={route}
              icon={icon}
              key={label}
            />
          ))}
        </BottomNavigation>
      </Paper>
      <LogoutModal
        open={value === 3}
        onClose={handleCloseModal}
        onLogout={handleLogout}
        isLoggingOut={isLoggingOut}
      />
    </MUIContainer>
  );
};
