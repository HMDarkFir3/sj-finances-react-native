//React
import React, { useState } from "react";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Hooks
import { useAuth } from "../../hooks/useAuth";

//Components
import Menu from "../../components/Menu";
import Button from "../../components/Button";

//Styles
import { Background, Container, UserName, UserEmail } from "./styles";

export default function Profile() {
  const { user, signOut } = useAuth();

  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToNewFinance() {
    navigation.navigate("NewFinance");
  }

  function handleSignOut() {
    setLoading(true);
    signOut();
  }

  return (
    <Background>
      <Menu />
      <Container>
        <UserName>{user && user.name}</UserName>
        <UserEmail>{user && user.email}</UserEmail>

        <Button
          title="Registrar gastos"
          color="#00b94a"
          onPress={navigateToNewFinance}
        />

        <Button
          title="Sair"
          color="#c62c36"
          loading={loading}
          onPress={handleSignOut}
        />
      </Container>
    </Background>
  );
}
