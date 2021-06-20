//React
import React from "react";

//Styles
import { CustomButton, TextButton } from "./styles";

export default function Input(props) {
  const { text } = props;

  return (
    <CustomButton>
      <TextButton>{text}</TextButton>
    </CustomButton>
  );
}
