//React
import React, { useContext } from "react";
import { View, Text } from "react-native";

import { AuthContext } from "../../contexts/AuthContext";

export default function Home() {
  const { user } = useContext(AuthContext);

  return <View></View>;
}
