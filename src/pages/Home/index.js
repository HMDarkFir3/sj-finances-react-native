//React
import React, { useState, useEffect } from "react";

//Hooks
import { useAuth } from "../../hooks/useAuth";

//Components
import Menu from "../../components/Menu";
import HistoricList from "../../components/HistoricList";

//Firebase
import firebase from "../../services/firebaseConnection";

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
  const [historic, setHistoric] = useState([]);
  const [amount, setAmount] = useState(0);

  //Context
  const { user } = useAuth();

  const uid = user && user.uid;

  async function loadHistoric() {
    await firebase
      .database()
      .ref("users")
      .child(uid)
      .on("value", (snapshot) => {
        setAmount(snapshot.val().amount);
      });
  }

  useEffect(() => {
    loadHistoric();
  }, []);

  return (
    <Background>
      <Menu />
      <Container>
        <UserName>{user && user.name}</UserName>
        <UserAmount>R$ {user && amount}</UserAmount>
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
