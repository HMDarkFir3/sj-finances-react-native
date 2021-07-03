//React
import React from "react";
import { Picker } from "@react-native-picker/picker";

//Styles
import { Container } from "./styles";

export default function PickerSelect(props) {
  const { setType, type } = props;

  return (
    <Container>
      <Picker
        style={{
          width: "100%",
        }}
        onValueChange={(v) => setType(v)}
        selectedValue={type}
        mode="dialog"
        dropdownIconColor="#555555"
        prompt="Selecione"
      >
        <Picker.Item label="Receita" value="revenue" color="#00b94a" />
        <Picker.Item label="Despesa" value="expense" color="#c62c36" />
      </Picker>
    </Container>
  );
}
