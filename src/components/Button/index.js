//React
import React from "react";
import { ActivityIndicator } from "react-native";

//Styles
import { CustomButton, TextButton } from "./styles";

export default function Button(props) {
  const { title, color, loading, onPress } = props;

  return (
    <CustomButton color={color} onPress={onPress}>
      {loading === true ? (
        <ActivityIndicator size="small" color="#242424" />
      ) : (
        <TextButton>{title}</TextButton>
      )}
    </CustomButton>
  );
}
