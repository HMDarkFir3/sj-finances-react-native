//React
import React from "react";

//React Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Pages
import Home from "../pages/Home";

const Stack = createStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
