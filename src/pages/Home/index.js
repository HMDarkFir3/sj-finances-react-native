//React
import React, { useState } from "react";

//Hooks
import { useAuth } from "../../hooks/useAuth";

//Components
import Menu from "../../components/Menu";
import HistoricList from "../../components/HistoricList";

//Styles
import {
  Background,
  Container,
  UserName,
  UserAmount,
  Title,
  List,
} from "./styles";

export default function Home() {
  const [historic, setHistoric] = useState([
    { key: "1", type: "receita", amount: 1200 },
    { key: "2", type: "despesa", amount: 200 },
    { key: "3", type: "receita", amount: 40 },
    { key: "4", type: "receita", amount: 89.62 },
    { key: "5", type: "receita", amount: 89.62 },
    { key: "6", type: "receita", amount: 89.62 },
    { key: "7", type: "receita", amount: 89.62 },
    { key: "8", type: "receita", amount: 89.62 },
  ]);

  //Context
  const { user } = useAuth();

  return (
    <Background>
      <Menu />
      <Container>
        <UserName>{user && user.name}</UserName>
        <UserAmount>R$ {user && user.amount}</UserAmount>
      </Container>

      <Title>Ultimas movimentações</Title>

      <List
        data={historic}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => <HistoricList data={item} />}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );
}
