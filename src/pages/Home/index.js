//React
import React, { useState, useEffect } from "react";

//date-fns
import { format } from "date-fns";

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

    await firebase
      .database()
      .ref("historic")
      .child(uid)
      .orderByChild("date")
      .equalTo(format(new Date(), "dd/MM/yy"))
      .limitToLast(10)
      .on("value", (snapshot) => {
        setHistoric([]);

        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            type: childItem.val().type,
            amount: childItem.val().amount,
            date: childItem.val().date,
          };

          setHistoric((oldArray) => [...oldArray, list].reverse());
        });
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
        <UserAmount>
          R$ {user && amount.toFixed(2).replace(".", ",")}
        </UserAmount>
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
