//React
import React from "react";

//React Navigation
import { createStackNavigator } from "@react-navigation/stack";

//Pages
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const Stack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
