//React
import React from "react";

//Components
import Input from "../../components/Input";

//Styles
import { Background, Container, Logo, AreaInput } from "./styles";

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Logo source={require("../../assets/images/Logo.png")} />
        <AreaInput>
          <Input placeholder="Email" />

          <Input placeholder="Senha" />
        </AreaInput>
      </Container>
    </Background>
  );
}
