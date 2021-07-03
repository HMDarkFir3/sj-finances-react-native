//React
import "react-native-gesture-handler";
import React from "react";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";

//Expo
import { StatusBar } from "expo-status-bar";

//Contexts
import AuthProvider from "./src/contexts/AuthContext";

//Routes
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar style="light" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
