//React
import React, { useContext } from "react";
import { View, Text } from "react-native";

import SubmitButton from "../../components/SubmitButton";

import { AuthContext } from "../../contexts/AuthContext";

export default function Home() {
  const { user, loading, signOut } = useContext(AuthContext);

  return (
    <View>
      <SubmitButton title="Sair" loading={loading} onPress={() => signOut()} />
    </View>
  );
}
