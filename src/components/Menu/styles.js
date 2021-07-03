//React
import { Platform } from "react-native";

//styled-components
import styled from "styled-components/native";

//react-native-iphone-x-helper
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.View`
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  height: 50px;

  margin-top: ${getStatusBarHeight() + 15 + "px"};
  margin-bottom: 15px;
  margin-left: 15px;
`;

export const ButtonMenu = styled.TouchableWithoutFeedback`
  align-items: center;
  justify-content: center;
`;
