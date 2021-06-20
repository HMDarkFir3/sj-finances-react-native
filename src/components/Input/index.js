//React
import React from "react";

//Styles
import { CustomInput } from "./styles";

export default function Input(props) {
  const { placeholder, autoCorrect, autoCapitalize } = props;

  return (
    <CustomInput
      placeholder={placeholder}
      autoCorrect={false}
      autoCapitalize="none"
    />
  );
}
