//React
import React, { useContext } from "react";
import { View, Text } from "react-native";

import Button from "../../components/Button";

import { AuthContext } from "../../contexts/AuthContext";

export default function Home() {
  const { user, loading, signOut } = useContext(AuthContext);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
