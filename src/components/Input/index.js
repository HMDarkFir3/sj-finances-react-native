//React
import React from "react";

//Styles
import { CustomInput } from "./styles";

export default function Input(props) {
  const { ...rest } = props;

  return <CustomInput autoCorrect={false} autoCapitalize="none" {...rest} />;
}
