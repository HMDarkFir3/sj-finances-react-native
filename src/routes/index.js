//React
import React from "react";

//Hooks
import { useAuth } from "../hooks/useAuth";

//Components
import Loading from "../components/Loading";

//Routes
import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Routes() {
  const { signed, loadingAnimation } = useAuth();

  if (loadingAnimation) {
    return <Loading />;
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
