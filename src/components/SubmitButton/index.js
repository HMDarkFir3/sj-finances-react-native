//React
import React from "react";
import { ActivityIndicator } from "react-native";

//Styles
import { CustomButton, TextButton } from "./styles";

export default function Input(props) {
  const { text, loading, onPress } = props;

  return (
    <CustomButton onPress={onPress}>
      {loading === true ? (
        <ActivityIndicator size="small" color="#242424" />
      ) : (
        <TextButton>{text}</TextButton>
      )}
    </CustomButton>
  );
}
