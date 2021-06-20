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
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerStyle: {
            backgroundColor: "#242424",
            borderBottomWidth: 1,
            borderBottomColor: "#00b94a",
          },
          headerTintColor: "#ffffff",
          headerBackTitleVisible: false,
          headerTitle: "Voltar",
        }}
      />
    </Stack.Navigator>
  );
}
