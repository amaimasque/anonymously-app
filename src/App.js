import { ThemeProvider } from "@mui/material";
import "./App.css";
import { Login } from "./app/login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { theme } from "./utils/theme";
import { Home } from "./app/home";
import { Dashboard } from "./app/index";
import Insights from "./app/insights";
import { Notifications } from "./app/notifications";
import { ViewPost } from "./app/home/view";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/app",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "thoughts/:id",
        element: <ViewPost />,
      },
      {
        path: "insights",
        element: <Insights />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },
]);

function App() {
  return (
    <CookiesProvider defaultSetOptions={{ path: "/" }}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </CookiesProvider>
  );
}

export default App;
