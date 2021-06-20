//React
import React from "react";

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
  return (
    <Background>
      <Container>
        <Logo source={require("../../assets/images/Logo.png")} />
        <AreaInput>
          <Input placeholder="Email" />

          <Input placeholder="Senha" />
        </AreaInput>

        <SubmitButton text="Acessar" />

        <Link>
          <LinkText>Não possui uma conta?</LinkText>
        </Link>
      </Container>
    </Background>
  );
}
