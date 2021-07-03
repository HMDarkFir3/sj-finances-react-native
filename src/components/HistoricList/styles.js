//styled-components
import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 5px;
  padding: 10px;

  background-color: rgba(0, 0, 0, 0.02);
  box-shadow: 2px 2px rgba(0, 0, 0, 0.2);
`;

export const Type = styled.View`
  flex-direction: row;
`;

export const IconView = styled.View`
  flex-direction: row;
  align-items: center;

  width: 85px;
  height: 25px;

  background-color: ${(props) =>
    props.type === "revenue" ? "#00b94a" : "#c62c36"};
  border-radius: 7px;
`;

export const TypeText = styled.Text`
  font-size: 16px;
  font-style: italic;
  color: #ffffff;
`;

export const AmountText = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #222222;
`;
