//React
import React from "react";

//Styles
import { Container, Type, IconView, TypeText, AmountText } from "./styles";

//Icons
import { Feather } from "@expo/vector-icons";

export default function HistoricList(props) {
  const { type, amount } = props.data;

  return (
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

      <AmountText>R$ {amount}</AmountText>
    </Container>
  );
}
