import { Routes, Route } from "react-router-dom";

import App from "./App";

import LegalNotice from "./pages/LegalNotice";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<App />}
      />

      <Route
        path="/aviso-legal"
        element={<LegalNotice />}
      />

      <Route
        path="/privacidad"
        element={<Privacy />}
      />

      <Route
        path="/cookies"
        element={<Cookies />}
      />
    </Routes>
  );
}

export default AppRoutes;