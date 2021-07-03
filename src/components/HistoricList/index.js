//React
import React from "react";
import { TouchableWithoutFeedback } from "react-native";

//Styles
import {
  Container,
  Type,
  IconView,
  TypeText,
  Content,
  AmountText,
  DateText,
} from "./styles";

//Icons
import { Feather } from "@expo/vector-icons";

export default function HistoricList(props) {
  const { onLongPress } = props;
  const { type, amount, date } = props.data;

  return (
    <TouchableWithoutFeedback onLongPress={onLongPress}>
      <Container>
        <Type>
          <IconView type={type}>
            <Feather
              name={type === "revenue" ? "arrow-up" : "arrow-down"}
              color="#ffffff"
              size={20}
            />
            <TypeText>{type}</TypeText>
          </IconView>
        </Type>

        <Content>
          <AmountText>R$ {amount}</AmountText>
          <DateText>{date}</DateText>
        </Content>
      </Container>
    </TouchableWithoutFeedback>
  );
}
