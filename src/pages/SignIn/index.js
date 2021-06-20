//React
import React, { useState } from "react";
import { Platform } from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Components
import Input from "../../components/Input";
import SubmitButton from "../../components/SubmitButton";

//Styles
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Link,
  LinkText,
} from "./styles";

export default function SignIn() {
  //States
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Navigation
  const navigation = useNavigation();

  //Functions
  function navigateToSignUp() {
    navigation.navigate("SignUp");
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : ""}
        enabled={true}
      >
        <Logo source={require("../../assets/images/Logo.png")} />
        <AreaInput>
          <Input
            placeholder="Email"
            onChangeText={(t) => setEmail(t)}
            value={email}
          />

          <Input
            placeholder="Senha"
            onChangeText={(t) => setPassword(t)}
            value={password}
          />
        </AreaInput>

        <SubmitButton text="Acessar" onPress={() => {}} />

        <Link onPress={navigateToSignUp}>
          <LinkText>Não possui uma conta?</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
