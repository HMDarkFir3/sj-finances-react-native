//React
import React, { useState } from "react";
import { Platform, TouchableOpacity, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

//Styles
import { Container, Header } from "./styles";

export default function DatePicker(props) {
  const { onClose, date, onChange } = props;

  const [dateNow, setDateNow] = useState(new Date(date));

  return (
    <Container>
      {Platform.OS === "ios" && (
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </Header>
      )}

      <DateTimePicker
        style={{ backgroundColor: "#ffffff" }}
        mode="date"
        display="default"
        value={dateNow}
        onChange={(e, d) => {
          const currentDate = d || dateNow;

          setDateNow(currentDate);

          onChange(currentDate);
        }}
      />
    </Container>
  );
}
