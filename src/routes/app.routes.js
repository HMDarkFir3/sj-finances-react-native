//React
import React from "react";

//React Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";

//Components
import CustomDrawer from "../components/CustomDrawer";

//Pages
import Home from "../pages/Home";
import NewFinance from "../pages/NewFinance";
import Profile from "../pages/Profile";

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      drawerStyle={{
        backgroundColor: "#242424",
      }}
      drawerContentOptions={{
        labelStyle: {
          fontWeight: "bold",
        },

        activeTintColor: "#ffffff",
        inactiveTintColor: "#dddddd",
        activeBackgroundColor: "#00b94a",
        inactiveBackgroundColor: "#000000",

        itemStyle: {
          marginVertical: 8,
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} options={{ title: "Home" }} />
      <Drawer.Screen
        name="NewFinance"
        component={NewFinance}
        options={{ title: "Registrar" }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Perfil" }}
      />
    </Drawer.Navigator>
  );
}
