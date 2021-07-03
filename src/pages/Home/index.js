//React
import React, { useState, useEffect } from "react";
import { Alert } from "react-native";

//date-fns
import { format, isBefore } from "date-fns";

//react-firebase-translation-errors
import { translationFirebaseErrors } from "react-translation-firebase-errors";

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
      .equalTo(format(new Date(), "dd/MM/yyyy"))
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

          setHistoric((oldArray) => [...oldArray, list]);
        });
      });
  }

  function handleDelete(data) {
    const [itemDay, itemMonth, itemYear] = data.date.split("/");

    const itemDate = new Date(`${itemYear}/${itemMonth}/${itemDay}`);

    const currentDateformat = format(new Date(), "dd/MM/yyyy");

    const [currentDay, currentMonth, currentYear] =
      currentDateformat.split("/");

    const currentDate = new Date(
      `${currentYear}/${currentMonth}/${currentDay}`
    );

    if (isBefore(itemDate, currentDate)) {
      Alert.alert("Você não pode excluir um registro antigo.");
      return;
    }

    Alert.alert(
      "ATENÇÃO!",
      `Você deseja excluir${"\n"}${
        data.type === "expense" ? "Despesa" : "Receita"
      } - Valor: ${data.amount}`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Excluir",
          onPress: () => handleDeleteSuccess(data),
        },
      ]
    );
  }

  async function handleDeleteSuccess(data) {
    await firebase
      .database()
      .ref("historic")
      .child(uid)
      .child(data.key)
      .remove()
      .then(async () => {
        let currentAmount = amount;

        data.type === "expense"
          ? (currentAmount += parseFloat(data.amount))
          : (currentAmount -= parseFloat(data.amount));

        await firebase
          .database()
          .ref("users")
          .child(uid)
          .child("amount")
          .set(currentAmount);
      })
      .catch((error) => {
        const err = translationFirebaseErrors(error.code);

        Alert.alert(err);
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
        renderItem={({ item }) => (
          <HistoricList data={item} onLongPress={handleDelete} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Background>
  );
}
