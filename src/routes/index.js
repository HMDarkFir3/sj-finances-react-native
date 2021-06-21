//React
import React, { useContext } from "react";

//Contexts
import { AuthContext } from "../contexts/AuthContext";

//Components
import Loading from "../components/Loading";

//Routes
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {
  const { signed, loadingAnimation } = useContext(AuthContext);

  if (loadingAnimation) {
    return <Loading />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
