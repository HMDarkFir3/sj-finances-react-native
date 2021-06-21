//React
import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";

//Contexts
import AuthProvider from "./src/contexts/AuthContext";

//Routes
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#242424" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
