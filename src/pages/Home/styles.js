//styled-components
import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;

  background-color: #242424;
`;

export const Container = styled.View`
  margin-bottom: 25px;
  margin-left: 15px;
`;

export const UserName = styled.Text`
  font-size: 18px;
  font-style: italic;
  color: #ffffff;
`;

export const UserAmount = styled.Text`
  margin-top: 5px;

  font-size: 30px;
  font-weight: bold;
  color: #ffffff;
`;

export const Title = styled.Text`
  margin-bottom: 10px;
  margin-left: 15px;

  color: #00b94a;
`;

export const List = styled.FlatList.attrs({
  marginHorizontal: 15,
})`
  margin-left: 10px;
  margin-right: 10px;
  padding-top: 10px;

  background-color: #ffffff;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;
