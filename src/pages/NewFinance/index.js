//React
import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, Alert } from "react-native";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//date-fns
import { format } from "date-fns";

//react-firebase-translation-errors
import { translationFirebaseErrors } from "react-translation-firebase-errors";

//Hooks
import { useAuth } from "../../hooks/useAuth";

//Components
import Menu from "../../components/Menu";
import Input from "../../components/Input";
import Button from "../../components/Button";
import PickerSelect from "../../components/PickerSelect";

//Firebase
import firebase from "../../services/firebaseConnection";

//Styles
import { Background, SafeView } from "./styles";

export default function NewFinance() {
  const { user } = useAuth();

  const uid = user.uid;

  const [amountValue, setAmountValue] = useState("");
  const [type, setType] = useState("revenue");
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  async function handleSubmit() {
    setLoading(true);
    Keyboard.dismiss();

    let replaceAmount = amountValue.replace(",", ".");

    if (amountValue === "") {
      Alert.alert("Campo vazio");
      setLoading(false);
      return;
    }

    if (type === "") {
      Alert.alert("Campo vazio");
      setLoading(false);
      return;
    }

    if (isNaN(parseFloat(amountValue))) {
      Alert.alert("Apenas números");
      setLoading(false);
      return;
    }

    Alert.alert(
      "Confirmando dados",
      `Tipo ${type === "revenue" ? "Receita" : "Despesa"} - Valor: ${parseFloat(
        replaceAmount
      )}`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Continuar", onPress: () => handleAdd() },
      ]
    );

    setLoading(false);
  }

  async function handleAdd() {
    setLoading(true);

    let key = await firebase.database().ref("historic").child(uid).push().key;

    let replaceAmount = amountValue.replace(",", ".");

    await firebase
      .database()
      .ref("historic")
      .child(uid)
      .child(key)
      .set({
        amount: parseFloat(replaceAmount),
        type: type,
        date: format(new Date(), "dd/MM/yy"),
      });

    let user = firebase.database().ref("users").child(uid);

    await user
      .once("value")
      .then((snapshot) => {
        let amount = parseFloat(snapshot.val().amount);

        type === "expense"
          ? (amount -= parseFloat(replaceAmount))
          : (amount += parseFloat(amountValue));

        user.child("amount").set(amount);

        navigation.navigate("Home");
      })

      .catch((error) => {
        const err = translationFirebaseErrors(error.code);

        Alert.alert(err);
      })
      .finally(() => {
        setLoading(false);
        setAmountValue("");
      });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Menu />
        <SafeView>
          <Input
            placeholder="Valor desejado"
            onChangeText={(t) => setAmountValue(t)}
            value={amountValue}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
          />

          <PickerSelect setType={setType} type={type} />

          <Button
            title="Registrar"
            color="#00b94a"
            loading={loading}
            onPress={handleSubmit}
          />
        </SafeView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
