//styled-components
import styled from "styled-components/native";
import { StyleSheet } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: #242424;
`;

export const styles = StyleSheet.create({
  loadingAnimation: {
    height: 200,
    width: 200,

    backgroundColor: "transparent",
  },
});
