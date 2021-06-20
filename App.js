//React
import "react-native-gesture-handler";
import React from "react";
import { View, StatusBar } from "react-native";

//React Navigation
import { NavigationContainer } from "@react-navigation/native";

//Routes
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#131313" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}
