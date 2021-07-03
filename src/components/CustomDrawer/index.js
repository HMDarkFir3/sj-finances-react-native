//React
import React from "react";

//React Navigation
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

//Hooks
import { useAuth } from "../../hooks/useAuth";

//Styles
import { Container, Logo, Welcome, UserName, UserEmail } from "./styles";

export default function CustomDrawer(props) {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <DrawerContentScrollView {...props}>
      <Container>
        <Logo
          source={require("../../assets/images/Logo.png")}
          resizeMode="contain"
        />

        <Welcome>Bem-vindo</Welcome>
        <UserName>{user.name}</UserName>
        <UserEmail>{user.email}</UserEmail>
      </Container>

      <DrawerItemList {...props} />

      <DrawerItem
        {...props}
        label="Sair do app"
        inactiveBackgroundColor="#c62c36"
        onPress={handleSignOut}
      />
    </DrawerContentScrollView>
  );
}
