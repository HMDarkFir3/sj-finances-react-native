//React
import React, { useState, useEffect, createContext } from "react";
import { Alert } from "react-native";
import { firebaseTranslationErrors } from "react-firebase-translation-errors";

//Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";

//Firebase
import firebase from "../services/firebaseConnection";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingAnimation, setLoadingAnimation] = useState(false);

  useEffect(() => {
    setLoadingAnimation(true);
    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem("@Finances:user");

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }

      setLoadingAnimation(false);
    }

    loadStorage();
  }, []);

  //SignUp Users
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
            storageUser(data);
          });
      })
      .catch((error) => {
        const err = firebaseTranslationErrors(error.code);
        Alert.alert("ATENÇÃO!", `${err}`, [{ text: "OK" }]);
      });

    setLoading(false);
  }

  //SignIn Users
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
            storageUser(data);
          });
      })
      .catch((error) => {
        const err = firebaseTranslationErrors(error.code);
        Alert.alert("ATENÇÃO!", `${err}`, [{ text: "OK" }]);
      });

    setLoading(false);
  }

  //SignOut Users
  async function signOut() {
    setLoading(true);

    await firebase.auth().signOut();
    await AsyncStorage.clear()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        const err = firebaseTranslationErrors(error.code);
        Alert.alert("ATENÇÃO!", `${err}`, [{ text: "OK" }]);
      });

    setLoading(false);
  }

  async function storageUser(data) {
    await AsyncStorage.setItem("@Finances:user", JSON.stringify(data));
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        loadingAnimation,
        signUp,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
