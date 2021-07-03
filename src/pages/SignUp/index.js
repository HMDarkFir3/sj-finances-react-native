//React
import React, { useState } from "react";
import { Keyboard } from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Hooks
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
  const { signUp } = useAuth();

  //States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //Navigation
  const navigation = useNavigation();

  //Functions
  function handleSignUp() {
    setLoading(true);
    signUp(name, email, password);
  }

  function navigateToSignIn() {
    navigation.navigate("SignIn");
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === "ios" ? "padding" : ""}
        enabled={true}
      >
        <AreaInput>
          <Input
            placeholder="Nome"
            onChangeText={(t) => setName(t)}
            value={name}
            keyboardType="default"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
          />

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
            secureTextEntry={true}
          />
        </AreaInput>

        <Button
          title="Cadastrar"
          color="#00b94a"
          loading={loading}
          onPress={handleSignUp}
        />

        <Link onPress={navigateToSignIn}>
          <LinkText>Já possui uma conta?</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
