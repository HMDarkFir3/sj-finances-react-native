//React
import { Platform } from "react-native";

//styled-components
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  position: absolute;
  justify-content: flex-end;

  width: 100%;
  height: 100%;

  background-color: ${Platform.OS === "ios" ? "#00000066" : "transparent"};
`;

export const Header = styled.View`
  align-items: flex-end;
  justify-content: flex-end;

  width: 100%;

  padding: 16px;

  background-color: #ffffff;
  border-bottom-width: 1px;
  border-color: #888888;
`;
