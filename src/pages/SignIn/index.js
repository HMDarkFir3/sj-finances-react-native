//React
import React, { useState } from "react";
import { Platform, Keyboard } from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//hooks
import { useAuth } from "../../hooks/useAuth";

//Components
import Input from "../../components/Input";
import Button from "../../components/Button";

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
  //Contexts
  const { signIn, loading } = useAuth();

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
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
          />

          <Input
            placeholder="Senha"
            onChangeText={(t) => setPassword(t)}
            value={password}
            keyboardType="default"
            returnKeyType="send"
          />
        </AreaInput>

        <Button
          title="Acessar"
          color="#00b94a"
          loading={loading}
          onPress={() => signIn(email, password)}
        />

        <Link onPress={navigateToSignUp}>
          <LinkText>Não possui uma conta?</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
