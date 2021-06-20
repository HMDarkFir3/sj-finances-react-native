//React
import React from "react";

//Styles
import { CustomButton, TextButton } from "./styles";

export default function Input(props) {
  const { text, onPress } = props;

  return (
    <CustomButton onPress={onPress}>
      <TextButton>{text}</TextButton>
    </CustomButton>
  );
}
