//React
import React from "react";

//Styles
import { CustomInput } from "./styles";

export default function Input(props) {
  const { placeholder, onChangeText, value } = props;

  return (
    <CustomInput
      autoCorrect={false}
      autoCapitalize="none"
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
}
