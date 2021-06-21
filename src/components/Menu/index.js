//React
import React from "react";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Styles
import { Container, ButtonMenu } from "./styles";

//Icons
import { Feather } from "@expo/vector-icons";

export default function Menu() {
  const navigation = useNavigation();

  function openDrawer() {
    navigation.toggleDrawer();
  }

  return (
    <Container>
      <ButtonMenu onPress={openDrawer}>
        <Feather name="menu" color="#ffffff" size={30} />
      </ButtonMenu>
    </Container>
  );
}
