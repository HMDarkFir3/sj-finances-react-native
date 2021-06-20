//React
import React, { useContext } from "react";

//Contexts
import { AuthContext } from "../contexts/AuthContext";

//Routes
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {
  const { signed } = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
