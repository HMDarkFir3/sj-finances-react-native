//React
import React, { useState, createContext } from "react";
import { Alert } from "react-native";
import { firebaseTranslationErrors } from "react-firebase-translation-errors";

//Firebase
import firebase from "../services/firebaseConnection";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  async function signUp(name, email, password) {
    setLoading(true);

    if (name === "") {
      Alert.alert("ATENÇÃO!", "Campo nome em branco.", [{ text: "OK" }]);
      setLoading(false);
      return;
    }

    if (email === "") {
      Alert.alert("ATENÇÃO!", "Campo email em branco.", [{ text: "OK" }]);
      setLoading(false);
      return;
    }

    if (password === "") {
      Alert.alert("ATENÇÃO!", "Campo senha em branco.", [{ text: "OK" }]);
      setLoading(false);
      return;
    }

    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await firebase
          .database()
          .ref("users")
          .child(uid)
          .set({
            name: name,
            email: email,
            amount: 0,
          })
          .then(() => {
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
            };

            setUser(data);
          });
      })
      .catch((error) => {
        const err = firebaseTranslationErrors(error.code);
        Alert.alert("ATENÇÃO!", `${err}`, [{ text: "OK" }]);
      });

    setLoading(false);
  }

  async function signIn(email, password) {
    setLoading(true);

    if (email === "") {
      Alert.alert("ATENÇÃO!", "Campo email em branco.", [{ text: "OK" }]);
      setLoading(false);
      return;
    }

    if (password === "") {
      Alert.alert("ATENÇÃO!", "Campo senha em branco.", [{ text: "OK" }]);
      setLoading(false);
      return;
    }

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        await firebase
          .database()
          .ref("users")
          .child(uid)
          .once("value")
          .then((snapshot) => {
            let data = {
              uid: uid,
              name: snapshot.val().name,
              email: value.user.email,
            };

            setUser(data);
          });
      })
      .catch((error) => {
        const err = firebaseTranslationErrors(error.code);
        Alert.alert("ATENÇÃO!", `${err}`, [{ text: "OK" }]);
      });

    setLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!user, user, loading, signUp, signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
}
