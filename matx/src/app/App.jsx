import { CssBaseline } from "@mui/material";
import { useRoutes } from "react-router-dom";
import { MatxTheme } from "./components";
import { AuthProvider } from "./contexts/JWTAuthContext";
import { SettingsProvider } from "./contexts/SettingsContext";
import "../fake-db";
import MatxLayout from "./components/MatxLayout/MatxLayout";
import Analytics from "./views/dashboard/Analytics";
import { lazy } from "react";
import Loadable from "./components/Loadable";
import materialRoutes from "app/views/material-kit/MaterialRoutes";
import { useState } from "react";
import MainApp from "./views/MainApp";

// session pages
const NotFound = Loadable(lazy(() => import("app/views/sessions/NotFound")));

const App = () => {
  const [page, setPage] = useState("Dashboard");

  const routes = [
    {
      element: <MatxLayout setPage={setPage} />,
      children: [
        ...materialRoutes,
        {
          path: "/",
          element: <MainApp page={page} />,
        },
      ],
    },
    { path: "*", element: <NotFound /> },
  ];

  const content = useRoutes(routes);

  return (
    <SettingsProvider>
      <AuthProvider>
        <MatxTheme>
          <CssBaseline />
          {content}
        </MatxTheme>
      </AuthProvider>
    </SettingsProvider>
  );
};

export default App;
