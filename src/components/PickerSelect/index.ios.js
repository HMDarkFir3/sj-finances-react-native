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
        onValueChange={(value) => setType(value)}
        selectedValue={type}
      >
        <Picker.Item label="Receita" value="revenue" />
        <Picker.Item label="Despesa" value="expense" />
      </Picker>
    </Container>
  );
}
