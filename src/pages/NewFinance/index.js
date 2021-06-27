//React
import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

//Hooks
import { useAuth } from "../../hooks/useAuth";

//Components
import Menu from "../../components/Menu";
import Input from "../../components/Input";
import Button from "../../components/Button";

//Styles
import { Background, SafeView } from "./styles";

export default function NewFinance() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState(null);

  const { loading } = useAuth();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>
        <Menu />
        <SafeView>
          <Input
            placeholder="Valor desejado"
            onChangeText={(t) => setAmount(t)}
            value={amount}
            keyboardType="numeric"
            returnKeyType="next"
            onSubmitEditing={() => Keyboard.dismiss()}
          />

          <Button
            title="Registrar"
            color="#00b94a"
            loading={loading}
            onPress={() => {}}
          />
        </SafeView>
      </Background>
    </TouchableWithoutFeedback>
  );
}
