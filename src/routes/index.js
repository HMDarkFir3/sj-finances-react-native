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
  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
