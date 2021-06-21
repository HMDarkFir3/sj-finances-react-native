//React
import React, { useState, useContext } from "react";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Contexts
import { AuthContext } from "../../contexts/AuthContext";

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
  //Contexts
  const { signUp, loading } = useContext(AuthContext);

  //States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Navigation
  const navigation = useNavigation();

  //Functions
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
          />

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

        <SubmitButton
          title="Cadastrar"
          loading={loading}
          onPress={() => signUp(name, email, password)}
        />

        <Link onPress={navigateToSignIn}>
          <LinkText>Já possui uma conta?</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
