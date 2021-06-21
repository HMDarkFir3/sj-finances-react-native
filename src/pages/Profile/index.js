//React
import React, { useContext } from "react";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Contexts
import { AuthContext } from "../../contexts/AuthContext";

//Components
import Button from "../../components/Button";

//Styles
import { Container, UserName, UserEmail } from "./styles";

export default function Profile() {
  const { user, loading, signOut } = useContext(AuthContext);

  const navigation = useNavigation();

  function navigateToNewFinance() {
    navigation.navigate("NewFinance");
  }

  return (
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
        onPress={() => signOut()}
      />
    </Container>
  );
}
